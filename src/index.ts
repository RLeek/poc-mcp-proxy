import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import {
  ListToolsRequestSchema,
  ListToolsResult,
  CallToolRequestSchema,
  CallToolResult,
} from '@modelcontextprotocol/sdk/types.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { REGION, TOKEN } from './constantsAndEnv.js'
import { listTools, runTool } from './relevanceAiApi.js'

// Create server
const server = new Server(
  {
    name: 'relevanceAi-mcp-server',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {}, // list-changed is potentially useful
    },
  }
)

// Check tokens and regions are defined
if (!TOKEN) {
  throw new Error('RELEVANCE_AUTH_TOKEN is not set')
}

if (!REGION) {
  throw new Error('RELEVANCE_REGION is not set')
}

// Get the tools
server.setRequestHandler(ListToolsRequestSchema, async request => {
  // Since tools are being provided as arguments do we want to cache them and generate the
  // list tools request schema or dynamically etch them
  // Theoretically we could generate this at the start
    // Though that is annoying
    // Potentiall they could provide an auth list 
    

    // provide relevance auth token + list of requests 

  // Simplest way is to get list of ids and check 
  const tools = await listTools([])
  return {
    // So this just maps to the schema
    tools: tools
      .map((tool):ListToolsResult['tools'][number] => {
        return {
          name: tool.title,
          inputSchema: {
            type: 'object',
            ...tool.params_schema,
          },
          description: tool.description ?? 'No description',
        }
      })
  }
})

// Call tool
server.setRequestHandler(
  CallToolRequestSchema,
  async (request): Promise<CallToolResult> => {
    const tools = await listTools([])
    
    // So we just give it the tool name with the parameters
    // Can probably just call this GetTools() and if not populated call listTools()??

    const tool = tools.find(tool => tool.title === request.params.name)

    if (!tool) {
      return {
        isError: true,
        content: [
          {
            type: 'text',
            text: `Tool ${request.params.name} not found`,
          },
        ],
      }
    }

    // should return last lement
    const result = await runTool(tool, request.params.arguments ?? {})

    const finalResult = result.updates[result.updates.length-1];
    console.error("RESULTS")
    console.error(JSON.stringify(finalResult))
    console.error(JSON.stringify(finalResult.type))
    if (finalResult.type === "chain-fail") {
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: JSON.stringify(finalResult.errors)
          }
        ]
      }
    } else if (finalResult.type === "chain-success") {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(finalResult.output.output)
          }
        ]
      }
    } else {
      return {
        content: [
          {
            type: "text",
            text: "ERROR"
          }
        ]
      }
    }
  }
)


/*

{"results":[{"response_body":{"by":"griffinli","descendants":380,"id":43400989,"kids":[43403838,43401399,43408458,43406109,43401841,43401077,43407570,43401316,43408329,43407917,43405414,43401125,43402354,43401452,43405060,43406915,43408245,43405790,43405738,43401182,43404132,43401173,43401185,43403173,43407171,43401320,43401581,43405184,43406646,43402408,43401340,43407636,43407344,43401469,43407543,43401817,43401740,43405300,43401243,43404676,43403798,43401257,43401737,43402046,43401398,43405364,43401285,43401962,43403945,43401686,43404919,43401199,43407389,43407648,43401769,43401462,43401760,43401235,43403650,43402468,43405444,43406847,43403826,43401338,43401436,43402568,43401613,43401644,43401525,43405230,43407326,43401676,43407185,43401213,43407044,43407036,43401701,43401988,43404370,43401785,43401780,43404026,43404831,43404407,43402446,43401429,43401003],"score":1181,"time":1742313567,"title":"Two new PebbleOS watches","type":"story","url":"https://ericmigi.com/blog/introducing-two-new-pebbleos-watches/"},"status":200}]}

*/



// initial start (this will actually work)
async function runServer() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("RelevanceAi MCP Server running on stdio");
}

runServer().catch((error) => {
  console.error("Fatal error running server:", error);
  process.exit(1);
});
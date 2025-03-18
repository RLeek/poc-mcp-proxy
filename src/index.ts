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
    tools: tools.map((tool): ListToolsResult['tools'][number] => {
      return {
        name: tool.title,
        inputSchema: {
          type: 'object',
          ...tool.params_schema,
        },
        description: tool.description ?? 'No description',
      }
    }),
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

    const result = await runTool(tool, request.params.arguments ?? {})

    if (result.errors.length) {
      return {
        isError: true,
        content: [
          {
            type: 'text',
            text: JSON.stringify(result.errors),
          },
        ],
      }
    }

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(result.output, null, 2),
        },
      ],
    }
  }
)


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
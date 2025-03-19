import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import {
  ListToolsRequestSchema,
  ListToolsResult,
  CallToolRequestSchema,
  CallToolResult,
} from '@modelcontextprotocol/sdk/types.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { getTools, listTools, runTool } from './Api.js';

// Create server
const server = new Server(
  {
    name: 'relevanceAi-mcp-server',
    version: '0.1.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
)

// Todo: Fix getting environment variables
// and make sure they are correct when in use
export const TOKEN = process.env.RELEVANCE_AUTH_TOKEN!;
if (!TOKEN) {
  throw new Error('RELEVANCE_AUTH_TOKEN is not set')
}

export const REGION = process.env.RELEVANCE_REGION!;
if (!REGION) {
  throw new Error('RELEVANCE_REGION is not set')
}

export const TOOLS = process.env.TOOLS?.split(" ")!;
if (!TOOLS) {
  throw new Error("TOOLS is not set")
}


export var BASE_API_URL = `https://api-${REGION}.stack.tryrelevance.com/latest`

server.setRequestHandler(ListToolsRequestSchema, async request => {
  const tools = await listTools(TOOLS)
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
            text: JSON.stringify(finalResult.output.output, null, 2)
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
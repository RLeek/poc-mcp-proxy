import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import {
  ListToolsRequestSchema,
  ListToolsResult,
  CallToolRequestSchema,
  CallToolResult,
  Tool,
  CallToolRequest,
  JSONRPCError
} from '@modelcontextprotocol/sdk/types.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { listTools, runTool } from './api.js';

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


if (!process.env.RELEVANCE_AUTH_TOKEN) {
  throw new Error('RELEVANCE_AUTH_TOKEN is not set')
}
export const TOKEN = process.env.RELEVANCE_AUTH_TOKEN

if (!process.env.RELEVANCE_REGION) {
  throw new Error('RELEVANCE_REGION is not set')
}
export const REGION = process.env.RELEVANCE_REGION

export const BASE_API_URL = `https://api-${REGION}.stack.tryrelevance.com/latest`

server.setRequestHandler(
  ListToolsRequestSchema, 
  async (request):Promise<ListToolsResult> => {


    if (!process.env.TOOL_IDS) {
      throw new Error("TOOLS is not set")
    }
    const TOOL_IDS = JSON.parse(process.env.TOOL_IDS);
    
    
    const tools = await listTools(TOOL_IDS)
    return {
      tools: tools
        .map((tool):Tool => {
          return {
            name: tool.title,
            inputSchema: {
              type: 'object',
              ...tool.params_schema,
            },
            description: tool.description
          }
        })
    }
})

server.setRequestHandler(
  CallToolRequestSchema,
  async (request:CallToolRequest): Promise<CallToolResult | JSONRPCError> => {

    if (!process.env.TOOL_IDS) {
      throw new Error("TOOLS is not set")
    }
    const TOOL_IDS = JSON.parse(process.env.TOOL_IDS);
    
    const tools = await listTools(TOOL_IDS)

    const tool = tools.find(tool => tool.title === request.params.name)

    // todo: not sure about this
    if (!tool) {
      return {
        "jsonrpc": "2.0",
        "id": 3,
        "error": {
          "code": -32602,
          "message": `Unknown tool: ${request.params.name}`
        }      
      }
    }

    const result = await runTool(tool, request.params.arguments ?? {})
    const finalResult = result.updates[result.updates.length-1];
  
    if (result.type === "complete") {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(finalResult.output.output, null, 2)
          }
        ]
      }
    } else if (result.type === "failed") {
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: JSON.stringify(finalResult.errors)
          }
        ]
      }
    } else { // Chain timeout
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: "Time limit exceeded"
          }
        ]
      }
    }
  }
)

async function runServer() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("RelevanceAi MCP Server running on stdio");
}

runServer().catch((error) => {
  console.error("Fatal error running server:", error);
  process.exit(1);
});
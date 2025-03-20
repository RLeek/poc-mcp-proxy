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
import { consts } from './utilities.js';

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

server.setRequestHandler(
  ListToolsRequestSchema, 
  async (request):Promise<ListToolsResult> => {
    const tools = await listTools(consts().TOOL_IDS)
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
    const tools = await listTools(consts().TOOL_IDS)

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
  consts() // remove this
  console.error("RelevanceAi MCP Server running on stdio");
}

runServer().catch((error) => {
  console.error("Fatal error running server:", error);
  process.exit(1);
});
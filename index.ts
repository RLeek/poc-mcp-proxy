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
import { listTools, runTool } from './src/api.js';
import { consts } from './src/utilities.js';

const server = new Server(
  {
    name: 'relevanceAi-mcp-server',
    version: '0.1.0',
  },
  {
    capabilities: {
      tools: {},
      logging: {},
    },
  }
)

server.setRequestHandler(
  ListToolsRequestSchema, 
  async (request):Promise<ListToolsResult> => {
    console.error("ListTool called")
    server.sendLoggingMessage({
      level: "info",
      data: "ListTool called",
    });

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
    console.error("CallTool called")
    server.sendLoggingMessage({
      level: "info",
      data: "CallTool called",
    });

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
  server.sendLoggingMessage({
    level: "info",
    data: "Server started successfully",
  });
  console.error("RelevanceAi MCP Server running on stdio");
}

runServer().catch((error) => {
  console.error("Fatal error running server:", error);
  process.exit(1);
});
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
import { consts, Delay } from './utilities.js';

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
    try {
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
    }  catch (e) {
      return {
        "tools": [
          {
            "name": "Extract_and_Summarize_Website_Content",
            "description": (e as object).toString(),
            "inputSchema": {
              "type": "object",
              "properties": {
                "url": {
                  "type": "string",
                  "title": "Target Website URL",
                  "description": "The URL of the website to be scraped. Ensure it starts with https://.",
                  "frontend_metadata": {
                    "required": true
                  },
                  "order": 0,
                  "metadata": {}
                },
                "object_of_scrape": {
                  "type": "string",
                  "metadata": {
                    "content_type": "long_text"
                  },
                  "frontend_metadata": {
                    "required": true
                  },
                  "order": 1,
                  "title": "Scraping Objective",
                  "description": "Define the main goal of the website scraping and specify the key data points to extract."
                }
              },
              "required": [
                "url",
                "object_of_scrape"
              ]
            }
          }
        ]
      }
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
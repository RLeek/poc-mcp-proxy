import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import {
  ListToolsRequestSchema,
  ListToolsResult,
  CallToolRequestSchema,
  CallToolResult,
} from '@modelcontextprotocol/sdk/types.js'
import { appendFileSync } from 'node:fs'
import { Studio, TriggerStudioOutput } from './types.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'

function log(message: unknown) {
  appendFileSync('log.txt', `${JSON.stringify(message)}\n`)
}

log({ message: 'start', TOKEN: process.env.RELEVANCE_AUTH_TOKEN })

const server = new Server(
  {
    name: 'poc-mcp-proxy',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
)

const TOKEN = process.argv[2] ?? process.env.RELEVANCE_AUTH_TOKEN
const REGION = process.argv[3] ?? process.env.RELEVANCE_REGION
if (!TOKEN) {
  log({ message: 'unset', TOKEN })
  throw new Error('RELEVANCE_AUTH_TOKEN is not set')
}

if (!REGION) {
  log({ message: 'unset', REGION })
  throw new Error('RELEVANCE_REGION is not set')
}

const BASE_API_URL = `https://api-${REGION}.stack.tryrelevance.com/latest`

log({ message: 'start', REGION, BASE_API_URL })

server.setRequestHandler(ListToolsRequestSchema, async request => {
  const tools = await listTools()

  return {
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

server.setRequestHandler(
  CallToolRequestSchema,
  async (request): Promise<CallToolResult> => {
    const tools = await listTools()

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

const transport = new StdioServerTransport()
await server.connect(transport)

async function fetchRelevance<T>(
  path: `/${string}`,
  init?: RequestInit
): Promise<T> {
  const response = await fetch(`${BASE_API_URL}${path}`, {
    ...init,
    headers: {
      Authorization: TOKEN,
    },
  })

  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${path}: ${
        response.statusText
      } - ${await response.text()}`
    )
  }

  return response.json()
}

let cache:
  | (Studio & {
      title: string
      description: string
      params_schema: Record<string, any>
    })[]
  | null = null
async function listTools() {
  if (cache) {
    return cache
  }

  const seenTitle = new Set<string>()

  const searchParams = new URLSearchParams({
    filters: JSON.stringify([
      {
        filter_type: 'exact_match',
        field: 'project',
        condition_value: TOKEN.split(':')[0],
      },
    ]),
    page_size: '1000',
  }).toString()
  const tools = await fetchRelevance<{ results: Studio[] }>(
    `/studios/list?${searchParams}`
  )
  cache = tools.results
    .map(tool => {
      return {
        ...tool,
        // title: tool.title?.replace(' ', '_') ?? 'unknown_tool',
        title: tool.title ?? 'unknown tool',

        description: tool.description ?? 'No description',
        params_schema: tool.params_schema ?? {},
      }
    })
    .filter(tool => {
      if (seenTitle.has(tool.title)) {
        return false
      }
      seenTitle.add(tool.title)
      return true
    })

  return cache
}

async function runTool(tool: Studio, params: Record<string, any>) {
  const response = await fetchRelevance<TriggerStudioOutput>(
    `/studios/${tool.studio_id}/trigger`,
    {
      method: 'POST',
      body: JSON.stringify({ params }),
    }
  )

  return response
}

import { BASE_API_URL, TOKEN } from './constantsAndEnv.js'
import { Studio, TriggerStudioOutput } from './types.js'

export async function fetchRelevance<T>(
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


export async function listTools(studios: Array<{studioIds: string}>) {
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

  // Fetch based on url search params
  const tools = await fetchRelevance<{ results: Studio[] }>(
    `/studios/list?${searchParams}`
  )

  // Return results 
  cache = tools.results
    .map(tool => {
      return {
        ...tool,
        // This is required for claude
        title: tool.title?.replace(' ', '_') ?? 'unknown_tool',
        description: tool.description ?? 'No description',
        params_schema: tool.params_schema ?? {},
      }
    })

  return cache
}

// todo: Will need to replace with frontend long polling logic 
// Check fronend for how to implement this
export async function runTool(tool: Studio, params: Record<string, any>) {
  const response = await fetchRelevance<TriggerStudioOutput>(
    `/studios/${tool.studio_id}/trigger`,
    {
      method: 'POST',
      body: JSON.stringify({ params }),
    }
  )

  return response
}

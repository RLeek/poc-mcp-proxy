import { BASE_API_URL, TOKEN } from './constantsAndEnv.js'
import { cleanAnthropicInput } from './llm_param_cleaner.js'
import { Studio, TriggerStudioOutput } from './types.js'
import { StudioAsyncPollOutput, TriggerStudioAsyncOutput } from './types/codegen/better-api.js'

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
      return cleanAnthropicInput({
        ...tool,
        // This is required for claude
        // Clean up for claude so it makes sense 
        title: tool.title?.replace(' ', '_') ?? 'unknown_tool',
        description: tool.description ?? 'No description',
        params_schema: tool.params_schema ?? {}
      })
    })

  return cache
}

// todo: Will need to replace with frontend long polling logic 
// Check fronend for how to implement this
export async function runTool(tool: Studio, params: Record<string, any>) {
  // Rewrite this so it works nicely with asynchronous polling s

  const response = await fetchRelevance<TriggerStudioAsyncOutput>(
    `/studios/${tool.studio_id}/trigger_async`,
    {
      method: 'POST',
      body: JSON.stringify({ params }),
    }
  )

  let runToolStatus = {
    status: "inprogress",
    job: response.job_id,
    project: response.project,
    studio: response.studio_id
  }

  return await waitTillToolFinished(runToolStatus);
}


// How do we integrate this with claude if something is taking too long
// (claude needs to send a kill instruction???)

async function waitTillToolFinished(runToolStatus: {status: string, job: string, project: string, studio: string}) {
  let response: StudioAsyncPollOutput;
  while (runToolStatus.status === "inprogress") {
    response = await fetchRelevance<StudioAsyncPollOutput>(
      `/studios/${runToolStatus.studio}/async_poll/${runToolStatus.job}`,
      {
        method: 'GET',
      }
    )
    console.error(response);
    runToolStatus.status = response.type
  }
  return response!
}

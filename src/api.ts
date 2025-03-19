import { BASE_API_URL, TOKEN } from './index.js'
import { cleanAnthropicInput } from './llm_param_cleaner.js'
import { Studio } from './types.js'
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

export async function getTools(studioIds: Array<string>) {
  const tools: Studio[] = []
  for (const studioId of studioIds) {
    tools.push(await fetchRelevance(
      `/studios/${studioId}/get`
    ))
  }
  console.error("TOOLS ARE")
  console.error(tools)
}

export async function listTools(studios: Array<string>) {
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
  return tools.results
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
}

// todo: Will need to replace with frontend long polling logic 
// Check fronend for how to implement this
export async function runTool(tool: Studio, params: Record<string, any>) {
  // Rewrite this so it works nicely with asynchronous polling s


  // So it mios
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
// Mhmm not sure if that is required

async function waitTillToolFinished(runToolStatus: {status: string, job: string, project: string, studio: string}) {
  let response: StudioAsyncPollOutput;
  while (runToolStatus.status === "inprogress") {
    response = await fetchRelevance<StudioAsyncPollOutput>(
      `/studios/${runToolStatus.studio}/async_poll/${runToolStatus.job}`,
      {
        method: 'GET',
      }
    )
    runToolStatus.status = response.type
    new Promise( resolve => setTimeout(resolve, 100));
  }
  return response!
}

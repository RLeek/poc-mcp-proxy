import { BASE_API_URL, TOKEN } from './index.js'
import { StudioAsyncPollOutput, TriggerStudioAsyncInput, TriggerStudioAsyncOutput } from './types/codegen/better-api.js'
import { Studio } from './types/studio.js'
import { Delay } from './utilities.js';

const DELAYTIME = 1000;

export const fetchRelevance = async <T,>(  
  path: `/${string}`,
  init?: RequestInit
): Promise<T> => {
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

let toolCache:
  | (Studio & {
      title: string
      description: string
      params_schema: Record<string, any>
    })[]
  | null = null
export const listTools = async (
  studios: Array<string>
) => {
  if (toolCache) {
    return toolCache
  }

  const searchParams = new URLSearchParams({
    filters: JSON.stringify([
      {
        filter_type: 'exact_match',
        field: 'project',
        condition_value: TOKEN.split(':')[0],
      },
      {
        filter_type: 'or',
        condition_value: 
          studios.map((studio) => {
            return {
              filter_type: 'exact_match',
              field: 'studio_id',
              condition_value: studio
            }
          }
         )
      }
    ]),
    page_size: '1000',
  });

  const tools = await fetchRelevance<{ results: Studio[] }>(
    `/studios/list?${searchParams.toString()}`
  )
  toolCache = tools.results
    .map(tool => {
      return {
        ...tool,
        title: tool.title?.replaceAll(' ', '_') ?? 'unknown_tool',
        description: tool.description ?? 'No description',
        params_schema: tool.params_schema ?? {}
      }
    })
  return toolCache

}

export const runTool = async (
  tool: Studio, 
  params: TriggerStudioAsyncInput
) => {
  const response = await fetchRelevance<TriggerStudioAsyncOutput>(
    `/studios/${tool.studio_id}/trigger_async`,
    {
      method: 'POST',
      body: JSON.stringify({ params }),
    }
  )

  return await pollForCompletion(response);
}

export const pollForCompletion = async (
  runningToolDetails: TriggerStudioAsyncOutput
): Promise<StudioAsyncPollOutput> => {
  const {job_id, studio_id} = runningToolDetails;

  let response = await fetchRelevance<StudioAsyncPollOutput>(
    `/studios/${studio_id}/async_poll/${job_id}`,
    {
      method: 'GET'
    }
  )

  while (response.type === "inprogress") {
    response = await fetchRelevance<StudioAsyncPollOutput>(
      `/studios/${studio_id}/async_poll/${job_id}`,
      {
        method: 'GET',
      }
    )
    Delay(DELAYTIME);
  }

  return response;
}

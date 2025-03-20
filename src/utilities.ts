
export const Delay = async (ms: number) =>
    await new Promise((res) => setTimeout(res, ms));


// Fix this so it follows a set/get constructor style thing that is accessible anywhere
// Yeah that would make it a lot more useful
let constsCache:
  | {TOKEN:string, REGION:string, TOOL_IDS: Array<string>, BASE_API_URL: string}
  | null = null
export const consts = () => {
    if (constsCache) {
        return constsCache
    }
    if (!process.env.RELEVANCE_AUTH_TOKEN) {
        console.error("RELEVANCE_AUTH_TOKEN is not set")
        throw new Error('RELEVANCE_AUTH_TOKEN is not set')
    }
    const TOKEN = process.env.RELEVANCE_AUTH_TOKEN
      
    if (!process.env.RELEVANCE_REGION) {
        console.error("RELEVANCE_REGION is not set")
        throw new Error('RELEVANCE_REGION is not set')
    }
    const REGION = process.env.RELEVANCE_REGION
      
    if (!process.env.TOOL_IDS) {
        console.error("TOOLS is not set")
        throw new Error("TOOLS is not set")
    }
    const TOOL_IDS = process.env.TOOL_IDS.split(' ');

    const BASE_API_URL = `https://api-${REGION}.stack.tryrelevance.com/latest`

    constsCache = {
        TOKEN: TOKEN,
        REGION: REGION,
        TOOL_IDS: TOOL_IDS,
        BASE_API_URL: BASE_API_URL
    }
    return constsCache
}
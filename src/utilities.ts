
export const Delay = async (ms: number) =>
    await new Promise((res) => setTimeout(res, ms));


// Fix this so it follows a set/get constructor style thing that is accessible anywhere
// Yeah that would make it a lot more useful
let constsCache:
  | {TOKEN:string, REGION:string, TOOL_IDS: Array<string>, BASE_API_URL: string}
  | null = null
export const consts = () => {
    constsCache = {
        TOKEN: "f79c3c1a258f-4144-afa8-7cf7dab7eb78:sk-NTdkYWViYzYtNjhmZC00ZTdlLWI5NmEtODVjOGVmYjMwNGU2",
        REGION: "f1db6c",
        BASE_API_URL: `https://api-f1db6c.stack.tryrelevance.com/latest`,
        TOOL_IDS: ["1211fa18-50a3-414e-a0ed-567a1a1c66dc","83a672f6-42db-4cab-a1a4-d4e2270321fd"]
    }
    return constsCache

    /*
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
        console.error("TOOL_IDS is not set")
        throw new Error(JSON.stringify(process.env))
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
    */
}
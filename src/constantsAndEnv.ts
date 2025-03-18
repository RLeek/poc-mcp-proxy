// Need to add type checking here for it to work
export const TOKEN = process.env.RELEVANCE_AUTH_TOKEN!;
export const REGION = process.env.RELEVANCE_REGION!;

export const BASE_API_URL = `https://api-${REGION}.stack.tryrelevance.com/latest`

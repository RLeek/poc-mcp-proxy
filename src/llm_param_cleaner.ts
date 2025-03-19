// Anthropic can only handle [a-zA-Z0-9_-]{64} characters in function call field names, so we need to clean them up for it to work
export const cleanAnthropicInput = <T extends object>(params: T): T => {
  // This whole thing is a hack and I don't like it
  // Also how do we know the spec for anthropic input???
  // we just want to replace the input don't we
  // This is so messy ahhh
  // There might be a better strategy
  const regex = /[^a-zA-Z0-9_-]/g;
  return  Object.fromEntries(
    Object.entries(params).map(([k, v]) => {
    if (k.length > 64) {
      throw new Error(`Property name "${k}" is >64 characters in length. Please shorten it to <64 characters.`);
    }
    k = k.replaceAll(regex, "_")
    // This is a hacky edgecase AHHHHHHh
    if (k === "title") { 
      v = (v as string).replaceAll(regex, "_")
    }
    return [k,v]
  })) as T;
}
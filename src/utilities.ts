
export const Delay = async (ms: number) =>
    await new Promise((res) => setTimeout(res, ms));
  
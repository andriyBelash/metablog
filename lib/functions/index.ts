type AsyncOperation<T> = () => Promise<T>;
type AsyncResult<T> = [T | null, Error | null];

export async function useAsyncOperation<T>(operation: AsyncOperation<T>): Promise<AsyncResult<T>> {
  try {
    const data = await operation();
    return [data, null];
  } catch (error) {
    return [null, error as any];
  }
}
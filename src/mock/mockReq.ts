export async function mockReq<T>(data: T) {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

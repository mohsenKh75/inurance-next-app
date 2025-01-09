import { mockReq } from "@/mock/mockReq";
import { useCallback, useState } from "react";

interface Props<T> {
  req?: (() => Promise<T>) | Promise<T>;
}
export function useApi<T>({ req }: Props<T>) {
  const [pending, setPending] = useState(false);

  const mockRequest = useCallback(async (data: T): Promise<T> => {
    setPending(true);
    try {
      const response = await mockReq(data);
      return response;
    } finally {
      setPending(false);
    }
  }, []);

  const request = useCallback(async (): Promise<T | undefined> => {
    setPending(true);
    if (req) {
      try {
        if (typeof req === "function") {
          return await req();
        }
        return await req;
      } finally {
        setPending(false);
      }
    }
  }, [req]);

  return { mockRequest, request, pending };
}

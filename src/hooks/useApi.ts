import { mockReq } from "@/mock/mockReq";
import { useState, useCallback } from "react";

export function useApi<T>() {
  const [pending, setPending] = useState(false);

  const request = useCallback(async (data: T): Promise<T> => {
    setPending(true);
    try {
      const response = await mockReq(data);
      return response;
    } finally {
      setPending(false);
    }
  }, []);

  return { request, pending };
}

import axios, { AxiosResponse } from "axios";

export interface ApiRequest<T> {
  ep: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: T | null;
}

export async function apiHandler<T>({
  ep,
  method = "GET",
  body = null,
}: ApiRequest<T>): Promise<AxiosResponse<any> | Error> {
  try {
    const response = await axios({
      method,
      url: ep,
      data: body,
    });

    return response;
  } catch (err) {
    return err as Error;
  }
}

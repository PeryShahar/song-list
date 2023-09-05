import axiosBackendClient, { axiosBaseUrl } from "../axios/axios-client";
import { SongsApi } from "./generated";

export const songsApi = new SongsApi(
  {
    basePath: axiosBaseUrl,
    isJsonMime: () => false,
  },
  undefined,
  axiosBackendClient
);
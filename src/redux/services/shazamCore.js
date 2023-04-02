import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const X_RapidAPI_Key = import.meta.env.VITE_X_RAPIDAPI_KEY;

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      if (X_RapidAPI_Key) {
        headers.set("X-RapidAPI-Key", X_RapidAPI_Key);
      }
      return headers;
    },
  }),

  // here we can add parameters for endpoints and export them to use in relevant comonents/pages
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: "/charts/world" }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;

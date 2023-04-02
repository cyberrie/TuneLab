import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
require("dotenv").config();

const X_RapidAPI_Key = process.env.X_RapidAPI_Key;

fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: () => {
      headers.set("X-RapidAPI-Key", X_RapidAPI_Key);
    },
  }),
});

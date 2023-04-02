import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  env: {
    X_RAPIDAPI_KEY: process.env.X_RapidAPI_Key,
  },
});

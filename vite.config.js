import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  env: {
    VITE_GEO_API_KEY: process.env.VITE_GEO_API_KEY,
    VITE_SHAZAM_CORE_RAPID_API_KEY: process.env.VITE_SHAZAM_CORE_RAPID_API_KEY,
  },
});

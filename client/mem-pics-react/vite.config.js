import dotenv from "dotenv";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  define: {
    "process.env": process.env,
  },

  server: {
    proxy: {
      // string shorthand
      // "/foo": "http://localhost:4567/foo",
      // with options
      "/api": {
        target: process.env.API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

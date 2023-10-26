import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "!": path.resolve(__dirname, "./public"),
      "#": path.resolve(__dirname, "./src/assets"),
    },
  },
  base: "/",
});

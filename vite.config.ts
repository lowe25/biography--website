import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  //Remove for uploading
  base: "/biography--website/",
  build: {
    outDir: "docs",
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        album: resolve(__dirname, "album.html"),
        tech: resolve(__dirname, "tech.html"),
      },
    },
  },
});

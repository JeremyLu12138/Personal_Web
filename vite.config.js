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
        project: resolve(__dirname, "project.html"),
        projectNeuralCore: resolve(__dirname, "project-neural-core.html"),
        projectQuantumOs: resolve(__dirname, "project-quantum-os.html"),
        projectDataVortex: resolve(__dirname, "project-data-vortex.html"),
        projectBioLink: resolve(__dirname, "project-bio-link.html"),
        projectGridSync: resolve(__dirname, "project-grid-sync.html"),
      },
    },
  },
});

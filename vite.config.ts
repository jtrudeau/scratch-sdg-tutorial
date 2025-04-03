import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add base path for GitHub Pages - use your repository name
  // If your repo is <username>.github.io, you can leave this as "/"
  base: process.env.NODE_ENV === 'production' ? '/my-custom-project-name/' : '/',
}));

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger"; // Ensure this import is correct

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
   base: process.env.NODE_ENV === 'production' ? '/pastel-palace-rental/' : '/',
  server: {
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(), // Conditionally apply the plugin only in development mode
  ].filter(Boolean), // Filters out falsey values like undefined or false
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

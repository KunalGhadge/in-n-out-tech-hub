import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Build a static site for Vercel
  build: {
    outDir: "dist",
    rollupOptions: {
      // Ensure all assets are emitted correctly
    },
  },
  // No server preset needed for static deployment
});

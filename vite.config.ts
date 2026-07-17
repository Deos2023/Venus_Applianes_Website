import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from "rollup-plugin-visualizer";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Keep our large data files in a separate chunk to improve loading
          if (id.includes('src/lib/ac-selection-data') || id.includes('src/lib/ac-data')) {
            return 'ac-data';
          }
          // Let Vite handle the rest automatically, avoiding circular dependencies
        },
      },
    },
  },
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 75 },
      jpg: { quality: 75 },
      webp: { quality: 75 },
      avif: { quality: 70 },
      svg: {
        plugins: [
          {
            name: 'preset-default',
          },
        ],
      },
    }),
    visualizer({
      open: true,
      gzipSize: true,
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

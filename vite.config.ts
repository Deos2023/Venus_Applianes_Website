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
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'react';
            if (id.includes('react-router-dom')) return 'router';
            if (id.includes('framer-motion')) return 'motion';
            if (id.includes('lucide-react')) return 'lucide';
            if (id.includes('@radix-ui')) return 'radix';
            return 'vendor';
          }
          if (id.includes('src/lib/ac-selection-data') || id.includes('src/lib/ac-data')) {
            return 'ac-data';
          }
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

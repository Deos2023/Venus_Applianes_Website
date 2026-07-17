// vite.config.ts
import { defineConfig } from "file:///E:/GitHubCloneProject/Venus_Applianes_Website/node_modules/vite/dist/node/index.js";
import react from "file:///E:/GitHubCloneProject/Venus_Applianes_Website/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///E:/GitHubCloneProject/Venus_Applianes_Website/node_modules/lovable-tagger/dist/index.js";
import { visualizer } from "file:///E:/GitHubCloneProject/Venus_Applianes_Website/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import { ViteImageOptimizer } from "file:///E:/GitHubCloneProject/Venus_Applianes_Website/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
var __vite_injected_original_dirname = "E:\\GitHubCloneProject\\Venus_Applianes_Website";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) return "react";
            if (id.includes("react-router-dom")) return "router";
            if (id.includes("framer-motion")) return "motion";
            if (id.includes("lucide-react")) return "lucide";
            if (id.includes("@radix-ui")) return "radix";
            return "vendor";
          }
          if (id.includes("src/lib/ac-selection-data") || id.includes("src/lib/ac-data")) {
            return "ac-data";
          }
        }
      }
    }
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
            name: "preset-default"
          }
        ]
      }
    }),
    visualizer({
      open: true,
      gzipSize: true
    }),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxHaXRIdWJDbG9uZVByb2plY3RcXFxcVmVudXNfQXBwbGlhbmVzX1dlYnNpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXEdpdEh1YkNsb25lUHJvamVjdFxcXFxWZW51c19BcHBsaWFuZXNfV2Vic2l0ZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovR2l0SHViQ2xvbmVQcm9qZWN0L1ZlbnVzX0FwcGxpYW5lc19XZWJzaXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgY29tcG9uZW50VGFnZ2VyIH0gZnJvbSBcImxvdmFibGUtdGFnZ2VyXCI7XHJcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tIFwicm9sbHVwLXBsdWdpbi12aXN1YWxpemVyXCI7XHJcbmltcG9ydCB7IFZpdGVJbWFnZU9wdGltaXplciB9IGZyb20gJ3ZpdGUtcGx1Z2luLWltYWdlLW9wdGltaXplcic7XHJcblxyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4gKHtcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6IFwiOjpcIixcclxuICAgIHBvcnQ6IDgwODAsXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcclxuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcclxuICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdyZWFjdCcpIHx8IGlkLmluY2x1ZGVzKCdyZWFjdC1kb20nKSkgcmV0dXJuICdyZWFjdCc7XHJcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygncmVhY3Qtcm91dGVyLWRvbScpKSByZXR1cm4gJ3JvdXRlcic7XHJcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnZnJhbWVyLW1vdGlvbicpKSByZXR1cm4gJ21vdGlvbic7XHJcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbHVjaWRlLXJlYWN0JykpIHJldHVybiAnbHVjaWRlJztcclxuICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdAcmFkaXgtdWknKSkgcmV0dXJuICdyYWRpeCc7XHJcbiAgICAgICAgICAgIHJldHVybiAndmVuZG9yJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnc3JjL2xpYi9hYy1zZWxlY3Rpb24tZGF0YScpIHx8IGlkLmluY2x1ZGVzKCdzcmMvbGliL2FjLWRhdGEnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2FjLWRhdGEnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIFZpdGVJbWFnZU9wdGltaXplcih7XHJcbiAgICAgIHBuZzogeyBxdWFsaXR5OiA4MCB9LFxyXG4gICAgICBqcGVnOiB7IHF1YWxpdHk6IDc1IH0sXHJcbiAgICAgIGpwZzogeyBxdWFsaXR5OiA3NSB9LFxyXG4gICAgICB3ZWJwOiB7IHF1YWxpdHk6IDc1IH0sXHJcbiAgICAgIGF2aWY6IHsgcXVhbGl0eTogNzAgfSxcclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAncHJlc2V0LWRlZmF1bHQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICB2aXN1YWxpemVyKHtcclxuICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgZ3ppcFNpemU6IHRydWUsXHJcbiAgICB9KSxcclxuICAgIG1vZGUgPT09ICdkZXZlbG9wbWVudCcgJiZcclxuICAgIGNvbXBvbmVudFRhZ2dlcigpLFxyXG4gIF0uZmlsdGVyKEJvb2xlYW4pLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1QsU0FBUyxvQkFBb0I7QUFDNVYsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHVCQUF1QjtBQUNoQyxTQUFTLGtCQUFrQjtBQUMzQixTQUFTLDBCQUEwQjtBQUxuQyxJQUFNLG1DQUFtQztBQVN6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixhQUFhLElBQUk7QUFDZixjQUFJLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDL0IsZ0JBQUksR0FBRyxTQUFTLE9BQU8sS0FBSyxHQUFHLFNBQVMsV0FBVyxFQUFHLFFBQU87QUFDN0QsZ0JBQUksR0FBRyxTQUFTLGtCQUFrQixFQUFHLFFBQU87QUFDNUMsZ0JBQUksR0FBRyxTQUFTLGVBQWUsRUFBRyxRQUFPO0FBQ3pDLGdCQUFJLEdBQUcsU0FBUyxjQUFjLEVBQUcsUUFBTztBQUN4QyxnQkFBSSxHQUFHLFNBQVMsV0FBVyxFQUFHLFFBQU87QUFDckMsbUJBQU87QUFBQSxVQUNUO0FBQ0EsY0FBSSxHQUFHLFNBQVMsMkJBQTJCLEtBQUssR0FBRyxTQUFTLGlCQUFpQixHQUFHO0FBQzlFLG1CQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLG1CQUFtQjtBQUFBLE1BQ2pCLEtBQUssRUFBRSxTQUFTLEdBQUc7QUFBQSxNQUNuQixNQUFNLEVBQUUsU0FBUyxHQUFHO0FBQUEsTUFDcEIsS0FBSyxFQUFFLFNBQVMsR0FBRztBQUFBLE1BQ25CLE1BQU0sRUFBRSxTQUFTLEdBQUc7QUFBQSxNQUNwQixNQUFNLEVBQUUsU0FBUyxHQUFHO0FBQUEsTUFDcEIsS0FBSztBQUFBLFFBQ0gsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFLE1BQU07QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaLENBQUM7QUFBQSxJQUNELFNBQVMsaUJBQ1QsZ0JBQWdCO0FBQUEsRUFDbEIsRUFBRSxPQUFPLE9BQU87QUFBQSxFQUNoQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K

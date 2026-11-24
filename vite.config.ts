import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    build: {
      outDir: 'dist',
      chunkSizeWarningLimit: 800,
      rolldownOptions: {
        output: {
          codeSplitting: {
            groups: [
              {
                name: 'vendor-react',
                test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              },
              {
                name: 'vendor-ui',
                test: /node_modules[\\/](lucide-react|motion|motion-dom|motion-utils|framer-motion)[\\/]/,
              },
              {
                name: 'vendor-pdf',
                test: /node_modules[\\/](jspdf|html2canvas|canvg|dompurify|fflate|fast-png|iobuffer|pako)[\\/]/,
              },
              {
                name: 'data-catalog',
                test: /src[\\/]data[\\/]/,
              },
            ],
          },
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: true as const,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch:
        process.env.DISABLE_HMR === 'true'
          ? null
          : {
              ignored: ['**/.aistudio/**', '**/dist/**', '**/node_modules/**'],
            },
    },
  };
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@Types': '/src/types',
      '@Components': '/src/components',
      '@Layout': '/src/layout',
      '@Units': '/src/components/Units',
      '@Hooks': '/src/hooks',
      '@Pages': '/src/pages',
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
  },
  // build: {
  //   rollupOptions: {
  //     external: ['react-helmet'],
  //   },
  // },
})

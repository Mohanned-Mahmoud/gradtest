import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ghPages } from 'vite-plugin-gh-pages'

export default defineConfig({
  plugins: [
    react(),
    ghPages({
      branch: 'gh-pages',
      dotfiles: true
    })
  ],
  base: process.env.NODE_ENV === 'production' ? '/gradtest/' : '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true,
    port: 5173
  },
  preview: {
    port: 5173
  },
  build: {
    outDir: 'dist',
    assetsDir: './',
    emptyOutDir: true
  }
})
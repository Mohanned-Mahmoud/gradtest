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
  base: '/gradtest/',  // Must match your repository name exactly
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    assetsDir: './'
  }
})
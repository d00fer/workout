import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/workouts': {
        target: 'https://api-fu85.onrender.com/',
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
})

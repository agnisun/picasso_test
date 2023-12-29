import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, 'src/shared/'),
      '@entities': path.resolve(__dirname, 'src/entities/'),
      '@features': path.resolve(__dirname, 'src/features/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@app': path.resolve(__dirname, 'src/app/'),
    }
  }
})

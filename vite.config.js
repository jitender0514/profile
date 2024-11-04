import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://jitender0514.github.io/profile',
  build: {
    outDir: './build'
  }
})

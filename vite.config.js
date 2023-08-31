import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
})

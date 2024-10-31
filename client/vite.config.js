import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5010',
        changeOrigin: true, // Ensures the origin header is modified to the target URL
        secure: false,      // Disable SSL verification if the target is HTTPS
      },
    },
  },
  plugins: [react()],
});
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const defaultPort = 8080;
const allowedHosts = (process.env.VITE_ALLOWED_HOSTS || 'localhost').split(',').map(h => h.trim())

export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    port: process.env.VITE_PORT ? parseInt(process.env.VITE_PORT) : defaultPort,
    strictPort: true,
    allowedHosts: allowedHosts,
  },
  server: {
    port: process.env.VITE_PORT ? parseInt(process.env.VITE_PORT) : defaultPort,
    strictPort: true,
    host: true,
    origin: process.env.VITE_SERVER_ORIGIN || "http://localhost:8080",
    allowedHosts: allowedHosts,
  },
});
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const defaultPort = 8080;
const allowedHosts = process.env.VITE_ALLOWED_HOSTS ? JSON.parse(process.env.VITE_ALLOWED_HOSTS) : ['localhost'];

export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    port: defaultPort,
    strictPort: true,
    allowedHosts: allowedHosts,
  },
  server: {
    port: defaultPort,
    strictPort: true,
    host: true,
    origin: "http://localhost:8080",
    allowedHosts: allowedHosts,
  },
});
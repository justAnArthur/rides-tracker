import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pluginAPI from "vite-plugin-api"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pluginAPI({}),
  ],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pluginAPI from "vite-plugin-api"

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 8080,
	},
	plugins: [
		react(),
		pluginAPI({}),
	],
})

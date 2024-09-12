import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		/**alias for path **/
		alias: {
			'@': path.resolve(__dirname, './src'),
			components: path.resolve(__dirname, './src/components'),
			routes: path.resolve(__dirname, './src/routes'),
		},
	},
	server: {
		port: 3000,
	},
});

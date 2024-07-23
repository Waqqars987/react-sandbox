import fullReload from 'vite-plugin-full-reload';
import eslint from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		open: true,
		port: 3000,
		strictPort: true
	},
	preview: {
		open: true,
		port: 3000,
		strictPort: true
	},
	build: {
		assetsDir: '',
		outDir: 'build'
	},
	plugins: [fullReload('public/**/*'), eslint(), react()]
});

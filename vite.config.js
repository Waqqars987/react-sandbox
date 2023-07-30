import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
	server: { open: true, port: 3000, strictPort: true },
	plugins: [eslint(), react()]
});

import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'@comps': path.resolve('./src/lib/components'),
			'@lib': path.resolve('./src/lib'),
			'@services': path.resolve('./src/lib/services')
		}
	},
	preprocess: vitePreprocess()
};

export default config;

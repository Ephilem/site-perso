import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { join } from 'path';

const config = {
	preprocess: [
		vitePreprocess(), 
		mdsvex({
			extensions: ['.md', '.svx'],
			smartypants: true,
		})
	],
	kit: { 
		adapter: adapter(),
		alias: {
			$components: 'src/lib/components',
			$lib: 'src/lib',
			$contents: 'src/contents',
		},
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;

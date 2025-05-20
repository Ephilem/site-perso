import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import relativeImages from "mdsvex-relative-images";
import admonitions from 'remark-admonitions'

const config = {
	preprocess: [
		vitePreprocess(), 
		mdsvex({
			extensions: ['.md', '.svx'],
			smartypants: true,
			remarkPlugins: [relativeImages, admonitions],
		})
	],
	kit: { 
		adapter: adapter(),
		alias: {
			$components: 'src/lib/components',
			$lib: 'src/lib',
			$contents: 'src/contents',
			$src: 'src',
		},
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;

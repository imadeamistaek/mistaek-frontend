import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/**
 * mdsvex options
 * Tells mdsvex to process .md files instead of the default .svx format.
 * This lets us write content in standard Markdown.
 */
const mdsvexOptions = {
	extensions: ['.md']
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: { adapter: adapter() },
	/**
	 * Tell SvelteKit to treat both .svelte and .md files as components.
	 * Without .md here, SvelteKit won't know how to handle Markdown route files.
	 */
	extensions: ['.svelte', '.md']
};

export default config;
import type { Post } from '$lib/types'

/**
 * Loads all published blog posts server-side before the page renders.
 * Using +page.server.ts means this fetch never runs in the browser,
 * which is cleaner and faster.
 */
export async function load({ fetch }) {
	const response = await fetch('/api/posts')
	const posts: Post[] = await response.json()
	return { posts }
}
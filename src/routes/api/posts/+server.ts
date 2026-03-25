import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'

/**
 * Scans all markdown files in src/posts/blog/ and returns
 * them as a sorted, filtered list of published posts.
 */
async function getPosts(): Promise<Post[]> {
	let posts: Post[] = []

	/**
	 * import.meta.glob is a Vite feature that reads all files
	 * matching a pattern at build time. eager: true means it
	 * reads the contents immediately instead of lazily.
	 */
	const paths = import.meta.glob('/src/posts/blog/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>
			const post = { ...metadata, slug } satisfies Post
			if (post.published) posts.push(post)
		}
	}

	/**
	 * Sort posts by date, newest first.
	 */
	posts = posts.sort((a, b) =>
		new Date(b.date).getTime() - new Date(a.date).getTime()
	)

	return posts
}

/**
 * GET /api/posts
 * Returns all published blog posts as JSON, sorted by date.
 */
export async function GET() {
	const posts = await getPosts()
	return json(posts)
}
import { error } from '@sveltejs/kit'
import type { Post } from '$lib/types'

export async function load({ params, fetch }) {
	try {
		const post = await import(`../../../posts/blog/${params.slug}.md`)

		/**
		 * Fetch all cases to find related ones.
		 * Filter by matching categories, exclude the current case,
		 * and take up to 3. If not enough matches, pad with recent cases.
		 */
		const response = await fetch('/api/posts')
		const allArticles: Post[] = await response.json()

		const currentCategories: string[] = post.metadata?.categories ?? []

		const related = allArticles
			.filter((c) => c.slug !== params.slug)
			.sort((a, b) => {
				/** Count how many categories overlap with the current case */
				const aMatches = a.categories.filter((cat) =>
					currentCategories.includes(cat)
				).length
				const bMatches = b.categories.filter((cat) =>
					currentCategories.includes(cat)
				).length
				return bMatches - aMatches
			})
			.slice(0, 3)

		return {
			content: post.default,
			meta: post.metadata,
			posts: related
		}
	} catch {
		error(404, `Could not find ${params.slug}`)
	}
}
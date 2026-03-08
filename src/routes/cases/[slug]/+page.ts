import { error } from '@sveltejs/kit'

/**
 * Dynamically imports a single markdown post based on the slug in the URL.
 * If the file doesn't exist, throws a 404 so SvelteKit shows the error page.
 *
 * @param params.slug - The filename of the post without .md extension
 */
export async function load({ params }) {
	try {
		const post = await import(`../../../posts/cases/${params.slug}.md`)

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch {
		error(404, `Could not find ${params.slug}`)
	}
}
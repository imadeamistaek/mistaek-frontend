import type { Case } from '$lib/types'

/**
 * Homepage server loader.
 * Fetches the 4 most recent cases to display in the featured section.
 * Add blog posts here later when the blog section is ready.
 */
export async function load({ fetch }) {
	const response = await fetch('/api/cases')
	const cases: Case[] = await response.json()

	return {
		cases: cases.slice(0, 4)
	}
}
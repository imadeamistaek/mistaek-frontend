import type { Case } from '$lib/types'

/**
 * Loads all published cases server-side before the page renders.
 */
export async function load({ fetch }) {
	const response = await fetch('/api/cases')
	const cases: Case[] = await response.json()
	return { cases }
}
/**
 * Types for blog posts and case studies.
 * 
 * Both share the same shape for now, but having separate
 * types means you can extend them independently later.
 * For example, cases might eventually have a 'client' or
 * 'results' field that blog posts don't need.
 */

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: string[]
	team: string[]
	published: boolean
	cover?: string      // optional, not every post needs a cover
	coverAlt?: string   // optional, defaults to empty string
}

export type Case = {
	// Metadata
	title: string
	slug: string
	description: string
	date: string
	categories: string[]
	team: string[]
	published: boolean

	// Cover
	cover?: string      // optional, not every post needs a cover
	coverAlt?: string   // optional, defaults to empty string

	// Content sections
	context?: string
	challenge_section1?: string
	challenge_section2?: string
	challenge_section3?: string
	challenge_section4?: string
	approach?: string
	solution?: string
	results?: string
}
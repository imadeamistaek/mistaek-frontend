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
	published: boolean
}

export type Case = {
	title: string
	slug: string
	description: string
	date: string
	categories: string[]
	published: boolean
	cover?: string      // optional, not every post needs a cover
	coverAlt?: string   // optional, defaults to empty string
}
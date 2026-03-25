import { json } from '@sveltejs/kit'
import type { Case } from '$lib/types'

/**
 * Scans all markdown files in src/posts/blog/ and returns
 * them as a sorted, filtered list of published posts.
 */
async function getCases(): Promise<Case[]> {
    let cases: Case[] = []

    /**
     * import.meta.glob is a Vite feature that reads all files
     * matching a pattern at build time. eager: true means it
     * reads the contents immediately instead of lazily.
     */
    const paths = import.meta.glob('/src/posts/cases/*.md', { eager: true })

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.md', '')

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Case, 'slug'>
            const post = { ...metadata, slug } satisfies Case
            if (post.published) cases.push(post)
        }
    }

    /**
     * Sort cases by date, newest first.
     */
    cases = cases.sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    return cases
}

/**
 * GET /api/posts
 * Returns all published blog posts as JSON, sorted by date.
 */
export async function GET() {
    const posts = await getCases()
    return json(posts)
}
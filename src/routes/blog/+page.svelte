<script lang="ts">
	/**
	 * Blog listing page.
	 * Receives posts from +page.server.ts and renders them as a list.
	 */
	import { formatDate } from '$lib/utils'

	let { data } = $props()
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Articles and thoughts." />
</svelte:head>

<section>
	<h1>Blog</h1>

	<ul>
		{#each data.posts as post}
			<li>
				<a href={`/blog/${post.slug}`}>
					<h2>{post.title}</h2>
					<p>{formatDate(post.date)}</p>
					<p>{post.description}</p>
				</a>
			</li>
		{:else}
			<p>No posts published yet.</p>
		{/each}
	</ul>
</section>
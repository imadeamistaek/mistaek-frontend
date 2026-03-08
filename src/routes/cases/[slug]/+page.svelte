<script lang="ts">
	/**
	 * Renders a single blog post.
	 * data.content is the compiled Markdown as a Svelte component.
	 * data.meta is the frontmatter from the top of the .md file.
	 */
	import { formatDate } from '$lib/utils'

	let { data } = $props()
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<a href="/blog">← Back to Blog</a>
<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>{formatDate(data.meta.date)}</p>
	</hgroup>

	<p>{data.meta.description}</p>

	<!--
		data.content is a compiled Svelte component from the markdown file.
		We render it as a component, not as raw HTML.
	-->
	<div class="prose">
		<data.content />
	</div>
</article>
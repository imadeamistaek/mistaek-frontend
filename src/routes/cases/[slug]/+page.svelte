<script lang="ts">
	/**
	 * Renders a single blog post.
	 * data.content is the compiled Markdown as a Svelte component.
	 * data.meta is the frontmatter from the top of the .md file.
	 */
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/sections/homepage/footer.svelte';
	import Grid from "$lib/components/grid.svelte";
	import Box from "$lib/elements/box.svelte";
	import List from '$lib/components/list.svelte';
	import Tag from "$lib/elements/tag.svelte";

	import { formatDate } from '$lib/utils'

	let { data } = $props()
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<Navbar full />

<section class="container">
		
		<article class="col-6 col-start-1">
			<Grid customClass="-cols-6 -gap-vxl">
				
				<h1 class="col-6 col-start-1 post-heading">{data.meta.title}</h1>
				<p class="col-6 col-start-1 md:col-5 lg:col-4 h5">{data.meta.description}</p>

				<List customClass="col-6 col-start-1 -gap-none post-frontmatter">
					<Box as="li" customClass="-self-stretch -align-vcenter -padding-xs -horizontal-always" boxed>
						<p class="body_text -medium -subtle">Posted on:</p>
						<p class="body_text -medium -subtle">{formatDate(data.meta.date)}</p>
					</Box>
					<Box as="li" customClass="-self-stretch -align-vcenter -padding-xs -horizontal-always" boxed>
						<p class="body_text -medium -subtle">Team:</p>
						<p class="body_text -medium -subtle">{data.meta.team.join(', ')}</p>
					</Box>
					<Box as="li" customClass="-self-stretch -align-vcenter -padding-xs -horizontal-always" boxed>
						<p class="body_text -medium -subtle">Categories:</p>
						{#each data.meta.categories as label}
							<Tag label={label} customClass="-nano" />
						{:else}
							<p class="body_text -medium -subtle">No categories</p>
						{/each}
					</Box>
				</List>

				<!--
					data.content is a compiled Svelte component from the markdown file.
					We render it as a component, not as raw HTML.
				-->
				<Grid customClass="-cols-6 -gap-vxl prose col-6 col-start-1">
					<data.content />
				</Grid>

			</Grid>
		</article>

</section>

<Footer />

<style>

/* Apply adjustments to the frontmatter list to make the items have a space between them */
:global(.list.post-frontmatter li p:first-child) { flex: 1; }

/* Styles for the Sections inside the cases */
:global(section.text_block) {
	display: grid;
	padding: var(--space-100) 0;
}

/* Styles for the content within the cases */

/* MOBILE */
:global(h1.post-heading) { padding: var(--space-300) 0 0; }
:global(.prose h2, .prose h3, .prose h4, .prose h5, .prose h6) {
	font-size: var(--typeface-size-heading-xs);
	line-height: var(--typeface-line-height-body);
	letter-spacing: var(--typeface-tracking-heading);
	margin-bottom: var(--space-300);
}
:global(.prose p) {
	font-size: var(--typeface-size-body-large); /* Start smaller on mobile */
	line-height: var(--typeface-line-height-base);
	letter-spacing: var(--typeface-tracking-base);
}
:global(.prose * + p) {
	margin-bottom: var(--space-200);
}

/* Large: 1024px+ (Desktop) */
@media (min-width: 64rem) {
	:global(h1.post-heading) { padding: var(--space-500) 0 0; }
	:global(section.text_block) { padding: var(--space-600) 0; }
	:global(.prose h2, .prose h3, .prose h4, .prose h5, .prose h6) { font-size: var(--typeface-size-heading-xs); }
	:global(.prose p) { font-size: var(--typeface-size-heading-2xs); }
}
/* Extra Large: 1280px+ (Large Desktop) */
@media (min-width: 80rem) {
	:global(h1.post-heading) { padding: var(--space-700) 0 0; }
	:global(section.text_block) { padding: var(--space-800) 0; }
	:global(.prose h2, .prose h3, .prose h4, .prose h5, .prose h6) { font-size: var(--typeface-size-heading-s); }
	:global(.prose p) { font-size: var(--typeface-size-heading-xs); }
}
/* 2XL: 1536px+ (Ultra Wide) */
@media (min-width: 96rem) {
	:global(h1.post-heading) { padding: var(--space-900) 0 0; }
	:global(section.text_block) { padding: var(--space-1000) 0; }
	:global(.prose h2, .prose h3, .prose h4, .prose h5, .prose h6) { font-size: var(--typeface-size-heading-m); }
	:global(.prose p) { font-size: var(--typeface-size-heading-xs); }
}
/* 3XL: 1920px+ (Ultra Wide) */
@media (min-width: 120rem) {
	:global(h1.post-heading) { padding: var(--space-max) 0 0; }
	:global(section.text_block) { padding: var(--space-max) 0; }
	:global(.prose h2, .prose h3, .prose h4, .prose h5, .prose h6) { font-size: var(--typeface-size-heading-l); }
	:global(.prose p) { font-size: var(--typeface-size-heading-xs); }
}
</style>
<script lang="ts">
	/**
	 * Renders a single blog post.
	 * data.content is the compiled Markdown as a Svelte component.
	 * data.meta is the frontmatter from the top of the .md file.
	 */
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/sections/homepage/footer.svelte';
	import Grid from "$lib/components/grid.svelte";

	import { formatDate } from '$lib/utils'

	let { data } = $props()
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<Navbar full />

<section class="container">
	<Grid customClass="-cols-6 -gap-vxl">
	
		<a href="/cases" class="col-6 col-start-1 md:col-4 md:col-start-2 -gap-hxxs backlink">
			<i class="icon -small">
				<img src={`/icons/mi-arrow-right.webp`} alt="Back to Cases" />
			</i>
			Back to Cases
		</a>
		
		<article class="col-6 col-start-1 md:col-4 md:col-start-2">
			<Grid customClass="-cols-4 -gap-vxl">
				
				<h1 class="col-6 col-start-1 post-heading">{data.meta.title}</h1>
				<p class="col-4 col-start-1 md:col-1 md:col-start-1">Posted on {formatDate(data.meta.date)}</p>

				<!--
					data.content is a compiled Svelte component from the markdown file.
					We render it as a component, not as raw HTML.
				-->
				<div class="col-4 col-start-1 md:col-5 md:col-start-2 prose">
					<p>{data.meta.description}</p>
					<data.content />
				</div>

			</Grid>
		</article>

	</Grid>
</section>

<Footer />

<style>
	.backlink i {
		transform: rotate(180deg);
	}

	:global(h1.post-heading) {
		padding: var(--space-1000) 0;
	}
	:global(.prose h2, .prose h3, .prose h4, .prose h5, .prose h6) {
		font-size: var(--typeface-size-body-large); /* Start smaller on mobile */
		line-height: var(--typeface-line-height-body);
		letter-spacing: var(--typeface-tracking-heading);
	}
	/* Large: 1024px+ (Desktop) */
	@media (min-width: 64rem) {
		:global(.prose h2, .prose h3, .prose h4, .prose h5, .prose h6) {
			font-size: var(--typeface-size-heading-xxs);
		}
	}
	/* Extra Large: 1280px+ (Large Desktop) */
	@media (min-width: 80rem) {
		:global(.prose h2, .prose h3, .prose h4, .prose h5, .prose h6) {
			font-size: var(--typeface-size-heading-xs);
		}
	}
	/* 2XL: 1536px+ (Ultra Wide) */
	@media (min-width: 96rem) {
		:global(.prose h2, .prose h3, .prose h4, .prose h5, .prose h6) {
			font-size: var(--typeface-size-heading-s);
		}
	}
	/* 3XL: 1920px+ (Ultra Wide) */
	@media (min-width: 120rem) {
		:global(.prose h2, .prose h3, .prose h4, .prose h5, .prose h6) {
			font-size: var(--typeface-size-heading-m);
		}
	}
</style>
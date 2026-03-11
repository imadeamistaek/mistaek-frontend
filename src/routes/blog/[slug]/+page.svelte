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
	<Grid customClass="-cols-6 -gap-vxl">
	
		<span class="spacer -small"></span>
		
		<article class="col-6 col-start-1">
			<Grid customClass="-cols-6 -gap-vxl">
				
				<h1 class="col-6 col-start-1 post-heading">{data.meta.title}</h1>
				
				<Box as="div" customClass="-align-vcenter -items-vbetween -padding-xxs col-6 col-start-1 md:col-2 md:col-start-1 -horizontal" boxed>
					<p class="body_text -medium -subtle">Posted on:</p>
					<p class="body_text -medium -subtle">{formatDate(data.meta.date)}</p>
				</Box>
				<Box as="div" customClass="-align-vcenter -items-vbetween -padding-xxs col-6 col-start-1 md:col-2 md:col-start-3 -horizontal" boxed>
					<p class="body_text -medium -subtle">Team:</p>
					<p class="body_text -medium -subtle">{data.meta.team.join(', ')}</p>
				</Box>
				<Box as="div" customClass="-align-vcenter -items-vbetween -padding-xxs col-6 col-start-1 md:col-2 md:col-start-5 -horizontal" boxed>
					<p class="body_text -medium -subtle">Categories:</p>
					<List customClass="col-6 col-start-1 -gap-none -horizontal -contained">
						{#each data.meta.categories as label}
							<Tag label={label} customClass="-nano" />
						{:else}
							<p class="body_text -medium -subtle">No categories</p>
						{/each}
					</List>
				</Box>

				<!--
					data.content is a compiled Svelte component from the markdown file.
					We render it as a component, not as raw HTML.
				-->
				<main class="col-4 col-start-1 lg:col-3 lg:col-start-3 prose">
					<p>{data.meta.description}</p>
					<p>{data.meta.context}</p>
					<!-- <data.content /> -->
				</main>

			</Grid>
		</article>

	</Grid>
</section>

<Footer />

<style>

	:global(h1.post-heading) { padding: var(--space-300) 0; }
	:global(.prose h2, .prose h3, .prose h4, .prose h5, .prose h6) {
		font-size: var(--typeface-size-body-large); /* Start smaller on mobile */
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
	:global(.image-wrapper) {
		margin-bottom: var(--space-400);
	}
	/* Large: 1024px+ (Desktop) */
	@media (min-width: 64rem) {
		:global(h1.post-heading) { padding: var(--space-500) 0; }
		:global(.prose h2, .prose h3, .prose h4, .prose h5, .prose h6) {
			font-size: var(--typeface-size-heading-xxs);
		}
	}
	/* Extra Large: 1280px+ (Large Desktop) */
	@media (min-width: 80rem) {
		:global(h1.post-heading) { padding: var(--space-700) 0; }
		:global(.prose h2, .prose h3, .prose h4, .prose h5, .prose h6) {
			font-size: var(--typeface-size-heading-xs);
		}
	}
	/* 2XL: 1536px+ (Ultra Wide) */
	@media (min-width: 96rem) {
		:global(h1.post-heading) { padding: var(--space-900) 0; }
		:global(.prose h2, .prose h3, .prose h4, .prose h5, .prose h6) {
			font-size: var(--typeface-size-heading-s);
		}
	}
	/* 3XL: 1920px+ (Ultra Wide) */
	@media (min-width: 120rem) {
		:global(h1.post-heading) { padding: var(--space-max) 0; }
		:global(.prose h2, .prose h3, .prose h4, .prose h5, .prose h6) {
			font-size: var(--typeface-size-heading-m);
		}
	}
</style>
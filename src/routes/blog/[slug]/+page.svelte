<script lang="ts">
	/**
	 * Renders a single blog post.
	 * data.content is the compiled Markdown as a Svelte component.
	 * data.meta is the frontmatter from the top of the .md file.
	 */
	import Navbar from '$lib/components/navbar.svelte';
	import FeaturedItemsGrid from '$lib/sections/general/featuredItemsGrid.svelte';
	import Cta from '$lib/sections/general/cta.svelte';
	import Footer from '$lib/sections/homepage/footer.svelte';
	import Grid from "$lib/components/grid.svelte";
	import Box from "$lib/elements/box.svelte";
	import List from '$lib/components/list.svelte';
	import Tag from "$lib/elements/tag.svelte";
	import Image from '$lib/elements/image.svelte'

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
			
			<div class="pairing col-6 col-start-1 -spaced">
				<h1 class="post-heading">{data.meta.title}</h1>
				<p class="md:col-5 lg:col-4 h5">{data.meta.description}</p>
			</div>
			
			
			<Grid customClass="-cols-6 -gap-vxl">
				<!--
					data.content is a compiled Svelte component from the markdown file.
					We render it as a component, not as raw HTML.
				-->
					<List customClass="col-6 col-start-1 lg:col-2 -gap-none -self-start post-frontmatter" vertical>
						<Box as="li" customClass="-padding-xs -horizontal-always" boxed>
							<p class="body_text -medium -subtle">Posted on:</p>
							<p class="body_text -medium -subtle">{formatDate(data.meta.date)}</p>
						</Box>
						<Box as="li" customClass="-padding-xs -horizontal-always" boxed>
							<p class="body_text -medium -subtle">Team:</p>
							<p class="body_text -medium -subtle">{data.meta.team.join(', ')}</p>
						</Box>
						<Box as="li" customClass="-padding-xs -horizontal-always" boxed>
							<p class="body_text -medium -subtle">Categories:</p>
							{#each data.meta.categories as label}
								<Tag label={label} customClass="-nano" />
							{:else}
								<p class="body_text -medium -subtle">No categories</p>
							{/each}
						</Box>
					</List>

					<Image src={data.meta.cover} alt={data.meta.coverAlt} customClass="-aspect-16-9 col-6 col-start-1 lg:col-4 lg:col-start-3 cover_image" cover />
					<div class="prose text_block col-6 col-start-1 lg:col-4 lg:col-start-3">
						<data.content />
					</div>

			</Grid>
		</article>

</section>

<FeaturedItemsGrid
	items={data.posts}
	basePath="blog"
	tag="More articles"
	title="Related articles"
	colSpan="col-6 md:col-2"
/>
<Cta />
<Footer />

<style>
	section { padding-top: var(--space-max); }
	article { display: flex; flex-direction: column; gap: var(--space-400); }

	/* Large: 1024px+ (Desktop) */
	@media (min-width: 64rem) {
		article { gap: var(--space-max); }
	}
	/* Extra Large: 1280px+ (Large Desktop) */
	@media (min-width: 80rem) {
		article { gap: var(--space-max); }
	}
	/* 2XL: 1536px+ (Ultra Wide) */
	@media (min-width: 96rem) {
		article { gap: var(--space-max); }
	}
	/* 3XL: 1920px+ (Ultra Wide) */
	@media (min-width: 120rem) {
		article { gap: var(--space-max); }
	}
</style>
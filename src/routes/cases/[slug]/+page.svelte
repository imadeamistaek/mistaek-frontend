<script lang="ts">
	import { page } from '$app/stores'
	/**
	 * Renders a single blog post.
	 * data.content is the compiled Markdown as a Svelte component.
	 * data.meta is the frontmatter from the top of the .md file.
	 */
	import FeaturedItemsGrid from '$lib/sections/general/featuredItemsGrid.svelte';
	import Cta from '$lib/sections/general/cta.svelte';
	import Grid from "$lib/components/grid.svelte";
	import Box from "$lib/elements/box.svelte";
	import List from '$lib/components/list.svelte';
	import Tag from "$lib/elements/tag.svelte";

	import { formatDate } from '$lib/utils'

	let { data } = $props()
</script>

<svelte:head>
	<title>{data.meta.title} | Mistaek</title>
	<meta name="description" content={data.meta.description} />
	<meta property="og:title" content={data.meta.title}>
	<meta property="og:description" content={data.meta.description}>
	<meta property="og:image" content="{data.meta.cover}">
	<meta property="og:type" content="article" />
  	<meta property="og:url" content={$page.url.href} />
</svelte:head>

<section class="container">
		
		<article class="col-6 col-start-1">
			<Grid customClass="-cols-6 -gap-vxl">
				
				<h1 class="col-6 col-start-1 post-heading">{data.meta.title}</h1>
				<p class="col-6 col-start-1 md:col-5 lg:col-4 h5">{data.meta.description}</p>

				<List customClass="col-6 col-start-1 -gap-none post-frontmatter">
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

<FeaturedItemsGrid
	items={data.cases}
	basePath="cases"
	tag="More cases"
	title="Related cases"
	colSpan="col-6 md:col-2"
/>
<Cta />
<script lang="ts">
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
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

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

<FeaturedItemsGrid
	items={data.cases}
	basePath="cases"
	tag="More work"
	title="Related cases"
	colSpan="col-6 md:col-2"
/>
<Cta />
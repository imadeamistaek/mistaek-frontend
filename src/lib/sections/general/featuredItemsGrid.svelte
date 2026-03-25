<script lang="ts">
	/**
	 * ContentGrid Section
	 * Reusable grid of PostCards for cases or blog posts.
	 * Used on the homepage, case detail pages, and blog detail pages.
	 *
	 * @prop items - Array of Case or Post objects to display
	 * @prop basePath - 'cases' or 'blog', passed to PostCard for correct URLs
	 * @prop tag - Small label above the heading e.g. 'Cases' or 'Blog'
	 * @prop title - Main heading e.g. 'Work' or 'Latest Articles'
	 * @prop linkLabel - Text for the view all link e.g. 'View all cases'
	 * @prop linkUrl - URL for the view all link e.g. '/cases'
	 * @prop colSpan - Column span for each card. Defaults to 'md:col-3' (2 per row)
	 * @prop customClass - Optional helper classes
	 */
	import type { Case, Post } from '$lib/types';
	import Tag from '$lib/elements/tag.svelte';
	import Grid from '$lib/components/grid.svelte';
	import List from '$lib/components/list.svelte';
	import Box from '$lib/elements/box.svelte';
	import PostCard from '$lib/components/postCard.svelte';
	import NewLink from '$lib/elements/newlink.svelte';

	export let items: Case[] | Post[] = [];
	export let basePath: 'cases' | 'blog' = 'cases';
	export let tag: string | null | undefined = null;
	export let title: string;
	export let linkLabel: string | null | undefined = null;
	export let linkUrl: string | null | undefined = null;
	export let colSpan: string = 'col-6 md:col-3';
	export let customClass: string | null | undefined = null;
</script>

<section class={`container ${customClass || ''}`} aria-labelledby="featured_items_grid_title">
	<Grid customClass="-cols-6 -gap-vxl">

		<Grid customClass="col-6 col-start-1 -gap-vm">
			{#if tag}
				<Tag label={tag} customClass="-nano" />
			{/if}
			<p id="featured_items_grid_title" class="h4 col-6 col-start-1 md:col-5 md:col-start-1">
				{title}
			</p>
			{#if linkLabel && linkUrl}
				<NewLink
					variant="default"
					label={linkLabel}
					url={linkUrl}
					type="internal"
					customClass="col-6 col-start-1 md:col-1 md:col-start-6 -items-vstart"
				/>
			{/if}
		</Grid>

		<List grid customClass="col-6 col-start-1 -gap-none">
			{#each items as item}
				<Box as="li" customClass={`${colSpan} -align-top -padding-s`} boxed>
					<PostCard
						title={item.title}
						date={basePath === 'blog' ? item.date : null}
						slug={item.slug}
						cover={item.cover}
						coverAlt={item.coverAlt ?? ''}
						{basePath}
					/>
				</Box>
			{:else}
				<li class="col-6">
					<p>No content published yet.</p>
				</li>
			{/each}
		</List>

	</Grid>
</section>
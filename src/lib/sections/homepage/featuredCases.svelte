<script lang="ts">
	/**
	 * FeaturedCases Section
	 * Displays a grid of up to 4 recent cases on the homepage.
	 * Links to the full cases page for more.
	 *
	 * @prop cases - Array of Case objects passed from +page.server.ts
	 * @prop customClass - Optional helper classes
	 */
	import type { Case } from '$lib/types';
    import Tag from "$lib/elements/tag.svelte";
	import Grid from '$lib/components/grid.svelte';
	import List from '$lib/components/list.svelte';
	import Box from '$lib/elements/box.svelte';
	import PostCard from '$lib/components/postCard.svelte';
	import Link from '$lib/elements/link.svelte';

	export let cases: Case[] = [];
	export let customClass: string | null | undefined = null;
</script>

<section class={`container ${customClass || ''}`} aria-labelledby="cases_title">
	<Grid customClass="-cols-6 -gap-vxl">

        <Grid customClass="col-6 col-start-1 -gap-vm">
			<Tag label="Cases" customClass="-nano" />
            <p id="cases_title" class="h4 col-6 col-start-1 md:col-5 md:col-start-1">Work</p>
            <Link customClass="col-6 col-start-1 md:col-1 md:col-start-6 -items-vstart -small" label="View all cases" url="/cases" type="internal" />
		</Grid>

		<List grid customClass="col-6 col-start-1 -gap-none">
			{#each cases as item}
				<Box as="li" customClass="col-6 md:col-3 -align-top -padding-s" boxed>
					<PostCard
						title={item.title}
						slug={item.slug}
						cover={item.cover}
						coverAlt={item.coverAlt ?? ''}
						basePath="cases"
					/>
				</Box>
			{:else}
				<li class="col-6">
					<p>No cases published yet.</p>
				</li>
			{/each}
		</List>

	</Grid>
</section>
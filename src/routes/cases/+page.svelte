<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/sections/homepage/footer.svelte';
	import Grid from "$lib/components/grid.svelte";
	import List from '$lib/components/list.svelte';
	import Box from '$lib/elements/box.svelte';
	import PostCard from '$lib/components/postCard.svelte';

	let { data } = $props()
</script>

<svelte:head>
	<title>Cases</title>
	<meta name="description" content="Cases" />
</svelte:head>

<Navbar full />

<section class="container">
	<Grid customClass="-cols-6 -gap-vxl">

		<Grid customClass="col-6 col-start-1 -padding-vxl -gap-vxxs">
			<h1 class="col-6 col-start-1 md:col-3 md:col-start-1">Work</h1>
			<p class="h6 col-6 col-start-1 md:col-3 md:col-start-1">Design systems for companies translating complex science into trusted products.</p>
		</Grid>

		<List grid customClass="col-6 col-start-1 -gap-none">
		{#each data.cases as item}
			<Box as="li" customClass="col-6 md:col-3 -align-top -padding-s" boxed>
				<PostCard
					title={item.title}
					slug={item.slug}
					cover={item.cover}
					coverAlt={item.coverAlt}
					basePath="cases"
				/>
			</Box>
		{:else}
			<p>No cases published yet.</p>
		{/each}
		</List>

	</Grid>
</section>

<Footer />
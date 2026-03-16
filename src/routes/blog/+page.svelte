<!-- <script lang="ts">
	/**
	 * Blog listing page.
	 * Receives posts from +page.server.ts and renders them as a list.
	 */
	import { formatDate } from '$lib/utils'

	let { data } = $props()
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Articles and thoughts." />
</svelte:head>

<section>
	<h1>Blog</h1>

	<ul>
		{#each data.posts as post}
			<li>
				<a href={`/blog/${post.slug}`}>
					<h2>{post.title}</h2>
					<p>{formatDate(post.date)}</p>
					<p>{post.description}</p>
				</a>
			</li>
		{:else}
			<p>No posts published yet.</p>
		{/each}
	</ul>
</section> -->

<script lang="ts">
	import Grid from "$lib/components/grid.svelte";
	import List from '$lib/components/list.svelte';
	import Box from '$lib/elements/box.svelte';
	import PostCard from '$lib/components/postCard.svelte';

	let { data } = $props()
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Articles and thoughts." />
</svelte:head>

<section class="container">
	<Grid customClass="-cols-6 -gap-vxl">

		<Grid customClass="col-6 col-start-1 -padding-vxl -gap-vxxs">
			<h1 class="col-6 col-start-1 md:col-3 md:col-start-1">Articles</h1>
			<p class="h6 col-6 col-start-1 md:col-3 md:col-start-1">Design systems for companies translating complex science into trusted products.</p>
		</Grid>

		<List grid customClass="col-6 col-start-1 -gap-none">
		{#each data.posts as post}
			<Box as="li" customClass="col-6 md:col-2 -align-top -padding-xxs" boxed>
				<PostCard
					title={post.title}
					slug={post.slug}
					cover={post.cover}
					coverAlt={post.coverAlt}
					date={post.date}
					basePath="blog"
				/>
			</Box>
		{:else}
			<p>No posts published yet.</p>
		{/each}
		</List>

	</Grid>
</section>
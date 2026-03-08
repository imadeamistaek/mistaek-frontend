<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/sections/homepage/footer.svelte';
	
	/**
	 * Blog listing page.
	 * Receives posts from +page.server.ts and renders them as a list.
	 */
	import { formatDate } from '$lib/utils'

	let { data } = $props()
</script>

<svelte:head>
	<title>Cases</title>
	<meta name="description" content="Cases." />
</svelte:head>

<Navbar full />

<section class="container">
	<h1>Cases</h1>

	<ul>
		{#each data.cases as item}
		<li>
			<a href={`/cases/${item.slug}`}>
				<h2>{item.title}</h2>
				<p>{formatDate(item.date)}</p>
				<p>{item.description}</p>
			</a>
		</li>
	{:else}
		<p>No cases published yet.</p>
	{/each}
	</ul>
</section>

<Footer />
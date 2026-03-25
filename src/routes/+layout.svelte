<script>
	import '$lib/styles/main.css';
	import { fade } from 'svelte/transition';
	import { afterNavigate } from '$app/navigation';
	import FrostedCircles from '$lib/elements/glass/frostedCircles.svelte';
	import Grain from '$lib/elements/grain.svelte';
	import Grid from "$lib/elements/backgroundGrid.svelte";
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/sections/homepage/footer.svelte';

	let { children, data } = $props();

	afterNavigate(() => {
		window.scrollTo({ top: 0, behavior: 'instant' });
	});
</script>

<Grid />
<Grain fixed />
<FrostedCircles customClass="-colours" />
<Navbar full />

{#key data.url}
	<div
		in:fade={{ duration: 150, delay: 150 }}
		out:fade={{ duration: 150 }}
	>
		{@render children()}
	</div>
{/key}

<Footer />
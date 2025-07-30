<script>
	import '$lib/styles/main.css';
	import Grid from "$lib/components/grid.svelte";
	import Navbar from "$lib/components/navbar.svelte";
	import SectionHeading from '$lib/components/sectionHeading.svelte';
	let { children } = $props();
</script>

<Grid />
<Navbar />
{@render children()}
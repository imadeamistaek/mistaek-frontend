<script>
	import '$lib/styles/main.css';
	import Grid from "$lib/components/backgroundGrid.svelte";
	import Navbar from "$lib/components/navbar.svelte";
	let { children } = $props();
</script>

<Grid />
<Navbar full />
{@render children()}
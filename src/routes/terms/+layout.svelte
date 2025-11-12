<script>
	import '$lib/styles/main.css';
	import Grid from "$lib/elements/backgroundGrid.svelte";
	let { children } = $props();
</script>

<Grid />
{@render children()}
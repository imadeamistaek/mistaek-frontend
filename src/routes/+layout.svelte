<script>
	import '$lib/styles/main.css';
	import Grid from "$lib/components/grid.svelte";
	let { children } = $props();
</script>

<Grid />
{@render children()}
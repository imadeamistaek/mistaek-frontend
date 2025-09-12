<script>
	import '$lib/styles/main.css';
    import FrostedCircles from '$lib/elements/glass/frostedCircles.svelte';
	import Grid from "$lib/elements/backgroundGrid.svelte";
	let { children } = $props();
</script>

<FrostedCircles />
<Grid />
{@render children()}
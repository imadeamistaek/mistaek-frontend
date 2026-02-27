<script>
	import '$lib/styles/main.css';
	import FrostedCircles from '$lib/elements/glass/frostedCircles.svelte';
	import Grain from '$lib/elements/grain.svelte';
	import Grid from "$lib/elements/backgroundGrid.svelte";
	let { children } = $props();
</script>

<Grid />
<Grain fixed />
<FrostedCircles />
{@render children()}
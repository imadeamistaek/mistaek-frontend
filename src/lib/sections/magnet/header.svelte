<script>
	import Anchor from '$lib/components/anchor.svelte';
</script>

<section>
	<h1>Is your startup ready for a Design System?</h1>
	<p class="h6">This quick, no-fluff checklist helps you find out if it’s the right time to build a Design System — and where to start if it is.</p>
	<Anchor label="Start the Checklist" customClass="-anchor" icon="" anchor=""/>
</section>

<style>
	h1 {
		grid-column: 1 / span 4;
		grid-row: 1;
	}
	p {
		grid-column: 4 / span 3;
		grid-row: 2;
	}
	:global(.-anchor) {
		grid-column: 4 / span 3;
		grid-row: 3;
	}
</style>
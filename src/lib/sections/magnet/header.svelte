<script>
	import Anchor from '$lib/components/anchor.svelte';
</script>

<section>
	<h1>Is your startup ready for a Design System?</h1>
	<h2>Is your startup ready for a Design System?</h2>
	<h3>Is your startup ready for a Design System?</h3>
	<h4>Is your startup ready for a Design System?</h4>
	<h5>Is your startup ready for a Design System?</h5>
	<h6>Is your startup ready for a Design System?</h6>
	<p class="h6">This quick, no-fluff checklist helps you find out if it’s the right time to build a Design System — and where to start if it is.</p>
	<Anchor label="Start the Checklist" customClass="-anchor" icon="" anchor=""/>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-row-gap: 64px;
		padding-top: 160px;
	}

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
<script>
	import Grid from "$lib/components/grid.svelte";
	import Benefits from '$lib/components/benefits.svelte';
</script>

<!-- <FixedBar customClass="-tright">
    <LinkBoxed label="Get started" url="https://cal.com/mistaek/intro" type="external" note="Schedule an intro call" />
</FixedBar> -->

<section class="container" aria-labelledby="hero_title">
	<Grid customClass="-cols-6 -gap-vm">
		<div class="heading pairing col-6 col-start-1">
			<h1 id="hero_title">Your technology is harder to explain than it is to build.</h1>
		</div>
		<div class="pairing col-6 col-start-1 lg:col-3 lg:col-start-1">
			<p class="body_text -medium -contained-l">We make it legible to the people who fund it, buy it, and use it, and we build the foundation underneath so it holds as you grow.</p>
			<p class="body_text -medium -contained-l -bold">Focused sprints. No retainers. Permanent ownership.</p>
		</div>
		<Benefits />
	</Grid>
</section>

<style>

	.heading { margin-top: var(--space-500);}
	/* Medium: 768px+ (Tablet Portrait) */
	@media (min-width: 48rem) {
		.heading { margin-top: var(--space-max);}
	}
</style>
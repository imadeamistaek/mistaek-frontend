<script>
	import { browser } from "$app/environment";
	import Grid from "$lib/components/grid.svelte";
	import Link from '$lib/elements/link.svelte';
    import Logo from '$lib/elements/logo.svelte';
  	import Logo3D from '$lib/elements/logo3D.svelte';
</script>

{#if browser}
	<Logo3D />
{/if}

<section class="container" aria-labelledby="hero_title">
	<Grid customClass="-cols-6 -gap-vm">
		<Logo small={true} />
		<div class="heading pairing col-6 col-start-1 lg:col-4 lg:col-start-1">
			<h1 id="hero_title">We're building something better.</h1>
		</div>
		<div class="pairing col-6 col-start-1 lg:col-3 lg:col-start-1 -spaced">
			<p class="body_text -large -contained-l">Right now, we're rebuilding Mistaek from the ground up, using the same principles of clarity, accessibility, and sustainability that we bring to every client project.</p>
			<p class="body_text -large -contained-l">Because if we're going to help you create design that works for everyone, our own site should lead by example.</p>
		</div>
		<div class="pairing col-3 col-start-1">
			<Link label="Book an intro call" url="https://cal.com/mistaek/15min" type="external" />
		</div>
	</Grid>
</section>

<style>
	/* section { padding-top: var(--space-800);} */

	.heading { margin-top: var(--space-500);}
	/* Medium: 768px+ (Tablet Portrait) */
	@media (min-width: 48rem) {
		.heading { margin-top: var(--space-max);}
	}
</style>
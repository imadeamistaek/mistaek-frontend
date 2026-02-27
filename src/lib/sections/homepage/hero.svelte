<script>
	import { browser } from "$app/environment";
	import Grid from "$lib/components/grid.svelte";
	import Link from '$lib/elements/link.svelte';
    import Logo from '$lib/elements/logo.svelte';
	import Benefits from '$lib/components/benefits.svelte';
</script>

<section class="container" aria-labelledby="hero_title">
	<Grid customClass="-cols-6 -gap-vm">
		<Logo small={true} />
		<div class="heading pairing col-6 col-start-1">
			<h1 id="hero_title">Design Systems for Nature Tech companies building complex products</h1>
		</div>
		<div class="pairing col-6 col-start-1 lg:col-3 lg:col-start-1">
			<p class="body_text -medium -contained-l">We help Series A companies build design infrastructure that makes scientific data clear, consistent, and scalable.</p>
			<p class="body_text -medium -contained-l -bold">4-6 week sprints. You own the system.</p>
		</div>
		<Benefits />
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
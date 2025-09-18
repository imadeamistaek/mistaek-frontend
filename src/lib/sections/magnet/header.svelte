<script>
    import Logo from '$lib/elements/logo.svelte';
	import Anchor from '$lib/elements/anchor.svelte';
	import Grid from '$lib/components/grid.svelte';
</script>

<section class="container" aria-labelledby="hero_title">
	<Grid customClass="-cols-6 -gap-vm">
		<Logo small={true} />
		<h1 id="hero_title" class="h2 col-6 col-start-1 md:col-5 md:col-start-1 lg:col-4 lg:col-start-1">Before you invest serious money in a design system you don't need...</h1>
		<p class="h6 col-6 col-start-1 md:col-5 md:col-start-1 lg:col-3 lg:col-start-1">Take this 5-minute reality check. Most companies aren't ready for design systems, but everyone's building them anyway. Find out if you're actually ready, or if you should focus on something else first.</p>
		<Anchor customClass="col-6 col-start-1 md:col-3 md:col-start-1 lg:col-2 lg:col-start-1" variant="default" size="large" label="Take the Reality Check" href="#checklist"/>
	</Grid>
</section>

<style>
	h1 { margin-top: var(--space-500);}
	@media (min-width: 48rem) { h1 { margin-top: var(--space-max);} }
</style>
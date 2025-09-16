<script>
    import Logo from '$lib/elements/logo.svelte';
	import Anchor from '$lib/elements/anchor.svelte';
</script>

<section aria-labelledby="hero_title">
	<Logo small={true} />
	<h1 id="hero_title" class="h2 col-5 col-start-1">Before you invest serious money in a design system you don't need...</h1>
	<p class="h6 col-3 col-start-1">Take this 5-minute reality check. Most companies aren't ready for design systems, but everyone's building them anyway. Find out if you're actually ready, or if you should focus on something else first.</p>
	<Anchor customClass="col-2 col-start-1" variant="default" size="large" label="Take the Reality Check" href="#checklist"/>
</section>

<style>
	section { padding-top: var(--space-800);}
	h1 { margin-top: var(--space-500);}
	@media (min-width: 992px) { h1 { margin-top: var(--space-max);} }
</style>
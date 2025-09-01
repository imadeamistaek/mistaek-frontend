<script>
	import Link from '$lib/components/link.svelte';
	import Footer from "$lib/components/footer.svelte";
</script>

<section id="websiteHeader">
	<h1 class="col-5 col-start-1">Removing barriers, making ideas matter.</h1>
	<div class="pairing col-3 col-start-4 -spaced">
		<p class="h6">We believe good design should never come at the expense of people or the planet.</p>
		<p class="h6">We help growing startups turn bold ideas into clear, accessible, and sustainable brands and products.</p>
		<p class="h6 -highlight">* Our new site is coming soon.</p>
	</div>
	<div class="pairing -horizontal -spaced col-3 col-start-4">
		<p class="body_text -large">In the meantime, let’s talk:</p>
		<Link url="https://cal.com/mistaek/15min" customClass="" label="Book an intro call" icon="arrow-out" />
	</div>
</section>
<Footer />

<style>
	:global(footer) {
		position: relative;
		border-top: var(--border-width) solid var(--color-on-surface-opacity-10);
	}
</style>
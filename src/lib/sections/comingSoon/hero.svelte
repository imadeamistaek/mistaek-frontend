<script>
	import Link from '$lib/components/link.svelte';
    import Logo from '$lib/components/logo.svelte';
	import { browser } from "$app/environment";
  	import Logo3D from '$lib/components/logo3D.svelte';
</script>

{#if browser}
	<Logo3D />
{/if}

<section id="websiteHeader">
	<Logo small />
	<div class="heading pairing col-5 col-start-1">
		<h1>We're building</h1>
		<h1 class="-with-asteriskw">something better</h1>
	</div>
	<div class="pairing col-3 col-start-1 -spaced">
		<p class="body_text -large -contained-xl">Right now, we're rebuilding Mistaek from the ground up, using the same principles of clarity, accessibility, and sustainability that we bring to every client project.</p>
		<p class="body_text -large -contained-xl">Because if we're going to help you create design that works for everyone, our own site should lead by example.</p>
	</div>
	<div class="pairing col-3 col-start-1">
		<Link url="https://cal.com/mistaek/15min" customClass="" label="Book an intro call" icon="arrow-out" />
	</div>
</section>

<style>
	section { padding-top: var(--space-800);}
	.heading { margin-top: var(--space-500);}
	@media (min-width: 992px) {
		.heading { margin-top: var(--space-max);}
	}

	h1.-with-asteriskw::before {
		content: '';
		background: url(/icons/mi-asteriskw.webp);
		display: inline-block;
		height: var(--space-300);
		width: var(--space-300);
		background-size: cover;
		margin-right: var(--space-100);
	}

	@media (min-width: 992px) {
		h1.-with-asteriskw::before {
			height: var(--space-900);
			width: var(--space-900);
			margin-right: var(--space-200);
		}
	}
</style>
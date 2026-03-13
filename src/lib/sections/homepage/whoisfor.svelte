<script>
    import Tag from "$lib/elements/tag.svelte";
	import Box from '$lib/elements/box.svelte';
	import Grid from "$lib/components/grid.svelte";
	import Link from '$lib/elements/link.svelte';
	import NewLink from '$lib/elements/newlink.svelte';
</script>

<section class="container" aria-labelledby="whoisfor_title">
	<Box as="div" customClass="col-6 col-start-1" boxed>
		<div class="glass-container">
			<div class="circle -brand"></div>
			<div class="circle -niche"></div>
		</div>
		<Grid customClass="col-6 col-start-1 -padding-l -gap-vxl">
			<Tag label="Who this is for" customClass="-nano col-4 col-start-1 md:col-4 md:col-start-2" />
			<div class="pairing col-6 col-start-1 md:col-4 md:col-start-2 -spaced">
				<h3 id="whoisfor_title">Built for Series A nature tech companies</h3>
				<span class="spacer -small"></span>
				<p class="body_text -small -contained-xl">Ocean tech. Biodiversity. Nature restoration. Environmental data platforms. You have a product in market, paying customers, and a growing team.</p>
				<p class="body_text -small -contained-xl -subtle">If that sounds like you:</p>
				<NewLink variant="ghost" label="Let's talk" url="https://cal.com/mistaek/15min" type="external" />
			</div>
		</Grid>
	</Box>
</section>

<style>
	:global(.grid) { z-index: var(--zindex-foreground); }
	.glass-container {
		position: absolute;
		float: left;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
	}
	
	.circle {
		position: absolute;
		border-radius: 50%;
	}

	.circle.-brand {
		bottom: 80%;
		left: 0;
		width: 1600px;
		height: 1600px;
		border: var(--border-width) solid var(--color-on-surface-accent);
		animation-name: slowTranslation;
		animation-direction: both;
		animation-duration: 30s;
		animation-timing-function: var(--transition-timing-function);
		animation-iteration-count: infinite;
	}
	.circle.-niche {
		bottom: 75%;
		left: 10%;
		width: 1000px;
		height: 1000px;
		border: var(--border-width) solid var(--color-on-surface-accent);
		animation-name: slowTranslation;
		animation-direction: reverse;
		animation-duration: 60s;
		animation-timing-function: var(--transition-timing-function);
		animation-iteration-count: infinite;
	}
	@keyframes slowTranslation {
		0%{
			transform: rotate(0deg) translate(-80px) rotate(0deg);
		}
		100%{
			transform: rotate(360deg) translate(-80px) rotate(-360deg);
		}
	}
	@media (min-width: 992px) {
		:global(.-inverted-mobile) { padding: var(--space-400) 0 !important; }

		.circle.-brand {
			top: 0%;
			left: -50%;
			width: 3200px;
			height: 3200px;
		}
		.circle.-niche {
			top: 0%;
			left: -40%;
			width: 2000px;
			height: 2000px;
		}
	}
</style>
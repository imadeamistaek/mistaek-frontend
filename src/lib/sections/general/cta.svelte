<script>
	import Box from '$lib/elements/box.svelte';
	import Grid from "$lib/components/grid.svelte";
	import NewLink from '$lib/elements/newlink.svelte';
	import Grain from '$lib/elements/grain.svelte';
</script>

<section class="container" aria-labelledby="pricing_title">
	<Grid customClass="-cols-6 -gap-vm">
		
		<Box as="div" customClass="col-6 col-start-1 -space-l" boxed>
			<Grain absolute/>
			<div class="glass-container">
				<div class="circle -brand -alt"></div>
				<div class="circle -niche"></div>
			</div>
			<Grid customClass="col-6 col-start-1 -padding-l -gap-vl">
				<div class="pairing col-6 col-start-1 lg:col-3 lg:col-start-1 -spaced">
					<p id="pricing_title" class="h2 col-6 col-start-1 lg:col-3 lg:col-start-1">Make your science matter</p>
					<p class="body_text -medium -contained-xl">Not sure if this is what you need? Let’s talk. We’ll tell you honestly whether a design system sprint makes sense for where you are.</p>
				</div>
				<div class="pairing col-6 col-start-1 lg:col-3 lg:col-start-1 -spaced">
					<div class="button_pairing">
						<div class="slot -left">
							<NewLink variant="default" label="Book a call with André" url="https://cal.com/mistaek/15min" type="external" />
						</div>
						<p class="body_text -micro -subtle -hidden-s">or</p>
						<div class="slot -right">
							<NewLink variant="default" label="Email us directly" url="mailto:hello@mistaek.com" type="external" icon="send" />
						</div>
					</div>
				</div>
			</Grid>
		</Box>
	
	</Grid>
</section>

<style>
	.button_pairing {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: flex-start;
		gap: var(--space-300);
	}
	@media (min-width: 992px) {
		:global(.-inverted-mobile) { padding: var(--space-400) 0 !important; }

		.button_pairing {
			justify-content: space-between;
			align-items: center;
			flex-direction: row;
			flex-wrap: nowrap;
		}
	}

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
		z-index: 0;
	}
	
	.circle {
		position: absolute;
		border-radius: 50%;
		filter: blur(64px);
	}

	.circle.-brand {
		animation-name: slowTranslation;
		animation-direction: both;
		animation-duration: 30s;
		animation-timing-function: var(--transition-timing-function);
		animation-iteration-count: infinite;
	}
	.circle.-niche {
		animation-name: slowTranslation;
		animation-direction: reverse;
		animation-duration: 60s;
		animation-timing-function: var(--transition-timing-function);
		animation-iteration-count: infinite;
	}	

	.circle.-brand {
		top: -50%;
		left: 50%;
		width: 1600px;
		height: 1600px;
		background: radial-gradient(var(--color-neutral-100) 60%, var(--color-brand-20) 30%, var(--color-brand-accent) 10%);
	}
	.circle.-niche {
		top: 20%;
		left: 45%;
		width: 1400px;
		height: 1400px;
		background: radial-gradient(var(--color-tag-completed) 24%, var(--color-tag-progress) 50%, var(--color-tag-on-progress) 75%);
	}

	@keyframes slowTranslation {
		0%{
			transform: rotate(0deg) translate(-80px) rotate(0deg);
		}
		100%{
			transform: rotate(360deg) translate(-80px) rotate(-360deg);
		}
	}
</style>
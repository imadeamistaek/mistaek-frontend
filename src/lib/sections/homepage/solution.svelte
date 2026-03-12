<script>
	import DistortedLogo from '$lib/elements/distortedLogo.svelte';
	import List from '$lib/components/list.svelte';
	import Box from '$lib/elements/box.svelte';
	import Crosshair from "$lib/elements/markers/crosshair.svelte";
	import Grid from "$lib/components/grid.svelte";
	import Tag from "$lib/elements/tag.svelte";
	import Grain from '$lib/elements/grain.svelte';
</script>

<section class="container" aria-labelledby="solution_title">
	<Grid customClass="-gap-vl">
		<Box as="div" customClass="col-6 col-start-1" boxed>
			<Crosshair customClass="-tl" />
			<Crosshair customClass="-br" />
			<Grid customClass="col-6 col-start-1 -padding-l -gap-vxl">
				<Grain absolute/>
				<div class="glass-container">
					<div class="circle -brand"></div>
					<div class="circle -niche"></div>
				</div>
				<Tag label="The solution" customClass="-nano col-1 col-start-1" />
				<h5 id="solution_title" class="h3 col-6 col-start-1 lg:col-4 lg:col-start-1">Complete infrastructure. Permanent ownership.</h5>
			</Grid>
			<List customClass="col-6 col-start-1 -padding-none -gap-none" vertical divided hoverable>
				<Box as="li" customClass="-horizontal -padding-hxl -padding-vs">
					<p class="body_text -large">(01)</p>
					<p class="body_text -large">Complete design system in Figma your team owns permanently</p>
				</Box>
				<Box as="li" customClass="-horizontal -padding-hxl -padding-vs">
					<p class="body_text -large">(02)</p>
					<p class="body_text -large">Design tokens, components, and data visualization patterns</p>
				</Box>
				<Box as="li" customClass="-horizontal -padding-hxl -padding-vs">
					<p class="body_text -large">(03)</p>
					<p class="body_text -large">Documentation and training for designers and developers</p>
				</Box>
				<Box as="li" customClass="-horizontal -padding-hxl -padding-vs">
					<p class="body_text -large">(04)</p>
					<p class="body_text -large">Governance framework so the system stays consistent as you grow</p>
				</Box>
			</List>
		</Box>
	</Grid>
</section>

<style>
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
		z-index: -1;
	}
	
	.circle {
		position: absolute;
		border-radius: 50%;
		filter: blur(64px);
	}

	.circle.-brand {
		bottom: 80%;
		left: 0;
		width: 1600px;
		height: 1600px;
		/* border: var(--border-width) solid var(--color-on-surface-accent); */
		background: radial-gradient(var(--color-neutral-100) 50%, var(--color-brand-20) 60%, var(--color-brand-accent) 70%);
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
		/* border: var(--border-width) solid var(--color-on-surface-accent); */
		background: radial-gradient(var(--color-tag-completed) 32%, var(--color-tag-progress) 60%, var(--color-tag-on-progress) 75%);
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
			bottom: 80%;
			left: -40%;
			width: 3200px;
			height: 3200px;
		}
		.circle.-niche {
			bottom: 75%;
			left: 10%;
			width: 2000px;
			height: 2000px;
		}
	}
</style>
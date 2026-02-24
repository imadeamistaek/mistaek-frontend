<script>
	import Grid from "$lib/components/grid.svelte";
	import Tag from "$lib/elements/tag.svelte";
	import List from '$lib/components/list.svelte';
	import Box from '$lib/elements/box.svelte';
	import Crosshair from "$lib/elements/markers/crosshair.svelte";
</script>

<section class="container" aria-labelledby="howwework_title">
	<Grid customClass="-cols-6 -gap-vm">
		<div class="glass-container">
			<div class="circle -brand -alt"></div>
			<div class="circle -niche"></div>
		</div>

		<Tag label="How we work" customClass="-nano" />
		<h5 id="howwework_title" class="h3 col-6 col-start-1 md:col-3 md:col-start-1">Three phases. Six weeks. One system.</h5>

		<List customClass="stages col-6 col-start-1">
			<Box as="li" customClass="-align-top -aspect-square -padding-s" boxed>
				<div class="index">
					<span class="dot"></span>
					<p class="body_text -large">Week 1-2</p>
					<Crosshair customClass="-tl" />
				</div>
				<p class="h6">Discovery & Strategic Foundation</p>
				<div class="box_body">
					<p class="body_text -medium -subtle">Product and design audit. User research. Define system principles specific to your scientific domain. Map component hierarchy and data visualisation strategy.</p>
				</div>
			</Box>
			<Box as="li" customClass="-align-top -aspect-square -padding-s" boxed>
				<div class="index">
					<span class="dot"></span>
					<p class="body_text -large">Week 3-4</p>
				</div>
				<p class="h6">Core System Build</p>
				<div class="box_body">
					<p class="body_text -medium -subtle">Foundational components. Domain-specific data visualisation patterns. Design tokens. Figma library architecture. Documentation structure.</p>
				</div>
			</Box>
			<Box as="li" customClass="-align-top -aspect-square -padding-s" boxed>
				<div class="index">
					<span class="dot"></span>
					<p class="body_text -large">Week 5-6</p>
				</div>
				<p class="h6">Implementation & Handoff</p>
				<div class="box_body">
					<p class="body_text -medium -subtle">Work with your team to implement first components. Train designers and developers. Establish governance framework. Complete handoff and ownership transfer.</p>
				</div>
			</Box>
		</List>
	</Grid>
</section>

<style>
	.index {
		display: flex; 
		flex-direction: row;
		align-items: center;
		gap: var(--space-100);
		margin-bottom: var(--space-200);
	}

	.box_body {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: flex-end;
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
		z-index: -1;
	}
	
	.circle {
		position: absolute;
		border-radius: 50%;
		filter: blur(64px);
	}

	.circle.-brand {
		bottom: 40%;
		left: 50%;
		width: 80%;
		height: 50%;
		transform: translate(-50%,50%);
		background: radial-gradient(var(--color-neutral-100) 50%, var(--color-brand-20) 60%, var(--color-brand-accent) 70%);
	}

</style>
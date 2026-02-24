<script>
	import Grid from "$lib/components/grid.svelte";
	import Tag from "$lib/elements/tag.svelte";
	import List from '$lib/components/list.svelte';
	import Box from '$lib/elements/box.svelte';
	import Crosshair from "$lib/elements/markers/crosshair.svelte";
</script>

<section class="container" aria-labelledby="howwework_title">
	<Grid customClass="-cols-6 -gap-vm">
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
</style>
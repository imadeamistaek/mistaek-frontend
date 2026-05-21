<script>
	import Grid from "$lib/components/grid.svelte";
	import Tag from "$lib/elements/tag.svelte";
	import List from '$lib/components/list.svelte';
	import Box from '$lib/elements/box.svelte';
	import Crosshair from "$lib/elements/markers/crosshair.svelte";
</script>

<section class="container" aria-labelledby="howwework_title">
	<Grid customClass="-cols-6 -gap-vm">
		<Grid customClass="col-6 col-start-1 -gap-vm">
			<Tag label="How we work" customClass="-nano" />
			<h3 id="howwework_title" class="h3 col-6 col-start-1 md:col-3 md:col-start-1">Focused sprints. Clear ownership. No dependencies.</h3>
			<div class="pairing col-6 col-start-1 md:col-2 md:col-start-5 -spaced">
				<p class="body_text -medium">Most design work creates ongoing dependency. We work differently. One focused sprint, a defined end date, and a system your team owns and runs without us. We come back only if you want to go deeper.</p>
			</div>
		</Grid>

		<List customClass="stages col-6 col-start-1 -gap-none">
			<Box as="li" customClass="-align-top -padding-s" boxed>
				<div class="index">
					<span class="dot"></span>
					<p class="body_text -large -subtle">Week 1-2</p>
					<Crosshair customClass="-tl" />
				</div>
				<p class="h5">Listen and map</p>
				<div class="box_body">
					<p class="body_text -medium -subtle">We map your product, your team, and the specific patterns your scientific data needs. No designing before the problem is named.</p>
				</div>
			</Box>
			<Box as="li" customClass="-align-top -padding-s" boxed>
				<div class="index">
					<span class="dot"></span>
					<p class="body_text -large -subtle">Week 3-4</p>
				</div>
				<p class="h5">Build and refine</p>
				<div class="box_body">
					<p class="body_text -medium -subtle">We build the foundation. Components, tokens, data visualisation patterns built specifically for your domain, not generic templates.</p>
				</div>
			</Box>
			<Box as="li" customClass="-align-top -padding-s" boxed>
				<div class="index">
					<span class="dot"></span>
					<p class="body_text -large -subtle">Week 5-6</p>
				</div>
				<p class="h5">Hand over and train</p>
				<div class="box_body">
					<p class="body_text -medium -subtle">We hand over a system your team knows how to use. Training included. Thirty days after handoff, we check adoption is working.</p>
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

	/* .box_body {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: flex-end;
	} */

</style>
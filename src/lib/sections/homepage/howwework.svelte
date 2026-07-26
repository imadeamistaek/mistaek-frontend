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
			<h3 id="howwework_title" class="h3 col-6 col-start-1 md:col-3 md:col-start-1">Focused programs. Clear ownership. No dependencies.</h3>
			<div class="pairing col-6 col-start-1 md:col-2 md:col-start-5 -spaced">
				<p class="body_text -medium">Most design work creates ongoing dependency. We work differently. One program, a defined end date, and everything owned by your team when we leave.</p>
			</div>
		</Grid>

		<List customClass="stages col-6 col-start-1 -gap-none">
			<Box as="li" customClass="-align-top -padding-s" boxed>
				<div class="index">
					<span class="dot"></span>
					<p class="body_text -large -subtle">Step 1</p>
					<Crosshair customClass="-tl" />
				</div>
				<p class="h5">Listen and map</p>
				<div class="box_body">
					<p class="body_text -medium -subtle">We talk to the people who decide about your technology, not only the people who built it. No designing before the problem is named.</p>
				</div>
			</Box>
			<Box as="li" customClass="-align-top -padding-s" boxed>
				<div class="index">
					<span class="dot"></span>
					<p class="body_text -large -subtle">Step 2</p>
				</div>
				<p class="h5">Build</p>
				<div class="box_body">
					<p class="body_text -medium -subtle">Brand, narrative, system, product. Whatever the program covers, built to hold as you grow.</p>
				</div>
			</Box>
			<Box as="li" customClass="-align-top -padding-s" boxed>
				<div class="index">
					<span class="dot"></span>
					<p class="body_text -large -subtle">Step 3</p>
				</div>
				<p class="h5">Hand over</p>
				<div class="box_body">
					<p class="body_text -medium -subtle">Everything owned by your team. Training included. Then we leave.</p>
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
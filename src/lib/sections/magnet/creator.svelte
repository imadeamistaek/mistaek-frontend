<script lang="ts">
    import Grid from "$lib/components/grid.svelte";
    import Box from "$lib/elements/box.svelte";
    import Tag from "$lib/elements/tag.svelte";
    import CardCreator from "$lib/components/cardCreator.svelte";
</script>

<section class="container" aria-labelledby="creator_title">
    <Grid customClass="-gap-vmax">
		<Box as="div" customClass="col-6 col-start-1 md:col-5 md:col-start-1 lg:col-4 lg:col-start-1 -gap-vm">
			<Tag label="Who built this?" customClass="-nano" />
			<h5 id="creator_title" class="h3">This reality check comes from years of watching teams waste money on premature design systems.</h5>
		</Box>
		<CardCreator customClass="col-6 col-start-1 md:col-6 md:col-start-1 lg:col-5 lg:col-start-2 xlg:col-4 xlg:col-start-3" photo="/people/andre.png" altText="A black and white portrait of André resting his head on his hand, looking at the camera with a thoughtful look, wearing a black wool sweater." />
	</Grid>
</section>
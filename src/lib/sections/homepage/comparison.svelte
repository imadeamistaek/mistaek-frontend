<script lang="ts">
	import SectionHeading from "$lib/components/sectionHeading.svelte";
	import Grid from "$lib/components/grid.svelte";
	import Tag from "$lib/elements/tag.svelte";
	import Box from "$lib/elements/box.svelte";
	import List from "$lib/components/list.svelte";
	import ListItem from "$lib/elements/listItem.svelte";
</script>

<section class="container" aria-labelledby="howwework_title">
	<Grid customClass="-cols-6 -gap-vm">
		
		<Tag label="How we compare" customClass="-nano col-6 col-start-1 md:col-2 md:col-start-1 lg:col-1 lg:col-start-1" />
		<div class="pairing  col-6 col-start-1 md:col-4 md:col-start-3 lg:col-4 lg:col-start-2">
			<h5 id="howwework_title" class="h3">Strategy and system.</h5>
			<h5 id="howwework_title" class="h3">Not brand and goodbye.</h5>
		</div>
		<List customClass="stages col-6 col-start-1 lg:col-4 lg:col-start-2 -gap-none">
			<Box as="li" customClass="-align-top -padding-s -space-s" boxed>
				<p class="h6">Mistaek</p>
				<List customClass="" vertical smallgap>
					<ListItem as="li" icon="checkg" label="Brand, system, and product in one engagement" customClass="-small"/>
					<ListItem as="li" icon="checkg" label="Built to hold as you scale" customClass="-small"/>
					<ListItem as="li" icon="checkg" label="Fixed scope, fixed price, fixed end date" customClass="-small"/>
					<ListItem as="li" icon="checkg" label="You own everything permanently" customClass="-small"/>
					<!-- <ListItem as="li" icon="checkg" label="Senior designers" customClass="-small"/> -->
				</List>
			</Box>
			<Box as="li" customClass="-align-top -padding-s -space-s" boxed>
				<p class="h6">Brand Studios</p>
				<List customClass="" vertical smallgap>
					<ListItem as="li" icon="close-circle-r" label="Brand, then you are on your own" customClass="-small -subtle"/>
					<ListItem as="li" icon="close-circle-r" label="Rebuilt at the next stage of growth" customClass="-small -subtle"/>
					<ListItem as="li" icon="close-circle-r" label="Open-ended, or a retainer" customClass="-small -subtle"/>
					<ListItem as="li" icon="close-circle-r" label="Ongoing dependency" customClass="-small -subtle"/>
					<!-- <ListItem as="li" icon="close-circle-r" label="Junior designers" customClass="-small -subtle"/> -->
				</List>
			</Box>
		</List>

	</Grid>
</section>
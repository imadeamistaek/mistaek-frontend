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
			<h5 id="howwework_title" class="h3">Fast infrastructure.</h5>
			<h5 id="howwework_title" class="h3">No dependencies.</h5>
		</div>
		<List customClass="stages col-6 col-start-1 lg:col-4 lg:col-start-2">
			<Box as="li" customClass="-align-top -padding-s -space-s" boxed>
				<p class="h6">Mistaek</p>
				<List customClass="" vertical smallgap>
					<ListItem as="li" icon="checkg" label="4-6 weeks, clear timeline" customClass="-small"/>
					<ListItem as="li" icon="checkg" label="You own the system after delivery" customClass="-small"/>
					<ListItem as="li" icon="checkg" label="Domain-specific for scientific data" customClass="-small"/>
					<ListItem as="li" icon="checkg" label="1 focused project at a time" customClass="-small"/>
					<!-- <ListItem as="li" icon="checkg" label="Senior designers" customClass="-small"/> -->
				</List>
			</Box>
			<Box as="li" customClass="-align-top -padding-s -space-s" boxed>
				<p class="h6">Other agencies</p>
				<List customClass="" vertical smallgap>
					<ListItem as="li" icon="close-circle-r" label="3-6 months or more" customClass="-small -subtle"/>
					<ListItem as="li" icon="close-circle-r" label="Ongoing retainers and dependencies" customClass="-small -subtle"/>
					<ListItem as="li" icon="close-circle-r" label="Generic component libraries" customClass="-small -subtle"/>
					<ListItem as="li" icon="close-circle-r" label="Many projects, divided attention" customClass="-small -subtle"/>
					<!-- <ListItem as="li" icon="close-circle-r" label="Junior designers" customClass="-small -subtle"/> -->
				</List>
			</Box>
		</List>

	</Grid>
</section>
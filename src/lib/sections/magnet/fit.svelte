<script lang="ts">
	import Tag from "$lib/elements/tag.svelte";
    import Grid from "$lib/components/grid.svelte";
    import Box from "$lib/elements/box.svelte";
    import List from "$lib/components/list.svelte";
    import ListItem from "$lib/elements/listItem.svelte";
</script>

<section class="container" aria-labelledby="fit_title">
	<Grid customClass="-gap-vm">
		<Tag label="Are we a good match?" customClass="-nano col-6" />
		<h4 id="fit_title" class="h3 col-6 col-start-1 md:col-4 md:col-start-1 lg:col-3 lg:col-start-1">Not every designer works with every founder.</h4>
		<p class="body_text -large col-4 col-start-1 md:col-6 md:col-start-1 lg:col-4 lg:col-start-1">Here's how to know if we should work together:</p>

		<Grid customClass="col-6 col-start-1">
			<Box customClass="-aspect-16-9 col-6 col-start-1 md:col-4 md:col-start-1 lg:col-3 lg:col-start-1 -padding-s -gap-vm" boxed>
				<p class="h6">We'll work well together if:</p>
				<List customClass="" vertical gapped>
					<ListItem as="li" icon="checkg" label="You’re building something meaningful in biotech, climate tech, accessibility, sustainability or similar." customClass="-small"/>
					<ListItem as="li" icon="checkg" label="You want design partners who challenge assumptions and ask hard questions" customClass="-small"/>
					<ListItem as="li" icon="checkg" label="You care about accessibility and sustainability as core principles, not marketing add-ons" customClass="-small"/>
					<ListItem as="li" icon="checkg" label="You're ready to hear honest feedback, even when it's not what you expected" customClass="-small"/>
				</List>
			</Box>
			<Box customClass="-aspect-16-9 col-6 col-start-1 md:col-4 md:col-start-1 lg:col-3 lg:col-start-4 -padding-s -gap-vm" boxed>
				<p class="h6">We're probably not a fit if:</p>
				<List customClass="" vertical gapped>
					<ListItem as="li" icon="close-circle-r" label="You want the cheapest option or need something 'quick and dirty'" customClass="-small"/>
					<ListItem as="li" icon="close-circle-r" label="You've already decided what you want and just need someone to build it" customClass="-small"/>
					<ListItem as="li" icon="close-circle-r" label="You see design as decoration rather than problem-solving" customClass="-small"/>
					<ListItem as="li" icon="close-circle-r" label="You don't have time to think through strategy and just want execution" customClass="-small"/>
				</List>
			</Box>
		</Grid>
	</Grid>
</section>
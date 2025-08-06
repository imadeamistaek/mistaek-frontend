<script lang="ts">
    import SectionHeading from "$lib/components/sectionHeading.svelte";
    import Grid from "$lib/components/grid.svelte";
    import Box from "$lib/components/box.svelte";
    import List from "$lib/components/list.svelte";
    import ListItem from "$lib/components/listItem.svelte";
</script>

<section>
	<SectionHeading sectionCustomClass="col-4 col-start-1" label="Are we the right fit?">
		<h4 class="h3">Not every designer is a great match for every founder, and that’s okay.</h4>
		<p class="body_text -large">Here’s how to know if working together could make sense:</p>
	</SectionHeading>
    <Grid customClass="col-6 col-start-1">
		<Box customClass="col-3 -space-m">
			<p class="h6">We'll probably work well together if...</p>
			<List customClass="" vertical gapped>
				<ListItem as="li" icon="checkg" label="You’re building something meaningful in biotech, climate tech, accessibility, or sustainability — and want your brand and product to reflect that." customClass="-small"/>
				<ListItem as="li" icon="checkg" label="You care about clarity, usability, accessibility, and doing things right — not just quickly." customClass="-small"/>
				<ListItem as="li" icon="checkg" label="You want a design partner who brings structure, strategy, and clear thinking to your chaos." customClass="-small"/>
				<ListItem as="li" icon="checkg" label="You’re open to ideas, trust the process, and want someone who’ll challenge your assumptions (kindly)." customClass="-small"/>
			</List>
		</Box>
		<Box customClass="col-3 -space-m">
			<p class="h6">We’re probably not a great fit if…</p>
			<List customClass="" vertical gapped>
				<ListItem as="li" icon="close-circle-r" label="You’re looking for the cheapest option or just want to “get something up” fast." customClass="-small"/>
				<ListItem as="li" icon="close-circle-r" label="You want someone to take your brief and follow it exactly — no questions asked." customClass="-small"/>
				<ListItem as="li" icon="close-circle-r" label="You see design as decoration, not as a way to solve real problems and support your business." customClass="-small"/>
				<ListItem as="li" icon="close-circle-r" label="You don’t have time (or interest) in thinking through your product or strategy — and just want execution." customClass="-small"/>
			</List>
		</Box>
	</Grid>
</section>
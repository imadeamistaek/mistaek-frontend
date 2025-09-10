<script>
    import ChecklistStepper from "$lib/components/checklistStepper.svelte";
    import List from "$lib/components/list.svelte";
    import ListItem from "$lib/elements/listItem.svelte";
</script>
<section class="-flex -no-gap" id="checklist">
    <ChecklistStepper />
    <List customClass="">
		<ListItem as="li" boxed icon="checkw" label="A clear picture of your team’s current stage" customClass="-micro"/>
		<ListItem as="li" boxed icon="checkw" label="Tailored insights based on your answers" customClass="-micro"/>
		<ListItem as="li" boxed icon="checkw" label="Actionable next steps you can take" customClass="-micro"/>
	</List>
</section>
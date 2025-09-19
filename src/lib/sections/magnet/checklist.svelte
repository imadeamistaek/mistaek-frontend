<script>
    import ChecklistStepper from "$lib/components/checklistStepper.svelte";
    import List from "$lib/components/list.svelte";
    import IconItem from "$lib/elements/iconItem.svelte";
</script>
<section class="container -gap-vm" id="checklist">
    <ChecklistStepper />
    <List customClass="-padding-vl">
		<IconItem as="li" boxed icon="checkw" label="A clear picture of your team’s current stage" customClass="-micro"/>
		<IconItem as="li" boxed icon="checkw" label="Tailored insights based on your answers" customClass="-micro"/>
		<IconItem as="li" boxed icon="checkw" label="Actionable next steps you can take" customClass="-micro"/>
	</List>
</section>
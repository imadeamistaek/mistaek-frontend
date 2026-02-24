<script>
	import DistortedLogo from '$lib/elements/distortedLogo.svelte';
	import List from '$lib/components/list.svelte';
	import Box from '$lib/elements/box.svelte';
	import Crosshair from "$lib/elements/markers/crosshair.svelte";
	import Grid from "$lib/components/grid.svelte";
</script>

<section class="container" aria-labelledby="solution_title">
	<Grid customClass="-cols-6 -gap-vm">
		<Box as="div" customClass="col-6 col-start-1 -space-l" boxed>
			<Crosshair customClass="-tl" />
			<Crosshair customClass="-br" />
			<Grid customClass="col-6 col-start-1 -padding-l -gap-vl">
				<h3 id="solution_title" class="h3 col-6 col-start-1 lg:col-4 lg:col-start-1">Focused sprints. Clear systems. Permanent ownership.</h3>
				<div class="pairing col-6 col-start-1 md:col-2 md:col-start-5 -spaced">
					<p class="body_text -medium -contained-xl">We run 4-6 week design system sprints built specifically for complex scientific data products. After the sprint, you own the system. No retainers. No ongoing dependencies. No endless "just one more thing."</p>
					<p class="body_text -medium -contained-xl">Your team gets the infrastructure to scale without design chaos or expensive redesigns later.</p>
				</div>
			</Grid>
			<List customClass="col-6 col-start-1 -padding-none" vertical>
				<Box as="li" customClass="-horizontal -padding-hxl">
					<p class="body_text -large">What you get:</p>
				</Box>
			</List>
			<List customClass="col-6 col-start-1 -padding-none" vertical divided hoverable>
				<Box as="li" customClass="-horizontal -padding-hxl -padding-vs -items-hcenter">
					<p class="body_text -large">(01)</p>
					<p class="h6">Complete design system in Figma your team owns permanently</p>
				</Box>
				<Box as="li" customClass="-horizontal -padding-hxl -padding-vs -items-hcenter">
					<p class="body_text -large">(02)</p>
					<p class="h6">Design tokens, components, and data visualization patterns</p>
				</Box>
				<Box as="li" customClass="-horizontal -padding-hxl -padding-vs -items-hcenter">
					<p class="body_text -large">(03)</p>
					<p class="h6">Documentation and training for designers and developers</p>
				</Box>
				<Box as="li" customClass="-horizontal -padding-hxl -padding-vs -items-hcenter">
					<p class="body_text -large">(04)</p>
					<p class="h6">Governance framework so the system stays consistent as you grow</p>
				</Box>
			</List>
		</Box>
	</Grid>
</section>

<style>
	@media (min-width: 992px) {
		:global(.-inverted-mobile) { padding: var(--space-400) 0 !important; }
	}
</style>
<script lang="ts">
    import ButtonPairing from "./buttonPairing.svelte";
	import Anchor from "$lib/elements/anchor.svelte";
	import Link from "$lib/elements/link.svelte";
	import Grid from "./grid.svelte";
	import Box from "$lib/elements/box.svelte";
    import BackgroundColumns from "$lib/elements/backgroundColumns.svelte";
</script>

<Box as="div" customClass="" boxed>
	<Grid customClass="-aspect-21-9 grid-rows-2">
		<BackgroundColumns />
		<Box as="div" customClass="col-3 col-start-1 cell-row-span-1 -padding-xl -rgap-s">
			<h6 class="h2">Ready to build the right thing at the right time?</h6>
		</Box>
		<Box as="div" customClass="col-2 col-start-4  cell-row-span-2 -padding-xl -rgap-s -items-vend -alignhcenter">
			<p class="h6 -contained">Let's figure out your smartest next move.</p>
			<p class="body_text -medium -contained">Book a quick call and we'll help you create a plan that actually matches where your product is right now, not where you think it should be.</p>
			<ButtonPairing>
				<Anchor slot="left" variant="default" size="medium" label="Take the Reality Check" href="#checklist"/>
				<Link slot="right" label="Book an intro call" url="https://cal.com/mistaek/15min" type="external" />
			</ButtonPairing>
		</Box>
	</Grid>
</Box>
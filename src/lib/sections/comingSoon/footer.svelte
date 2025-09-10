<script>
	import List from '$lib/components/list.svelte';
	import Box from '$lib/elements/box.svelte';
    import Grid from "$lib/components/grid.svelte";
    import Logo from '$lib/elements/logo.svelte';
    import Link from '$lib/elements/link.svelte';
</script>

<footer>
	<Box as="div" customClass="col-6 col-start-1 -space-l -overflow-h" boxed>
		<Grid customClass="col-6 col-start-1 -padding-l">
			<h5 class="h2 col-2">Make it matter.</h5>
			<List customClass="col-3 col-start-4" gapped vertical>
				<li class="-hidden-xs"><Logo small /></li>
				<li><p class="body_text -micro -subtle -contained">We remove the barriers that hold ideas back and create design that works for people, brands, and the planet.</p></li>
				<li>
					<List customClass="col-3 col-start-4 -gap-vnone" gapped>
						<li><Link url="https://cal.com/mistaek/15min" customClass="-small -full" label="Book a call" icon="arrow-out" /></li>
						<li><Link url="https://www.linkedin.com/company/mistaek-studio/" customClass="-small -full" label="Follow the updates" icon="arrow-out" /></li>
						<li><Link url="mailto:hello@mistaek.com" customClass="-small -full" label="hello@mistaek.com" icon="arrow-out" mail /></li>
					</List>
				</li>
			</List>
		</Grid>
	</Box>
</footer>
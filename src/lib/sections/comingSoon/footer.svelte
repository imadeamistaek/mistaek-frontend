<script>
	import List from '$lib/components/list.svelte';
	import Box from '$lib/components/box.svelte';
    import Grid from "$lib/components/grid.svelte";
    import Logo from '$lib/components/logo.svelte';
    import Link from '$lib/components/link.svelte';
</script>

<footer>
	<Box as="div" customClass="col-6 col-start-1 -space-l -overflow-h" boxed>
		<Grid customClass="col-6 col-start-1 -padding-l">
			<h2 class="col-2">Make it matter.</h2>
			<List customClass="col-3 col-start-4" gapped vertical>
				<li class="-hidden-xs"><Logo small /></li>
				<li><p class="body_text -micro -subtle -contained">We remove the barriers that hold ideas back and create design that works for people, brands, and the planet.</p></li>
                <List customClass="col-3 col-start-4 -gap-vnone" gapped>
                    <Link url="https://cal.com/mistaek/15min" customClass="-small" label="Book a call" icon="arrow-out" />
                    <Link url="https://www.linkedin.com/company/mistaek-studio/" customClass="-small" label="Follow the updates" icon="arrow-out" />
                    <Link url="mailto:hello@mistaek.com" customClass="-small" label="hello@mistaek.com" icon="arrow-out" mail />
                </List>
			</List>
		</Grid>
	</Box>
</footer>
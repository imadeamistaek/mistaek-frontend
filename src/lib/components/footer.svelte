<script>
	import List from '$lib/components/list.svelte';
	import Box from '$lib/elements/box.svelte';
    import Grid from "$lib/components/grid.svelte";
    import Logo from '$lib/elements/logo.svelte';
    import Link from '$lib/elements/link.svelte';
</script>

<footer>
	<Box as="div" customClass="-space-l -overflow-h" boxed>
		<Grid customClass="-padding-l -gap-vs">
			<h5 class="h2 col-6 col-start-1 md:col-6 md:col-start-1 lg:col-2 lg:col-start-1">Make it matter.</h5>
			<List customClass="col-6 col-start-1 md:col-6 md:col-start-1 lg:col-3 lg:col-start-4" gapped vertical>
				<li class="-hidden-m"><Logo small={true} /></li>
				<li><p class="body_text -micro -subtle -contained-l">We remove the barriers that hold ideas back and create design that works for people, brands, and the planet.</p></li>
				<li>
					<List customClass="col-6 col-start-1 md:col-4 md:col-start-1 lg:col-3 lg:col-start-4 -gap-vnone" gapped>
						<li><Link customClass="-small -full" label="Book a call" url="https://cal.com/mistaek/15min" type="external" /></li>
						<li><Link customClass="-small -full" label="Follow the updates" url="https://www.linkedin.com/company/mistaek-studio/" type="external" /></li>
						<li><Link customClass="-small -full" label="hello@mistaek.com" url="mailto:hello@mistaek.com" type="external" icon="send" /></li>
					</List>
				</li>
			</List>
		</Grid>
	</Box>
</footer>
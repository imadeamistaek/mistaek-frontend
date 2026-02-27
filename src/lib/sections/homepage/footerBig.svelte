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
				<li class="-hidden-xs"><Logo small={true} /></li>
					<List customClass="col-3 col-start-4 -gap-vnone" gapped vertical>
						<li><p class="body_text -micro -subtle -contained">Design systems for nature tech companies</p></li>
						<li><p class="body_text -micro -subtle -contained">© 2026 Mistaek. Built with accessibility in mind.</p></li>
					</List>
				<li>
					<List customClass="col-3 col-start-4 -gap-vnone" gapped>
						<li><Link customClass="-small -full" label="Follow the updates" url="https://www.linkedin.com/company/mistaek-studio/" type="external" /></li>
						<li><Link customClass="-small -full" label="hello@mistaek.com" url="mailto:hello@mistaek.com" type="external" icon="send" /></li>
					</List>
				</li>
			</List>
		</Grid>
	</Box>
</footer>
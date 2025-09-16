<script lang="ts">
	import Grid from '$lib/components/grid.svelte';
	import List from '$lib/components/list.svelte';
	import Box from '$lib/elements/box.svelte';
  	import Tag from '$lib/elements/tag.svelte';
	import Crosshair from '$lib/elements/markers/crosshair.svelte';
</script>

<section id="about" aria-labelledby="timeline_title">
	<Grid customClass="col-6 -cgap-none">
		<Box as="div" customClass="col-2 -rgap-m">
			<Tag label="The truth about design systems" customClass="-nano" />
			<h3 id="timeline_title" class="h3">Why most design systems fail</h3>
			<p class="body_text -medium -contained">Before you make the same expensive mistakes everyone else is making, here's what we've observed working with teams:</p>
		</Box>
		<Box as="div" customClass="col-3 col-start-4">
			<List customClass="col-3 col-start-4" vertical>
				<Box as="li" customClass="-align-top -padding-xs" boxed>
					<Crosshair customClass="-tl" />
					<p class="body_text -medium">Most design systems get abandoned because teams can't commit to maintaining them.</p>
				</Box>
				<Box as="li" customClass="-align-top -padding-xs" boxed>
					<p class="body_text -medium">Teams often spend more time debating component names than solving user problems.</p>
				</Box>
				<Box as="li" customClass="-align-top -padding-xs" boxed>
					<p class="body_text -medium">Many 'accessible' design systems fail basic usability tests with real users.</p>
				</Box>
				<Box as="li" customClass="-align-top -padding-xs" boxed>
					<p class="body_text -medium">The biggest cost isn't building the system, it's the ongoing team time to keep it useful.</p>
				</Box>
			</List>
		</Box>
	</Grid>
</section>
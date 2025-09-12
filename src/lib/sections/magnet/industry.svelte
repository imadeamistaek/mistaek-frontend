<script lang="ts">
	import List from '$lib/components/list.svelte';
	import Box from '$lib/elements/box.svelte';
  	import Tag from '$lib/elements/tag.svelte';
	import Crosshair from '$lib/elements/markers/crosshair.svelte';
</script>

<section id="about" aria-labelledby="timeline_title">
	<Tag label="The truth about design systems" customClass="-nano" />
	<h2 id="timeline_title" class="h3 col-3 col-start-1">Why most design systems fail</h2>
	<p class="col-3 col-start-1 body_text -large -contained">Before you make the same expensive mistakes everyone else is making, here's what we've observed working with teams:</p>
	<List customClass="col-3 col-start-4" vertical>
		<Box as="li" customClass="-align-top -padding-s" boxed>
			<Crosshair customClass="-tl" />
			<p class="body_text -large -subtle">Most design systems get abandoned because teams can't commit to maintaining them</p>
		</Box>
		<Box as="li" customClass="-align-top -padding-s" boxed>
			<p class="body_text -large -subtle">Teams often spend more time debating component names than solving user problems</p>
		</Box>
		<Box as="li" customClass="-align-top -padding-s" boxed>
			<p class="body_text -large -subtle">Many 'accessible' design systems fail basic usability tests with real users</p>
		</Box>
		<Box as="li" customClass="-align-top -padding-s" boxed>
			<p class="body_text -large -subtle">The biggest cost isn't building the system, it's the ongoing team time to keep it useful</p>
		</Box>
	</List>
</section>
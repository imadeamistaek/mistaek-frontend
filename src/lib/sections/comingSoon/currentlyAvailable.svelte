<script>
	import DistortedLogo from '$lib/components/distortedLogo.svelte';
	import List from '$lib/components/list.svelte';
	import Box from '$lib/components/box.svelte';
	import Marker from "$lib/components/marker.svelte";
    import Grid from "$lib/components/grid.svelte";
	import Link from '$lib/components/link.svelte';
</script>

<section>
	<Box as="div" customClass="col-6 col-start-1 -space-l -overflow-h" boxed>
		<DistortedLogo customClass="tl" />
		<Grid customClass="col-6 col-start-1 -padding-l -space-l">
			<h3 class="h2 col-3">We're taking on select projects</h3>
			<p class="body_text -large -contained-xl -align-br col-2 col-start-5">While we build, we're still partnering with purpose-driven startups who need design that removes barriers and creates real impact.</p>
		</Grid>
		<Grid customClass="col-6 col-start-1 -padding-none -space-l">
			<List customClass="col-3 col-start-1 -inverted-mobile" gapped>
				<Box as="li" customClass="-space-s -horizontal -padding-hl">
					<p class="body_text -large">What we're working on:</p>
				</Box>
				<Box as="li" customClass="-align-bl -padding-hl">
					<p class="body_text -large -subtle">Ready to work together?</p>
					<Link url="https://cal.com/mistaek/15min" customClass="" label="Book an intro call" icon="arrow-out" />
				</Box>
			</List>
			<List customClass="col-3 col-start-4" vertical>
				<Box as="li" customClass="-space-s -horizontal -padding-s" boxed>
					<Marker customClass="-tl" />
					<p class="body_text -large">(01)</p>
					<p class="h6">Accessible web experiences that work for everyone</p>
				</Box>
				<Box as="li" customClass="-space-s -horizontal -padding-s" boxed>
					<p class="body_text -large">(02)</p>
					<p class="h6">Clear brand messaging for complex innovations</p>
				</Box>
				<Box as="li" customClass="-space-s -horizontal -padding-s" boxed>
					<p class="body_text -large">(03)</p>
					<p class="h6">Sustainable design systems that scale responsibly</p>
				</Box>
			</List>
		</Grid>
	</Box>
</section>

<style>
	:global(.distortedLogo) { transform: rotate3d(0, 0, 1, -48deg); }
	@media (min-width: 992px) {
		:global(.-inverted-mobile) { padding: var(--space-400) 0 !important; }
	}
</style>
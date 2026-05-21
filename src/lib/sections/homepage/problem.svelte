<script>
    import Tag from "$lib/elements/tag.svelte";
	import Grid from "$lib/components/grid.svelte";
</script>

<section class="container" aria-labelledby="problem_title">
	<Grid customClass="col-6 col-start-1 -gap-vm">
		<Tag label="The problem" customClass="-nano col-1 col-start-1" />
		<div class="pairing col-6 col-start-1 col-6 col-start-1 md:col-3 md:col-start-1 -spaced">
			<h2 id="problem_title" class="h3">The product is working. The design isn't.</h2>
			<p class="h6">At Series A, the pressure shifts.</p>
		</div>
		<div class="pairing col-6 col-start-1 md:col-2 md:col-start-5 -items-vend -spaced">
			<p class="body_text -small -contained-xl">Enterprise buyers scrutinise what your product looks like, not just what it does. New hires ask uncomfortable questions about consistency. Developers rebuild the same components sprint after sprint. The science hasn't changed. But the gap between what you've built and how it reads is starting to cost you. Design determines who gets access to what you've built. Right now, it might be getting in the way.</p>
		</div>
	</Grid>
</section>
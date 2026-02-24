<script>
    import Tag from "$lib/elements/tag.svelte";
	import Grid from "$lib/components/grid.svelte";
</script>

<section class="container" aria-labelledby="problem_title">
	<Grid customClass="col-6 col-start-1 -gap-vm">
		<Tag label="The problem" customClass="-nano col-1 col-start-1" />
		<h2 id="problem_title" class="h3 col-6 col-start-1 md:col-3 md:col-start-1">Your science is brilliant. Your product shouldn’t hide it.</h2>
		<div class="pairing col-6 col-start-1 md:col-2 md:col-start-5 -spaced">
			<p class="body_text -medium -contained-xl">Most nature tech companies at Series A have products in market and paying customers. But as you scale, design inconsistency slows your team down. Complex scientific data becomes harder to trust. Enterprise buyers struggle to understand what you've built.</p>
			<p class="body_text -medium -contained-xl">You need infrastructure, not just polish. Design systems that translate oceanographic data, biodiversity metrics, or environmental science into interfaces people can trust and understand.</p>
		</div>
	</Grid>
</section>
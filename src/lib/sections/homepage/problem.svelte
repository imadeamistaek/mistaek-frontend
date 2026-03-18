<script>
    import Tag from "$lib/elements/tag.svelte";
	import Grid from "$lib/components/grid.svelte";
</script>

<section class="container" aria-labelledby="problem_title">
	<Grid customClass="col-6 col-start-1 -gap-vm">
		<Tag label="The problem" customClass="-nano col-1 col-start-1" />
		<div class="pairing col-6 col-start-1 col-6 col-start-1 md:col-3 md:col-start-1 -spaced">
			<h2 id="problem_title" class="h3">Design should remove barriers, not create them.</h2>
			<p class="h6">Your science is brilliant. Your innovation matters. But complexity is holding it back.</p>
		</div>
		<div class="pairing col-6 col-start-1 md:col-2 md:col-start-5 -items-vend -spaced">
			<p class="body_text -small -contained-xl">Most sustainability tech companies at Series A have strong science but struggle with design consistency as they scale. Complex data becomes harder to trust. Your product experience isn't keeping up. You need infrastructure, not just polish.</p>
		</div>
	</Grid>
</section>
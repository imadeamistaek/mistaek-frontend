<script>
    import Tag from "$lib/elements/tag.svelte";
	import Grid from "$lib/components/grid.svelte";
</script>

<section class="container" aria-labelledby="problem_title">
	<Grid customClass="col-6 col-start-1 -gap-vm">
		<Tag label="The problem" customClass="-nano col-1 col-start-1" />
		<div class="pairing col-6 col-start-1 col-6 col-start-1 md:col-3 md:col-start-1 -spaced">
			<h2 id="problem_title" class="h3">The science is solid. The gap is everyone who has to decide about it.</h2>
		</div>
		<div class="pairing col-6 col-start-1 md:col-2 md:col-start-5 -items-vend -spaced">
			<p class="body_text -small -contained-xl">An investor without your domain background forms a view before your deck loads. A procurement committee judges what they can see, not what you know. An operator has to trust the output without understanding how it was built. The science has not changed. But the distance between what you have built and how it reads to the people who decide about it is starting to cost you, in ways that are hard to name directly.</p>
		</div>
	</Grid>
</section>
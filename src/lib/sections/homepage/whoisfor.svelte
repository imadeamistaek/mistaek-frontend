<script>
    import Tag from "$lib/elements/tag.svelte";
	import Grid from "$lib/components/grid.svelte";
	import Link from '$lib/elements/link.svelte';
</script>

<section class="container" aria-labelledby="whoisfor_title">
	<Grid customClass="col-6 col-start-1 -gap-vm">
		<Tag label="Who this is for" customClass="-nano col-1 col-start-1" />
		<h4 id="whoisfor_title" class="h3 col-6 col-start-1 md:col-3 md:col-start-1">Built for nature tech companies scaling with purpose</h4>
		<div class="pairing col-6 col-start-1 md:col-2 md:col-start-5 -spaced">
			<p class="body_text -medium -contained-xl">This works best for Series A companies working in ocean tech, biodiversity, nature restoration, or environmental data platforms.</p>
			<p class="body_text -medium -contained-xl">You have a product in market, paying customers, and a team that's growing. You're dealing with complex scientific data that needs to be clear without dumbing down the science. Your enterprise buyers need to trust what they see.</p>
		</div>
        <div class="pairing col-6 col-start-1 md:col-2 md:col-start-5 -spaced">
			<p class="body_text -medium -contained-xl -subtle">If that sounds like you:</p>
			<Link label="Let's talk" url="https://cal.com/mistaek/15min" type="external" />
		</div>
	</Grid>
</section>
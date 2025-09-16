<script>
    import Tag from "$lib/elements/tag.svelte";
	import Grid from "$lib/components/grid.svelte";
	import Link from '$lib/elements/link.svelte';
</script>

<section aria-labelledby="fresh_title">
    <Tag label="Starting Fresh" customClass="-nano" />
	<Grid customClass="col-6 col-start-1 -rgap-m">
		<h4 id="fresh_title" class="h2 col-2">Practice what we preach</h4>
		<div class="pairing col-3 col-start-4 -spaced">
			<p class="h6 ">Our old site worked, but it didn't fully represent who we've become.</p>
			<p class="h6 ">As Mistaek has evolved to focus on accessibility, sustainability, and barrier removal, our digital home should reflect those same principles.</p>
			<p class="h6 ">This rebuild isn't just about looking better, it's about being better. More accessible. More sustainable. More honest about how we work and what we believe.</p>
		</div>
		<div class="pairing col-3 col-start-4 -spaced">
			<p class="body_text -large -contained-xl  -subtle">We'll be sharing the behind-the-scenes process on LinkedIn, including decisions, challenges, and wins. Because transparency builds trust.</p>
			<Link label="Follow the updates" url="https://www.linkedin.com/company/mistaek-studio/" type="external" />
		</div>
	</Grid>
</section>
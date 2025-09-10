<script>
	import Tag from "$lib/elements/tag.svelte";
	import List from '$lib/components/list.svelte';
	import Box from '$lib/elements/box.svelte';
	import Crosshair from "$lib/elements/markers/crosshair.svelte";
</script>

<section aria-labelledby="timeline_title">
	<Tag label="What's Coming" customClass="-nano" />
	<h2 id="timeline_title" class="col-3 col-start-1">Built with purpose, launched in stages</h2>
	<p class="body_text -large -contained-xl col-2 col-start-5 -align-bottom">Why staged? Because good design takes time, and we'd rather be transparent about our process than rush something that doesn't meet our standards.</p>

	<List customClass="stages col-6 col-start-1">
		<Box as="li" customClass="-align-top -aspect-square -padding-s" boxed>
			<div class="index">
				<p class="body_text -large">01</p>
				<span class="dot"></span>
				<Tag label="In Progress" customClass="-nano -progress" />
				<Crosshair customClass="-tl" />
			</div>
			<p class="h6">Coming Soon</p>
			<div class="box_body">
				<p class="body_text -large -subtle">Clear communication about what we're building and why. Staying connected while we create something better.</p>
			</div>
		</Box>
		<Box as="li" customClass="-align-top -aspect-square -padding-s" boxed>
			<div class="index">
				<p class="body_text -large">02</p>
				<span class="dot"></span>
			</div>
			<p class="h6">Foundation Launch</p>
			<div class="box_body">
				<p class="body_text -large -subtle">Everything you need to understand who we are, what we do, and how we can work together. The essentials, done right.</p>
				<p class="body_text -small -subtle">What to expect: Homepage, About, Services, Contact</p>
			</div>
		</Box>
		<Box as="li" customClass="-align-top -aspect-square -padding-s" boxed>
			<div class="index">
				<p class="body_text -large">03</p>
				<span class="dot"></span>
			</div>
			<p class="h6">Complete Experience</p>
			<div class="box_body">
				<p class="body_text -large -subtle">Full showcase of our work, insights on design and accessibility, plus transparent pricing that removes the guesswork.</p>
				<p class="body_text -small -subtle">What to expect: Portfolio, Articles, Pricing Calculator</p>
			</div>
		</Box>
	</List>
</section>

<style>
	.index {
		display: flex; 
		flex-direction: row;
		align-items: center;
		gap: var(--space-100);
		margin-bottom: var(--space-200);
	}

	.box_body {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
	}

	.box_body p:last-child { margin-top: var(--space-500); }
</style>
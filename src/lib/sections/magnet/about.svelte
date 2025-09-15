<script lang="ts">
	import List from '$lib/components/list.svelte';
	import Box from '$lib/elements/box.svelte';
  	import Tag from '$lib/elements/tag.svelte';
	import Crosshair from '$lib/elements/markers/crosshair.svelte';
</script>

<section aria-labelledby="timeline_title">
	<Tag label="Why this matters" customClass="-nano" />
	<h2 id="timeline_title" class="h3 col-3 col-start-1">Design systems can accelerate your team <span class="highlight">or become expensive digital junk</span>.</h2>
	<p class="body_text -medium -contained-xl col-2 col-start-5">Everyone's talking about design systems because they can be game-changing tools. But only when they match where your product actually is, not where you think it should be. This reality check cuts through the hype and tells you the truth.</p>

	<List customClass="stages col-6 col-start-1">
		<Box as="li" customClass="-align-top -aspect-16-9 -padding-s" boxed>
			<div class="index">
				<p class="body_text -large">01</p>
				<span class="dot"></span>
				<Crosshair customClass="-tl" />
			</div>
			<div class="box_body">
				<p class="h6">Honesty over hype</p>
				<p class="body_text -large -subtle">No sugarcoating. If you're not ready, we'll tell you exactly why and what to do instead. No one benefits when you build the wrong thing at the wrong time.</p>
			</div>
		</Box>
		<Box as="li" customClass="-align-top -aspect-16-9 -padding-s" boxed>
			<div class="index">
				<p class="body_text -large">02</p>
				<span class="dot"></span>
			</div>
			<div class="box_body">
				<p class="h6">Start with what actually matters</p>
				<p class="body_text -large -subtle">Skip the components no one uses and focus on the foundations that will genuinely speed up your team. Less waste, more impact.</p>
			</div>
		</Box>
		<Box as="li" customClass="-align-top -aspect-16-9 -padding-s" boxed>
			<div class="index">
				<p class="body_text -large">03</p>
				<span class="dot"></span>
			</div>
			<div class="box_body">
				<p class="h6">Build for real growth</p>
				<p class="body_text -large -subtle">Plan for accessibility, sustainability, and scaling from day one. Not because it sounds good, but because it saves you from rebuilding everything later.</p>
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
		gap: var(--space-100);
	}
</style>
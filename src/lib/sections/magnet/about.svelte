<script lang="ts">
	import List from '$lib/components/list.svelte';
	import Box from '$lib/elements/box.svelte';
  	import Tag from '$lib/elements/tag.svelte';
</script>

<section id="about">
	<Tag customClass="-large" label="Start the Checklist" />
	<h2 class="h3 col-4 col-start-1">Design Systems can save your team <span class="highlight">— or slow it down</span>.</h2>
	<p class="col-3 col-start-1 body_text -large -contained">A Design System is a powerful tool. But only when it matches your product’s stage and your team’s needs. This quick checklist helps you understand if now is the right time, and what pieces you might be missing.</p>
	<List customClass="col-3 col-start-4" vertical>
		<Box as="li" customClass="" boxed>
			<p class="body_text -large">[Clarity] over complexity</p>
			<p class="body_text -large -subtle">It breaks down the key questions into plain language. No jargon, no endless theory. Just what you need to make a smart decision.</p>
		</Box>
		<Box as="li" customClass="" boxed>
			<p class="body_text -large">Build what matters [first]</p>
			<p class="body_text -large -subtle">It helps you spot what will actually move the needle for your team and what can wait. No wasted work. No bloated systems.</p>
		</Box>
		<Box as="li" customClass="" boxed>
			<p class="body_text -large">Make it [sustainable]</p>
			<p class="body_text -large -subtle">A good Design System should grow with your product. This checklist helps you think about accessibility, usability and scaling from the start.</p>
		</Box>
	</List>
</section>
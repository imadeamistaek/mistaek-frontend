<script lang="ts">
  import Tag from '$lib/components/tag.svelte';
</script>

<section>
	<Tag label="Start the Checklist" />
	<h2>Design Systems can save your team <span class="highlight">— or slow it down</span>.</h2>
	<p class="body_text -large">A Design System is a powerful tool. But only when it matches your product’s stage and your team’s needs. This quick checklist helps you understand if now is the right time, and what pieces you might be missing.</p>
</section>

<style>
  	section {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-row-gap: 64px;
		padding-top: 160px;
	}
	:global(.tag) {
		grid-row: 1;
	}
	section h2 {
		grid-column: 1 / span 4;
		grid-row: 2;
	}
	section p {
		grid-column: 1 / span 3;
		/* grid-row: 3; */
	}
</style>

<!-- your markup -->
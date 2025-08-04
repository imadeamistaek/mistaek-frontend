<script lang="ts">
	import Link from '$lib/components/link.svelte';
	export let customClass: string | null | undefined;
	export let photo: string;
	export let altText: string;
</script>

<div class={`card ${customClass}`}>
	<div class="slot -left">
		<img src={photo} alt={altText} class="testimonial-photo" />
	</div>
	<div class="slot -right">
		<div class="details">
			<p class="h6">I help you simplify your brand, website, and product so it works for real people.</p>
			<p class="body_text -medium">I’ve spent over 10 years designing and building systems that actually work, not just look nice.</p>
			<p class="body_text -medium">Whether you’re starting from scratch or scaling fast, I can help you make sense of what’s worth doing now, and what can wait.</p>
		</div>
		<Link url="https://cal.com/mistaek/15min" customClass="" label="Book a call with André" icon="arrow-out" />
	</div>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		background-color: var(--color-surface);
		border: var(--border-width) solid var(--color-on-surface-accent);
	}
	.slot {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		flex: 1;
	}
	.-left {flex-basis: 50%; flex-grow: 0;}
	.-right {padding: var(--space-500);}

	img {width: 100%; height: 100%; object-fit: cover;}
	.details {
		display: flex;
		flex-direction: column;
		margin-bottom: var(--space-500);
	}

	p.h6 ~ p.body_text { margin-top: var(--space-500); }
	p.body_text ~ p.body_text { margin-top: var(--space-200); }


	@media (min-width: 992px) {
		.card {flex-direction: row;}
	}
</style>
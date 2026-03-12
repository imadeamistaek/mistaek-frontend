<script lang="ts">
	/**
	 * PostCard Component
	 * Displays a single post or case as a card with a cover image and title.
	 *
	 * @prop title - The post or case title
	 * @prop slug - URL slug, used to build the href
	 * @prop cover - Path to the cover image
	 * @prop coverAlt - Alt text for the cover image. Defaults to empty string
	 *                  which marks it as decorative. Pass a description when
	 *                  the image adds context beyond the title.
	 * @prop basePath - The base URL segment e.g. 'blog' or 'cases'
	 * @prop customClass - Optional helper classes
	 */
	export let title: string;
	export let slug: string;
	export let cover: string | null | undefined = null;
	export let coverAlt: string = '';
	export let basePath: 'blog' | 'cases' = 'blog';
	export let date: string | null | undefined = null;
	export let customClass: string | null | undefined = null;

	import Image from '$lib/elements/image.svelte';
	import { formatDate } from '$lib/utils';

	$: href = `/${basePath}/${slug}`;
</script>

<article class={`post-card ${customClass || ''}`}>
	{#if cover}
		<!--
			aria-hidden hides the image wrapper from screen readers entirely.
			The card link below already announces the destination clearly.
			If coverAlt has a value, it adds context. If empty, the image
			is treated as decorative and skipped by screen readers.
		-->
		<Image
			src={cover}
			alt={coverAlt}
			cover
			customClass="-aspect-4-3"
		/>
	{/if}

	<div class="post-card-content">
		<!--
			This link is what screen readers announce.
			The ::after pseudo-element stretches it over the whole card
			so the entire card is clickable, but only this text is read.
		-->
		<p class="h6">
			<a class="card-link" {href}>{title}</a>
		</p>
		{#if date}
			<p class="body_text -small -subtle">{formatDate(date)}</p>
		{/if}
	</div>
</article>

<style>
	.post-card {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--space-300);
	}

	:global(.image-wrapper img) {
		transition-property: transform;
		transition-duration: var(--transition-duration-mid);
		transition-timing-function: var(--transition-timing-function);
	}

	.card-link {
		text-decoration: none;
		transition-property: color;
		transition-duration: var(--transition-duration-mid);
		transition-timing-function: var(--transition-timing-function);
		color: inherit;
	}

	.card-link::after {
		content: '';
		position: absolute;
		inset: 0;
	}

	.post-card:hover .card-link { color: var(--color-brand-accent); }
	.post-card:hover :global(.image-wrapper img) { transform: scale3d(1.05, 1.05, 1); }
</style>
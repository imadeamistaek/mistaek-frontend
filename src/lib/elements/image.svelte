<script lang="ts">
	/**
	 * Image Element
	 * A flexible image primitive that handles aspect ratios,
	 * optional link wrapping, and accessibility consistently
	 * across the whole project.
	 *
	 * @prop src - Path to the image file
	 * @prop alt - Descriptive alt text. Pass empty string "" for decorative images
	 * @prop href - If provided, wraps the image in an anchor tag
	 * @prop type - Link type, same as the link element. Defaults to 'internal'
	 * @prop customClass - Any helper classes e.g. "-aspect-16-9"
	 * @prop loading - Browser loading strategy. Defaults to 'lazy' for performance
	 * @prop cover - If true, image fills its container using object-fit: cover
	 */
	export let src: string;
	export let alt: string;
	export let href: string | null | undefined = null;
	export let type: 'external' | 'internal' = 'internal';
	export let customClass: string | null | undefined = null;
	export let loading: 'lazy' | 'eager' = 'lazy';
	export let cover: boolean = false;
	export let contain: boolean = false;

	$: isExternal = type === 'external';
	$: target = isExternal ? '_blank' : undefined;
	$: rel = isExternal ? 'noopener noreferrer' : undefined;
</script>

{#if href}
	<!--
		When href is provided, wrap the image in a link.
		aria-label uses the alt text so screen readers
		announce what the link leads to.
	-->
	<a
		{href}
		{target}
		{rel}
		class={`image-wrapper ${customClass || ''}`}
		aria-label={alt}
	>
		<img
			{src}
			{alt}
			{loading}
			class:cover
			class:contain
		/>
	</a>
{:else}
	<div class={`image-wrapper ${customClass || ''}`}>
		<img
			{src}
			{alt}
			{loading}
			class:cover
			class:contain
		/>
	</div>
{/if}

<style>
	.image-wrapper {
		display: block;
		width: 100%;
		overflow: hidden;
	}

	img {
		display: block;
		width: 100%;
		height: 100%;
	}

	/**
	 * When cover is true, image fills the wrapper without
	 * distorting. Useful for cards where you want consistent
	 * image sizes regardless of the source dimensions.
	 */
	img.cover {
		object-fit: cover;
	}
	img.contain {
		object-fit: contain;
	}

	/** Remove default anchor underline when image is a link */
	a.image-wrapper {
		text-decoration: none;
	}

	/** Reduced motion: disable any transition on the image */
	@media (prefers-reduced-motion: reduce) {
		img { transition: none; }
	}
</style>
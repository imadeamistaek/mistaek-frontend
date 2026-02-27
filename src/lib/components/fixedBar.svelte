<script lang="ts">
	/**
	 * FixedCTA
	 * Positions slotted content as a fixed element anchored
	 * to the right edge of the body container, respecting
	 * body padding and max-width at all breakpoints.
	 */
	export let customClass: string | null | undefined;
</script>

<div class={`fixed_cta ${customClass || ''}`}>
	<slot />
</div>

<style>
	/**
	 * Mobile: body has var(--space-200) padding on each side.
	 * So right edge of content = var(--space-200) from viewport edge.
	 */
	.fixed_cta {
		position: fixed;
		right: var(--space-200);
        padding: var(--space-1000) 0;
		z-index: var(--zindex-fixed);
	}

	/**
	 * Tablet+: body padding increases to var(--space-1000).
	 * Right edge of content = var(--space-1000) from viewport edge.
	 */
	@media (min-width: 48rem) {
		.fixed_cta {
			right: var(--space-1000);
            padding: var(--space-max) 0;
		}
	}

	/**
	 * Once viewport exceeds the max-width container, the body
	 * stops growing and gets centered. Now we need to calculate
	 * the right offset as: space on each side + body padding.
	 * Formula: ((100vw - max-width-container) / 2) + padding
	 */
	@media (min-width: 96rem) {
		.fixed_cta {
			right: calc(((100% - var(--max-width-container)) / 2));
		}
	}
    /* @media (min-width: 120rem) {
		.fixed_cta {
			right: calc(((100% - var(--max-width-container)) / 2));
		}
	} */
</style>
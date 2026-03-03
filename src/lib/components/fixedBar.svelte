<script lang="ts">
	export let customClass: string | null | undefined;
</script>

<div class={`fixed_cta ${customClass || ''}`}>
	<slot />
</div>

<style>
	.fixed_cta {
		position: fixed;
		right: var(--space-200);
        padding: var(--space-200) 0;
		z-index: var(--zindex-fixed);
	}

	@media (min-width: 48rem) {
		.fixed_cta {
			right: var(--space-1000);
            padding: var(--space-max) 0;
		}
	}
	@media (min-width: 96rem) {
		.fixed_cta {
			right: calc(((100% - var(--max-width-container)) / 2));
			padding: var(--space-max) 0;
		}
	}
    /* @media (min-width: 120rem) {
		.fixed_cta {
			right: calc(((100% - var(--max-width-container)) / 2));
		}
	} */
</style>
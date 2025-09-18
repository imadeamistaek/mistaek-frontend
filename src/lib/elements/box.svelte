<script lang="ts">
	export let as: string = 'div'; // default wrapper
	export let customClass: string | null | undefined;
	export let boxed: boolean = false;
</script>

<svelte:element this={as} class={`box ${customClass} ${boxed ? '-boxed' : ''}`}>
	<slot />
</svelte:element>

<style>
	.box {
		position: relative;
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.-boxed {
		background-color: var(--color-surface);
		border: var(--border-width) solid var(--color-on-surface-accent);
	}

	.-overflow-h { overflow: hidden; }
	
	.-horizontal {flex-direction: row; }
	.-wrap { flex-wrap: wrap; }
	.-horizontal-to-vertical { flex-direction: column; align-items: stretch;}

	/* Small: 480px+ (Large Mobile) */
	@media (min-width: 30rem) {}

	/* Medium: 768px+ (Tablet Portrait) */
	@media (min-width: 48rem) {
		.-horizontal-to-vertical {flex-direction: row;}
	}

	/* Large: 1024px+ (Desktop) */
	@media (min-width: 64rem) {}

	/* Extra Large: 1280px+ (Large Desktop) */
	@media (min-width: 80rem) {}

	/* 2XL: 1536px+ (Ultra Wide) */
	@media (min-width: 96rem) {}

	/* 3XL: 1920px+ (Ultra Wide) */
	@media (min-width: 120rem) {}
</style>
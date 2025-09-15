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
		/* gap: var(--space-100); */
	}
	.-boxed {
		background-color: var(--color-surface);
		border: var(--border-width) solid var(--color-on-surface-accent);
	}

	.-overflow-h { overflow: hidden; }
	
	.-horizontal {flex-direction: column;}
	@media (min-width: 992px) {
		.-horizontal {flex-direction: row;}
	}
</style>
<script lang="ts">
	export let customClass: string | null | undefined;
</script>

<div class={`box ${customClass}`}>
    <slot />
</div>

<style>
	.box {
		display: flex;
		flex-direction: column;
		gap: var(--space-100);
		padding: var(--space-500);
		background-color: var(--color-surface);
		border: var(--border-width) solid var(--color-on-surface-accent);
	}
	.-space-s {gap: var(--space-400);}
	.-space-m {gap: var(--space-600);}
	.-space-l {gap: var(--space-800);}
	.-space-xl {gap: var(--space-1000);}
</style>
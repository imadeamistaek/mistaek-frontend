<script lang="ts">
	export let as: string = 'div'; // default wrapper
	export let icon: string | null | undefined;
	export let label: string;
	export let customClass: string | null | undefined;
	export let boxed: boolean = false;
	export let alt: string = '';
</script>

<svelte:element this={as} class={`icon_item ${boxed ? '-boxed' : ''}`}>
	<i class="icon" aria-hidden="true">
		<img src={`/icons/mi-${icon}.webp`} alt={alt}>
	</i>
	<p class={`body_text ${customClass}`}>{label}</p>
</svelte:element>

<style>
	.icon_item {
		flex: 1;
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: var(--space-200);
	}
	.-boxed {
		justify-content: center;
		padding: var(--space-500);
		background-color: var(--color-surface);
		border: var(--border-width) solid var(--color-on-surface-accent);
	}
</style>
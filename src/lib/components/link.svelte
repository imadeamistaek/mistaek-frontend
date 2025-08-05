<script lang="ts">
	export let label: string;
	export let customClass: string | null | undefined;
	export let icon: string | null | undefined;
	export let url: string | null | undefined;
</script>

<a href={url} class={`${customClass}`} target="_blank" rel="noopener noreferrer" aria-label={label}>
	{#if label}
    <p class="body_text -medium -bold">{label}</p>
	{/if}
	{#if icon}
	<i class="icon" aria-hidden="true">
		<img src={`/icons/mi-${icon}.webp`} alt="arrow-out">
	</i>
	{/if}
</a>

<style>
    a {
		display: inline-flex;
		justify-content: center;
		gap: var(--space-200);
		border-bottom: var(--border-width) solid var(--color-on-surface);
	}
</style>
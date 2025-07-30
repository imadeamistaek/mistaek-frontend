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
	<i class="icon" aria-hidden="true">
		<img src={`/icons/mi-${icon}.webp`} alt="arrow-out">
	</i>
</a>

<style>
    a {border-bottom: var(--border-width) solid var(--color-on-surface);}
    i {display: none;}
</style>
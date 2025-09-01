<script lang="ts">
	export let label: string;
	export let customClass: string | null | undefined;
	export let icon: string | null | undefined;
	export let url: string | null | undefined;
</script>

<a href={url} class={`${customClass}`} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in new tab)`}>
	{#if label}
    <p class="body_text -medium">{label}</p>
	{/if}
	{#if icon}
	<i class="icon -small" aria-hidden="true">
		<img src={`/icons/mi-${icon}.webp`} alt="arrow-out">
	</i>
	{/if}
</a>

<style>
    a {
		position: relative;
		display: inline-flex;
		justify-content: center;
		gap: var(--space-100);
		border-bottom: var(--border-width) solid var(--color-on-surface-darker);
		transition-property: border;
		transition-duration: var(--transition-duration-nitro);
		transition-timing-function: var(--transition-timing-function);
	}
	i {
		position: relative;
		overflow: hidden;
	}

	i img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
		transition-property: transform;
	}

	a:hover {
		border-bottom: var(--border-width) solid var(--color-on-surface);
	}
	a:hover i img {
		animation-name: arrowOutLoop;
		animation-duration: 320ms;
		animation-fill-mode: forwards;
		animation-timing-function: var(--transition-timing-function);
	}

	@keyframes arrowOutLoop {
		0% { transform: translate3d(0px, 0px, 10px); opacity: 1; }
		50% { transform: translate3d(24px, -24px, 10px); opacity: 1; }
		51% { opacity: 0; }
		52% { transform: translate3d(-24px, 24px, 10px); opacity: 0; }
		53% { opacity: 1; }
		100% { transform: translate3d(0px, 0px, 10px); opacity: 1; }
	}
</style>
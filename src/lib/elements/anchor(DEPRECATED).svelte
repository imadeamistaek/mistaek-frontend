<script lang="ts">
	export let label: string;
	export let customClass: string | null | undefined;
	export let icon: string | null | undefined;
	export let anchor: string | null | undefined;
</script>


<a href={anchor} class={`anchor ${customClass}`}>
	<span>{label}</span>
	{#if icon}
	<i class="icon" aria-hidden="true">
		<img src={`/icons/mi-${icon}.webp`} alt="{icon}">
	</i>
	{/if}
</a>

<style>
	.anchor {
		align-items: center;
		padding: var(--space-500) var(--space-500);
		color: var(--color-on-surface);
		cursor: pointer;
		text-align: left;
		user-select: none;
		text-decoration: none;
		outline: none;
		transition-property: background-color, border;
		transition-duration: var(--transition-duration-fast);
		transition-timing-function: var(--transition-timing-function);
	}

	/* ---------------------------------------------------------------------------------------------------- */
	/* ANCHOR Variant */
	/* ---------------------------------------------------------------------------------------------------- */
	.anchor {
		background-color: var(--color-surface);
		border: var(--border-width) solid var(--color-on-surface-accent);
	}
	.anchor:hover {
		background-color: var(--color-surface-darker);
		border: var(--border-width) solid var(--color-surface-darker);
	}
	.anchor:focus-visible {
		outline: 3px solid var(--color-neutral-400);
		box-shadow: 0 0 0 6px var(--color-brand-accent);
	}
	.anchor.-compressed { padding: var(--space-200) var(--space-300);}

	/* ---------------------------------------------------------------------------------------------------- */
	/* anchor Internal Components */
	/* ---------------------------------------------------------------------------------------------------- */
	.anchor span {
		font-family: var(--typeface-family-base);
		font-weight: var(--typeface-weight-bold);
		font-size: var(--typeface-size-body-large);
		line-height: var(--typeface-line-height-base);
		letter-spacing: var(--typeface-tracking-base);
		margin: 0;
		padding: 0;
	}
	.anchor span + i {
		display: none;
	}
	@media (min-width: 992px) {
		.anchor span + i {
			display: flex;
			margin-left: var(--space-100);
		}
	}

	.anchor i {
		display: flex;
		align-items: center;
		justify-content: center;
		width: var(--space-300);
		height: var(--space-300);
	}
	.anchor i img {
		width: 100%;
		height: auto !important;
	}
</style>
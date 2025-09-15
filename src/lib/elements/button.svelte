<script lang="ts">
	import Tag from "./tag.svelte";

	export let buttonLabel: string;
	export let icon: string | null | undefined;
	export let tagLabel: string | undefined;
	export let customClass: string | null | undefined;
</script>

<button class={`${customClass}`} aria-label="{buttonLabel}" on:click>
	<span>{buttonLabel}</span>
	{#if icon}
		<i class="icon" aria-hidden="true">
			<img src={`/icons/mi-${icon}.webp`} alt="{icon}">
		</i>
	{/if}
	{#if tagLabel}
		<Tag customClass="-small -subtle" label="{tagLabel}"/>
	{/if}
</button>

<style>
	/* ---------------------------------------------------------------------------------------------------- */
	/* BUTTON default styles */
	/* ---------------------------------------------------------------------------------------------------- */
	button {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: var(--space-200);
		/* padding: var(--space-300) var(--space-400); */
		color: var(--color-on-surface);
		cursor: pointer;
		text-align: left;
		user-select: none;
		text-decoration: none;
		outline: none;
		transition-property: background-color, border, color;
		transition-duration: var(--transition-duration-fast);
		transition-timing-function: var(--transition-timing-function);
	}
	button span {
		font-family: var(--typeface-family-base);
		font-weight: var(--typeface-weight-bold);
		font-size: var(--typeface-size-body-large);
		line-height: var(--typeface-line-height-base);
		letter-spacing: var(--typeface-tracking-base);
		margin: 0;
		padding: 0;
	}
	button:focus-visible {
		outline: 3px solid var(--color-neutral-400);
		box-shadow: 0 0 0 6px var(--color-brand-accent);
	}

	@media (min-width: 992px) {
		button {flex-direction: row;}
	}

	/* ---------------------------------------------------------------------------------------------------- */
	/* Default Variant */
	/* ---------------------------------------------------------------------------------------------------- */
	.default {
		background-color: var(--color-surface);
		border: var(--border-width) solid var(--color-on-surface-accent);
	}
	.default:hover {
		background-color: var(--color-on-surface);
		border: var(--border-width) solid var(--color-on-surface);
		color: var(--color-surface-darker);
	}

	/* ---------------------------------------------------------------------------------------------------- */
	/* Border Variant */
	/* ---------------------------------------------------------------------------------------------------- */
	.border {
		background-color: transparent;
		border: var(--border-width) solid var(--color-on-surface-accent);
	}
	.border:hover {
		border: var(--border-width) solid var(--color-on-surface);
	}

	/* ---------------------------------------------------------------------------------------------------- */
	/* Subtle Variant */
	/* ---------------------------------------------------------------------------------------------------- */
	.subtle {
		padding: var(--space-100) var(--space-200);
		background-color: transparent;
		border: transparent;
	}
	.subtle span {
		font-size: var(--typeface-size-body-medium);
		font-weight: var(--typeface-weight-regular);
	}
	.subtle:hover {
		background-color: var(--color-surface);
	}

	/* ---------------------------------------------------------------------------------------------------- */
	/* UTILS */
	/* ---------------------------------------------------------------------------------------------------- */
	.-full { flex: 1;}

</style>
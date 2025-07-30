<script lang="ts">
	export let label: string;
	export let customClass: string | null | undefined;
	export let icon: string | null | undefined;
	export let anchor: string | null | undefined;
</script>


<a href={anchor} class={`action ${customClass}`}>
	<span>{label}</span>
	{#if icon}
	<i class="icon" aria-hidden="true">
		<img src={`/icons/mi-${icon}.webp`} alt="{icon}">
	</i>
	{/if}
</a>

<style>
	.action {
		/* width: fit-content; */
		/* display: inline-flex; */
		align-items: center;
		padding: var(--space-500) var(--space-500);
		color: var(--color-on-surface);
		cursor: pointer;
		text-align: left;
		user-select: none;
		text-decoration: none;
		outline: none;
		transition-property: background-color;
		transition-duration: var(--transition-duration-fast);
		transition-timing-function: var(--transition-timing-function);
	}

	/* ---------------------------------------------------------------------------------------------------- */
	/* ANCHOR Variant */
	/* ---------------------------------------------------------------------------------------------------- */
	.action.-anchor {
		background-color: var(--color-surface);
		border: var(--border-width) solid var(--color-on-surface-accent);
	}
	.action.-anchor:hover {
		border: var(--border-width) solid var(--color-on-surface-darker);
	}
	.action.-anchor:focus-visible {
		outline: 3px solid var(--color-neutral-400);
		box-shadow: 0 0 0 6px var(--color-brand-accent);
	}
	.action.-anchor.-compressed { padding: var(--space-200) var(--space-100);}

	/* ---------------------------------------------------------------------------------------------------- */
	/* Action Internal Components */
	/* ---------------------------------------------------------------------------------------------------- */
	.action span {
		font-family: var(--typeface-family-base);
		font-weight: var(--typeface-weight-normal);
		font-size: var(--typeface-size-body-large);
		line-height: var(--typeface-line-height-base);
		letter-spacing: var(--typeface-tracking-base);
		margin: 0;
		padding: 0;
	}
	.action span + i {
		display: none;
	}
	@media (min-width: 992px) {
		.action span + i {
			display: flex;
			margin-left: var(--space-100);
		}
	}

	.action i {
		display: flex;
		align-items: center;
		justify-content: center;
		width: var(--space-300);
		height: var(--space-300);
	}
	.action i img {
		width: 100%;
		height: auto !important;
	}
</style>
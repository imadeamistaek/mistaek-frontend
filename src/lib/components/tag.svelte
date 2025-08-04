<script lang="ts">
	export let label: string;
	export let customClass: string | null | undefined;
</script>

<div class={`tag ${customClass}`}>
	<p class={`body_text ${customClass}`}>{label}</p>
</div>

<style>
	/* ---------------------------------------------------------------------------------------------------- */
	/* TAG */
	/*
	/* All the styles necessary to style the tag component
	/* ---------------------------------------------------------------------------------------------------- */
	.tag {
		width: max-content;
		display: inline-flex;
		align-items: center;
		text-align: center;
		user-select: none;
		text-decoration: none;
		outline: none;
		padding: var(--space-100) var(--space-200);
		color: var(--color-on-surface);
		background-color: transparent;
		border: var(--border-width) solid var(--color-on-surface);
		border-radius: var(--border-radius-max);
	}

	/* ---------------------------------------------------------------------------------------------------- */
	/* SIZE Variants */
	/* ---------------------------------------------------------------------------------------------------- */
	.-small {padding: var(--space-50) var(--space-100);}

	/* ---------------------------------------------------------------------------------------------------- */
	/* VISUAL Variants */
	/* ---------------------------------------------------------------------------------------------------- */
	.tag.-subtle {border: var(--border-width) solid var(--color-on-surface-accent);}
</style>
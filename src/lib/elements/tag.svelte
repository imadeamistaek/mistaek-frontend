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
	.-nano {padding: 2px var(--space-50);}

	/* ---------------------------------------------------------------------------------------------------- */
	/* VISUAL Variants */
	/* ---------------------------------------------------------------------------------------------------- */
	.tag.-subtle {border: var(--border-width) solid var(--color-on-surface-accent);}

	.tag.-progress {
		background-color: var(--color-tag-progress);
		color: var(--color-tag-on-progress);
		border: var(--border-width) solid var(--color-on-surface-opacity-10);
	}
	.tag.-planned {
		background-color: var(--color-tag-planned);
		color: var(--color-tag-on-planned);
		border: var(--border-width) solid var(--color-on-surface-opacity-10);
	}
	.tag.-completed {
		background-color: var(--color-tag-completed);
		color: var(--color-tag-on-completed);
		border: var(--border-width) solid var(--color-on-surface-opacity-10);
	}
	.tag.-validation {
		background-color: var(--color-tag-validation);
		color: var(--color-tag-on-validation);
		border: var(--border-width) solid var(--color-on-surface-opacity-10);
	}
	.tag.-client {
		background-color: var(--color-tag-client);
		color: var(--color-tag-on-client);
		border: var(--border-width) solid var(--color-on-surface-opacity-10);
	}
	.tag.-migration {
		background-color: var(--color-tag-migration);
		color: var(--color-tag-on-migration);
		border: var(--border-width) solid var(--color-on-surface-opacity-10);
	}
</style>
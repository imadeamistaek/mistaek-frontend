<script lang="ts">
	export let customClass: string | null | undefined;
</script>

<span class={`crosshair ${customClass}`}></span>

<style>
	/* ---------------------------------------------------------------------------------------------------- */
	/* CROSSHAIR */
	/*
	/* All the styles necessary to style the Crosshair Pseudo component
	/* ---------------------------------------------------------------------------------------------------- */
	.crosshair {
		position: absolute;
		width: var(--space-400);
		height: var(--space-400);
		z-index: var(--zindex-dropdown);
	}
	.crosshair:before, .crosshair:after {
		position: absolute;
		left: var(--space-200);
		content: ' ';
		height: var(--space-400);
		width: 1px;
		background-color: var(--color-on-surface-darker);
	}
	.crosshair:after {
		transform: rotate(-90deg);
	}

	/* ---------------------------------------------------------------------------------------------------- */
	/* POSITION Variants */
	/* ---------------------------------------------------------------------------------------------------- */
	.crosshair.-tl {
		top: calc(var(--space-50) * -4.1);
		left: calc(var(--space-50) * -4.2);
	}
	.crosshair.-tr {
		top: calc(var(--space-50) * -4.2);
		right: calc(var(--space-50) * -4.1);
	}
	.crosshair.-bl {
		bottom: calc(var(--space-50) * -4.1);
		left: calc(var(--space-50) * -4.2);
	}
	.crosshair.-br {
		bottom: calc(var(--space-50) * -4.2);
		right: calc(var(--space-50) * -4.1);
	}
</style>
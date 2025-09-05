<script lang="ts">
	export let customClass: string | null | undefined;
</script>

<span class={`marker ${customClass}`}></span>

<style>
	/* ---------------------------------------------------------------------------------------------------- */
	/* MARKER */
	/*
	/* All the styles necessary to style the Marker Pseudo component
	/* ---------------------------------------------------------------------------------------------------- */
	.marker {
		position: absolute;
		width: var(--space-400);
		height: var(--space-400);
		z-index: var(--zindex-dropdown);
	}
	.marker:before, .marker:after {
		position: absolute;
		left: var(--space-200);
		content: ' ';
		height: var(--space-400);
		width: 1px;
		background-color: var(--color-on-surface-darker);
	}
	.marker:after {
		transform: rotate(-90deg);
	}

	/* ---------------------------------------------------------------------------------------------------- */
	/* POSITION Variants */
	/* ---------------------------------------------------------------------------------------------------- */
	.marker.-tl {
		top: calc(var(--space-50) * -4.1);
		left: calc(var(--space-50) * -4.2);
	}
	.marker.-tr {
		top: calc(var(--space-50) * -4.2);
		right: calc(var(--space-50) * -4.1);
	}
	.marker.-bl {
		bottom: calc(var(--space-50) * -4.1);
		left: calc(var(--space-50) * -4.2);
	}
	.marker.-br {
		bottom: calc(var(--space-50) * -4.2);
		right: calc(var(--space-50) * -4.1);
	}
</style>
<script lang="ts">
	export let customClass: string | null | undefined;
</script>

<span class={`asterisk ${customClass}`}></span>

<style>
	/* ---------------------------------------------------------------------------------------------------- */
	/* ASTERISK */
	/*
	/* All the styles necessary to style the Asterisk Pseudo component
	/* ---------------------------------------------------------------------------------------------------- */
	.asterisk {
		content: '';
		background: url(/icons/mi-asteriskw.webp);
		display: inline-block;
		height: var(--space-300);
		width: var(--space-300);
		background-size: cover;
		margin: 0 var(--space-100);
	}
    @media (min-width: 992px) {
		.asterisk {
			height: var(--space-900);
			width: var(--space-900);
			margin: 0 var(--space-200);
		}
	}

	/* ---------------------------------------------------------------------------------------------------- */
	/* POSITION Variants */
	/* ---------------------------------------------------------------------------------------------------- */
	.asterisk.-tl {
		top: calc(var(--space-50) * -4.1);
		left: calc(var(--space-50) * -4.2);
	}
	.asterisk.-tr {
		top: calc(var(--space-50) * -4.2);
		right: calc(var(--space-50) * -4.1);
	}
	.asterisk.-bl {
		bottom: calc(var(--space-50) * -4.1);
		left: calc(var(--space-50) * -4.2);
	}
	.asterisk.-br {
		bottom: calc(var(--space-50) * -4.2);
		right: calc(var(--space-50) * -4.1);
	}
</style>
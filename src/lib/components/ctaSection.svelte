<script lang="ts">
    import ButtonPairing from "./buttonPairing.svelte";

	export let customClass: string | null | undefined;
</script>

<div class={`container ${customClass}`}>
	<div class="grid-container">
		<span class="col -hidden-xs"></span>
		<span class="col -hidden-xs"></span>
		<span class="col"></span>
		<span class="col"></span>
		<span class="col"></span>
		<span class="col -hidden-xs"></span>
	</div>
	<div class="content">
		<p class="h3">Need help setting up your Design System?</p>
		<p class="h6">Let’s explore what’s next, together.</p>
		<p class="body_text -medium">Book a quick call and I’ll help you figure out the smartest next move for your team.</p>
		<ButtonPairing />
	</div>
</div>

<style>
	div.container {
		position: relative;
		padding: var(--space-700);
		background-color: var(--color-surface);
		border: var(--border-width) solid var(--color-on-surface-accent);
	}
	@media (min-width: 992px) {
		div.container {padding: var(--space-max);}
	}

	/* ---------------------------------------------------------------------------------------------------- */
	/* CONTENT */
	/* ---------------------------------------------------------------------------------------------------- */
	.content {
		position: relative;
		display: flex;
		justify-self: center;
		align-items: center;
		flex-direction: column;
		padding: 0 var(--space-400);
		text-align: center;
		z-index: var(--zindex-foreground);
	}
	.h3 ~ .h6 {margin-top: var(--space-700);}
	.h6 ~ .body_text {margin-top: var(--space-200); max-width: 540px;}
	:global(.button_pairing) {margin-top: var(--space-700);}

	@media (min-width: 992px) {
		.content {padding: 0 var(--space-max);}
	}

</style>
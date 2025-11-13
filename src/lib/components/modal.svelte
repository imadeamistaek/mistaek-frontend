<script>
	import Button from "../elements/button.svelte";

	let { showModal = $bindable(), header, body, footer } = $props();
	let dialog = $state();
	
	$effect(() => {
		if (showModal) dialog.showModal();
	});
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog bind:this={dialog} onclose={() => (showModal = false)} onclick={(e) => { if (e.target === dialog) dialog.close(); }} >
	<div class="content">
		<div class="slot -header">{@render header?.()}</div>
		<div class="slot -body">{@render body?.()}</div>
		<hr />
		<div class="slot -footer">{@render footer?.()}</div>
		<!-- svelte-ignore a11y_autofocus -->
		<Button variant="subtle" label="" icon="close" on:click={() => dialog.close()}/>
	</div>
</dialog>

<style>
	/* ---------------------------------------------------------------------------------------------------- */
	/* Dialog */
	/*
	/* Dialog container styles, which are used to create a modal dialog
	/* ---------------------------------------------------------------------------------------------------- */
	dialog {
		max-height: calc(100vh - var(--space-300));
		max-width: calc(100vw - var(--space-300));
		width: 100%;
		padding: 0;
		margin: auto;
		color: var(--color-on-surface);
		background-color: var(--color-surface);
		border: var(--border-width) solid var(--color-on-surface-accent);
		transform: translateY(24px);
		animation-duration: 480ms;
		animation-fill-mode: forwards;
		animation-timing-function: var(--transition-timing-function);
	}

	/* Medium: 768px+ (Tablet Portrait) */
	@media (min-width: 48rem) {
		dialog { max-width: 56em; max-height: calc(100vh - var(--space-800)); }
	}

	dialog::backdrop { background: var(--color-surface-opacity-80); }
	
	dialog[open] { animation-name: slideUp; }
	dialog[open]::backdrop { animation-name: fade; }

	/* When modal is open, prevent body scroll */
	:global(body:has(dialog[open])) {
		overflow: hidden;
	}

	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(24px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@keyframes fade {
		from { opacity: 0;}
		to { opacity: 1; }
	}

	/* ---------------------------------------------------------------------------------------------------- */
	/* Dialog Content Slots */
	/*
	/* All the styles necessary to style the slots inside the dialog
	/* ---------------------------------------------------------------------------------------------------- */
	.content {
		max-width: 56em;
		padding: var(--space-200);
	}
		/* Small: 480px+ (Large Mobile) */
	@media (min-width: 30rem) {
		.content { padding: var(--space-300); }
	}

	/* Medium: 768px+ (Tablet Portrait) */
	@media (min-width: 48rem) {
		.content { padding: var(--space-400); }
	}

	/* Large: 1024px+ (Desktop) */
	@media (min-width: 64rem) {
		.content { padding: var(--space-500); }
	}

	/* Extra Large: 1280px+ (Large Desktop) */
	@media (min-width: 80rem) {
		.content { padding: var(--space-600); }
	}

	/* 2XL: 1536px+ (Ultra Wide) */
	@media (min-width: 96rem) {
		.content { padding: var(--space-700); }
	}

	/* 3XL: 1920px+ (Ultra Wide) */
	@media (min-width: 120rem) {
		.content { padding: var(--space-800); }
	}
	.slot {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-100);
		margin-bottom: var(--space-400);
	}
	.slot.-body { gap: var(--space-200); }
	.slot.-footer { margin-bottom: 0; }


	/* ---------------------------------------------------------------------------------------------------- */
	/* CLOSE BUTTON */
	/* ---------------------------------------------------------------------------------------------------- */
	:global(.btn--icon-only) {
		position: absolute !important;
		top: 0;
		right: 0;
	}
</style>
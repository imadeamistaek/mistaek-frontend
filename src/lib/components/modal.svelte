<script>
	import Button from "./button.svelte";

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
		<Button customClass="subtle" buttonLabel="" tagLabel="" icon="close" on:click={() => dialog.close()}/>
	</div>
</dialog>

<style>
	/* ---------------------------------------------------------------------------------------------------- */
	/* Dialog */
	/*
	/* Dialog container styles, which are used to create a modal dialog
	/* ---------------------------------------------------------------------------------------------------- */
	dialog {
		top: auto;
		bottom: var(--space-1000);
		max-width: 48em;
		padding: var(--space-1000);
		color: var(--color-on-surface);
		background-color: var(--color-surface);
		border: var(--border-width) solid var(--color-on-surface-accent);
		transform: translateY(24px);
		animation-duration: 480ms;
		animation-fill-mode: forwards;
		animation-timing-function: var(--transition-timing-function);
	}
	dialog::backdrop { background: var(--color-surface-opacity-80); }
	
	dialog[open] { animation-name: slideUp; }
	dialog[open]::backdrop { animation-name: fade; }

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
	:global(button.subtle) {
		position: absolute;
		top: var(--space-300);
		right: 0;
	}
</style>
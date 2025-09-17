<script lang="ts">
	import Anchor from "../elements/anchor(DEPRECATED).svelte";
	import Link from "../elements/link.svelte";
</script>

<div class="button_pairing">
	<div class="slot -left">
		<slot name="left"></slot>
	</div>
	<p class="body_text -micro -subtle">or</p>
	<div class="slot -right">
		<slot name="right"></slot>
	</div>
</div>

<style>
	.button_pairing {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-400);
	}
	@media (min-width: 992px) {
		.button_pairing {
			flex-direction: row;
			flex-flow: row wrap;
		}
	}
</style>

<script lang="ts">
	import Anchor from "../elements/anchor.svelte";
	import Link from "../elements/link.svelte";
</script>

<div class="button_pairing">
	<div class="slot -left">
		<Link label="Book an intro call" url="https://cal.com/mistaek/15min" type="external" />
	</div>
	<p class="body_text -micro -subtle">or</p>
	<div class="slot -right">
		<Anchor label="Take the Assessment Again" customClass="-anchor -compressed" icon="" anchor="#checklist"/>
	</div>
</div>

<style>
	.button_pairing {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		gap: var(--space-400);
	}
	@media (min-width: 992px) {
		.button_pairing {flex-direction: row;}
	}
</style>

<script lang="ts">
	export let vertical: boolean = false;
	export let gapped: boolean = false;
	export let customClass: string | null | undefined;
</script>

<ul class={`list ${customClass} ${vertical ? '-vertical' : ''} ${gapped ? '-gapped' : ''}`}>
	<slot />
</ul>

<style>
	ul {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 0;
		margin: 0;
		list-style: none;
	}
	.-vertical {flex-direction: column;}
	.-gapped {gap: var(--space-500);}

	@media (min-width: 992px) {
		ul {
			flex-direction: row;
		}
	}
</style>
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
		flex-flow: row wrap;
		flex-direction: column;
		padding: 0;
		margin: 0;
		list-style: none;
	}
	.-vertical {flex-direction: column;}
	.-gapped {gap: var(--space-500);}
	.-inverted-mobile {flex-direction: column-reverse;}
	.-gap-vnone {gap: 0 var(--space-500) !important;}

	@media (min-width: 992px) {
		ul { flex-direction: row; }
		ul:not(.-vertical) :global(> :first-child) { border-right: none !important;}
		ul:not(.-vertical) :global(> :last-child) { border-left: none !important;}

		ul.-vertical :global(> :first-child) { border-bottom: none !important;}
		ul.-vertical :global(> :last-child) { border-top: none !important;}

		.-inverted-mobile {flex-direction: column;}
	}
</style>
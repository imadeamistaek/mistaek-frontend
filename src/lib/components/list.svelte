<script lang="ts">
	export let customClass: string = '';
	export let vertical: boolean = false;
	export let gapped: boolean = false;
	export let ariaLabel: string = '';

		
	let listRef: HTMLUListElement;
	let itemCount = 0;
	
	// Count list items after component mounts
	$: if (listRef) {
		itemCount = listRef.children.length;
	}
	
	// Generate automatic aria-label if none provided
	$: computedAriaLabel = ariaLabel || `List with ${itemCount} item${itemCount !== 1 ? 's' : ''}`;
</script>

<ul 
  bind:this={listRef}
  class={`list ${customClass} ${vertical ? '-vertical' : ''} ${gapped ? '-gapped' : ''}`}
  aria-label={computedAriaLabel}
>
	<slot />
</ul>

<style>
	ul {
		width: 100%;
		display: flex;
		flex-flow: row wrap;
		flex-direction: column;
		/* padding: 0; */
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
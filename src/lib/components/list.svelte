<script lang="ts">
	export let vertical: boolean = false;
	export let gapped: boolean = false;
	export let smallgap: boolean = false;
	export let divided: boolean = false;
	export let hoverable: boolean = false;
	export let grid: boolean = false;
	export let customClass: string | null | undefined;
</script>

<ul class={`list
	${customClass} 
	${vertical ? '-vertical' : ''}
	${gapped ? '-gapped' : ''}
	${smallgap ? '-smallgap' : ''}
	${divided ? '-divided' : ''}
	${hoverable ? '-hoverable' : ''}
	${grid ? '-grid' : ''}
`}>
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

	/**
	 * Grid mode: switches the list from flex to grid,
	 * matching the same column structure as the Grid component.
	 * Use this when you need PostCards or other items to sit
	 * on a column-based layout while keeping valid ul > li semantics.
	 */
	.-grid {
		display: grid;
		grid-template-columns: repeat(6, minmax(0, 1fr));
		/* gap: var(--space-600); */
	}

	.-contained { width: auto; }
	.-vertical {flex-direction: column;}
	.-gapped {gap: var(--space-500);}
	.-smallgap {gap: var(--space-200);}
	.-divided :global(> *) { border-top: 1px solid var(--color-on-surface-accent); }
	.-hoverable :global(> *):hover { 
		background-color: var(--color-on-surface-opacity-1);
		transition-property: background-color;
		transition-duration: var(--transition-duration-mid);
		transition-timing-function: var(--transition-timing-function);
	}
	.-inverted-mobile {flex-direction: column-reverse;}
	.-gap-vnone {gap: 0 var(--space-500) !important;}

	@media (min-width: 992px) {
		ul { flex-direction: row; }
		ul:not(.-vertical) :global(> *:not(:first-child):not(:last-child)) { border-right: none !important; border-left: none !important; }
		ul.-vertical:not(.-divided) :global(> :first-child) { border-bottom: none !important;}
		ul.-vertical:not(.-divided) :global(> :last-child) { border-top: none !important;}
		.-inverted-mobile {flex-direction: column;}
	}
</style>
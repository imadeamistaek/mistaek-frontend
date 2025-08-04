<div class="grid">
	<slot />
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(6,minmax(0,1fr));
		grid-row-gap: var(--space-800);
	}
	@media (min-width: 992px) {
		.grid {
			grid-template-columns: repeat(6,minmax(0,1fr));
		}
	}
</style>
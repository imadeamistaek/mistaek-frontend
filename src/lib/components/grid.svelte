<script lang="ts">
	export let customClass: string | null | undefined;
</script>

<div class={`grid ${customClass}`}>
	<slot />
</div>

<style>
.grid {
	display: grid;
	grid-template-columns: repeat(6,minmax(0,1fr));
	grid-row-gap: var(--space-600);
}

/* Medium: 768px+ (Tablet Portrait) */
@media (min-width: 48rem) {
	.grid {
		grid-template-columns: repeat(6,minmax(0,1fr));
		grid-row-gap: var(--space-800);
	}
}
</style>
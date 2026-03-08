<script lang="ts">
	export let customClass: string | null | undefined = undefined;
</script>

<div class={`grid ${customClass}`}>
	<slot />
</div>

<style>
.grid {
	display: grid;
	grid-template-columns: repeat(6,minmax(0,1fr));
}

/* Medium: 768px+ (Tablet Portrait) */
@media (min-width: 48rem) {
	.grid {
		grid-template-columns: repeat(6,minmax(0,1fr));
	}
}
</style>
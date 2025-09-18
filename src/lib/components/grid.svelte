<script lang="ts">
	export let customClass: string = '';
</script>

<div class={`grid ${customClass}`}>
	<slot />
</div>

<style>
	.grid {
		position: relative;
		flex: 1;
		display: grid;
		grid-template-columns: repeat(6,minmax(0,1fr));
	}

	.grid.-with-bg { background-color: var(--color-surface); }
</style>
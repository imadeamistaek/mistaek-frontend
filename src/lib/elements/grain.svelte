<script lang="ts">
	export let absolute: boolean = false;
	export let fixed: boolean = false;
</script>

<div class={`grain ${absolute ? '-absolute' : ''} ${fixed ? '-fixed' : ''}`}></div>

<style>
	.grain {
		inset: 0;
		pointer-events: none;
		background: url(/grain.webp);
		background-size: 100px 100px;
		background-repeat: repeat;
		opacity: 1;
		background-blend-mode: overlay;
		background-position: left top;
		mix-blend-mode: overlay;
		z-index: var(--zindex-foreground);
	}
	.grain.-absolute { position: absolute; height: 100%;}
	.grain.-fixed { position: fixed; height: 100dvh;}
</style>
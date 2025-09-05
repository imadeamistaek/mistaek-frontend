<script lang="ts">
	export let customClass: string | null | undefined;
	export let animated: boolean = false;
</script>

<img src="/logoDistortedW.webp" alt="" class={`distortedLogo ${customClass} ${animated ? '-animated' : ''}`} />

<style>
    img { position: absolute; }

	.tl{
		top: -32%;
        left: -24%;
	} 
	.tr{
		top: -32%;
		right: -24%;
	}

	.-animated {
		animation-name: slowRotation;
		animation-direction: forwards;
		animation-duration: 60s;
		animation-timing-function: var(--transition-timing-function);
        animation-iteration-count: infinite;
	}

    @keyframes slowRotation {
		0% {
			transform: rotate3d(0, 0, 1, 0deg);
		}
		24% {
			transform: rotate3d(0, 0, 1, 32deg);
		}
		72% {
			transform: rotate3d(0, 0, 1, -32deg);
		}
		100% {
			transform: rotate3d(0, 0, 1, 0deg);
		}
	}
</style>
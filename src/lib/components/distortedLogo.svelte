<script lang="ts">
	export let customClass: string | null | undefined;
	export let animated: boolean = false;
</script>

<enhanced:img src="/static/logoDistortedW.webp" alt="" class={`distortedLogo ${customClass} ${animated ? '-animated' : ''}`} />

<style>
	.tl{
		position: absolute;
		top: -32%;
        left: -24%;
	} 
	.tr{
		position: fixed;
		top: -16%;
		right: 0%;
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
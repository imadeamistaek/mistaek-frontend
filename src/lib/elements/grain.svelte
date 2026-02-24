<div class="grain"></div>

<style>
	.grain {
		position: fixed;
		inset: 0;
		pointer-events: none;
		background: url(/grain.webp);
		background-size: 100px 100px;
		background-repeat: repeat;
		opacity: 1;
		background-blend-mode: overlay;
		background-position: left top;
		mix-blend-mode: overlay;
		height: 100dvh;
		z-index: var(--zindex-foreground);
	}
</style>
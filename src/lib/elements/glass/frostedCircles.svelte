<script lang="ts">
	export let customClass: string | null | undefined;
</script>

<div class={`glass-container ${customClass || ''}`}>
	<div class="circle -brand -alt"></div>
	<div class="circle -niche"></div>
</div>

<style>
/* ---------------------------------------------------------------------------------------------------- */
/* GLASS CONTAINER default styles */
/* ---------------------------------------------------------------------------------------------------- */
.glass-container {
	position: absolute;
	float: left;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
	z-index: 0;
}
.circle {
	position: absolute;
	border-radius: 50%;
}
.circle.-brand {
	animation-name: slowTranslation;
	animation-direction: both;
	animation-duration: 30s;
	animation-timing-function: var(--transition-timing-function);
	animation-iteration-count: infinite;
}
.circle.-niche {
	animation-name: slowTranslation;
	animation-direction: reverse;
	animation-duration: 60s;
	animation-timing-function: var(--transition-timing-function);
	animation-iteration-count: infinite;
}	

/* ---------------------------------------------------------------------------------------------------- */
/* COLOUR styles */
/* ---------------------------------------------------------------------------------------------------- */
.glass-container.-colours .circle {
	filter: blur(64px);
}
.glass-container.-colours .circle.-brand {
	bottom: 30%;
	left: 0;
	width: 1600px;
	height: 1600px;
	background: radial-gradient(var(--color-neutral-100) 50%, var(--color-brand-20) 60%, var(--color-brand-accent) 70%);
}
.glass-container.-colours .circle.-niche {
	bottom: 30%;
	left: 40%;
	width: 1400px;
	height: 1400px;
	background: radial-gradient(var(--color-tag-completed) 32%, var(--color-tag-progress) 60%, var(--color-tag-on-progress) 75%);
}
/* Medium: 768px+ (Tablet Portrait) */
@media (min-width: 48rem) {
	.glass-container.-colours .circle.-brand {
		bottom: 50%;
		width: 3200px;
		height: 3200px;
	}
	.glass-container.-colours .circle.-niche {
		bottom: 50%;
		width: 2000px;
		height: 2000px;
	}
}

/* ---------------------------------------------------------------------------------------------------- */
/* BORDER styles */
/* ---------------------------------------------------------------------------------------------------- */
.glass-container.-border .circle.-brand {
	bottom: 30%;
	left: 0;
	width: 1600px;
	height: 1600px;
	border: var(--border-width) solid var(--color-on-surface-accent);
}
.glass-container.-border .circle.-niche {
	bottom: 30%;
	left: 40%;
	width: 1400px;
	height: 1400px;
	border: var(--border-width) solid var(--color-on-surface-accent);
}
/* Medium: 768px+ (Tablet Portrait) */
@media (min-width: 48rem) {
	.glass-container.-border .circle.-brand {
		bottom: 50%;
		width: 3200px;
		height: 3200px;
	}
	.glass-container.-border .circle.-niche {
		bottom: 50%;
		width: 2000px;
		height: 2000px;
	}
}

/* ---------------------------------------------------------------------------------------------------- */
/* ANIMATION */
/* ---------------------------------------------------------------------------------------------------- */
@keyframes slowTranslation {
	0%{
		transform: rotate(0deg) translate(-80px) rotate(0deg);
	}
	100%{
		transform: rotate(360deg) translate(-80px) rotate(-360deg);
	}
}
</style>
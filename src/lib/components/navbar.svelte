<script lang="ts">
	/**
	 * Navbar
	 * Fixed navigation bar that transitions from transparent to filled on scroll.
	 * Adds padding and reveals the container background when user scrolls down.
	 *
	 * @prop full - If true, navbar container spans full width (col-6), otherwise centered (col-4)
	 */
	export let full: boolean = false;

	import { onMount } from 'svelte';
	import LinkBoxed from '$lib/elements/linkBoxed.svelte';
	import Logo from '$lib/elements/logo.svelte';

	let scrolled = false;

	onMount(() => {
		/**
		 * Tracks scroll position and toggles the scrolled state.
		 * Threshold is 20px to avoid triggering on tiny accidental scrolls.
		 */
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		/** Cleanup listener when component is destroyed */
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav class="navbar" class:scrolled>
	<div class={`navbar-container ${full ? 'col-6 col-start-1' : 'col-4 col-start-2'}`}>
		<div class="logo col-2 col-start-1 md:col-1">
			<Logo small={true} />
		</div>
		<div class="slot col-4 col-start-3 md:col-3 md:col-start-4 lg:col-2 lg:col-start-5">
			<LinkBoxed customClass="-dflex" label="Get started" url="https://cal.com/mistaek/15min" type="external" note="Schedule an intro call" />
		</div>
		<div class="blobs">
			<div class="circle -brand -alt"></div>
			<div class="circle -niche"></div>
		</div>
	</div>
</nav>

<style>
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		max-width: var(--max-width-container);
		padding: 0 var(--space-200);
		margin: 0 auto;
		z-index: var(--zindex-sticky);
	}

	.navbar-container {
		position: relative;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		align-items: center;
		overflow: hidden;

		/** Container starts transparent with no border */
		background-color: transparent;
		border-bottom: var(--border-width) solid transparent;

		transition-property: background-color, border-color, padding;
		transition-duration: var(--transition-duration-mid);
		transition-timing-function: var(--transition-timing-function);
	}

	.navbar-container .logo { text-align: center; }

	/** Scrolled state: reveal container background and border */
	.navbar.scrolled .navbar-container {
		background-color: var(--color-surface);
		border-bottom: var(--border-width) solid var(--color-on-surface-accent);
	}

	:global(.-dflex) { display: flex !important; }

	@media (min-width: 48rem) {
		.navbar { padding: 0 var(--space-1000); }
		/* .navbar.scrolled .navbar-container { padding: var(--space-200) var(--space-1000); } */
	}

/* ---------------------------------------------------------------------------------------------------- */
/* ANIMATION */
/* ---------------------------------------------------------------------------------------------------- */
	.blobs {
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
		opacity: 0;
		user-select: none;
		pointer-events: none;
		transition-property: opacity;
		transition-duration: var(--transition-duration-mid);
		transition-timing-function: var(--transition-timing-function);
	}

	.navbar.scrolled .blobs { opacity: 1; }

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

	.blobs .circle {
		filter: blur(16px);
	}
	.blobs .circle.-brand {
		bottom: 100%;
		left: 0;
		width: 500px;
		height: 50px;
		background: radial-gradient(var(--color-neutral-100) 50%, var(--color-brand-20) 60%, var(--color-brand-accent) 70%);
	}
	.blobs .circle.-niche {
		bottom: 100%;
		left: 40%;
		width: 600px;
		height: 60px;
		background: radial-gradient(var(--color-tag-completed) 32%, var(--color-tag-progress) 60%, var(--color-tag-on-progress) 75%);
	}
	/* Medium: 768px+ (Tablet Portrait) */
	@media (min-width: 48rem) {
		.blobs .circle.-brand {
			bottom: 100%;
			width: 100%;
			height: 50px;
		}
		.blobs .circle.-niche {
			bottom: 100%;
			width: 100%;
			height: 20px;
		}
	}

	@keyframes slowTranslation {
		0%{
			transform: rotate(0deg) translate(-8px) rotate(0deg);
		}
		100%{
			transform: rotate(360deg) translate(-8px) rotate(-360deg);
		}
	}
</style>
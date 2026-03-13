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
	import NewLink from '$lib/elements/newlink.svelte';
	import Logo from '$lib/elements/logo.svelte';

	let scrolled = false;
	let menuOpen = false;

	/**
	 * Nav links. Add more here as the site grows.
	 * These show in the desktop navbar and the mobile expanded menu.
	 */
	const navLinks = [
		{ label: 'Home', url: '/' },
		{ label: 'Work', url: '/cases' },
		{ label: 'Words', url: '/blog' }
	];

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

	function toggleMenu() {
		menuOpen = !menuOpen;
		document.body.style.overflow = menuOpen ? 'hidden' : '';
	}

	function closeMenu() {
		menuOpen = false;
		document.body.style.overflow = '';
	}

</script>

<nav class="navbar" class:scrolled class:menu-open={menuOpen} aria-label="Main navigation">
	<div class={`navbar-container ${full ? 'col-6 col-start-1' : 'col-4 col-start-2'}`}>
		<div class="slot -left col-2 col-start-1">
			<Logo small={true} />
		</div>
		<div class="slot -middle col-2 col-start-3 -items-vcenter">
			<NewLink showIcon={false} boxed variant="ghost" label="Cases" url="/cases" type="internal" />
			<NewLink showIcon={false} boxed variant="ghost" label="Words" url="/blog" type="internal" />
		</div>
		<div class="slot -right col-2 col-start-5 -items-vend">
			<NewLink boxed variant="subtle" label="Schedule an intro call" url="https://cal.com/mistaek/15min" type="external" customClass="-full" />
			
			<!--
				Hamburger: visible on mobile only, hidden on desktop.
				aria-expanded tells screen readers the menu state.
				aria-controls points to the mobile menu id.
			-->
			<button
				class="hamburger -hidden-l"
				aria-label={menuOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={menuOpen}
				aria-controls="mobile-menu"
				on:click={toggleMenu}
			>
				<span class="hamburger-line" class:open={menuOpen}></span>
				<span class="hamburger-line" class:open={menuOpen}></span>
			</button>

		</div>
	</div>
	<!--
		Mobile menu: expands below the navbar bar.
		inert when closed so keyboard users can't tab into hidden links.
		Lives inside <nav> so it sits above everything at the same z-index.
	-->
	<div
		id="mobile-menu"
		class="mobile-menu"
		class:open={menuOpen}
		inert={!menuOpen ? true : undefined}
		aria-hidden={!menuOpen}
	>
		{#each navLinks as link}
			<NewLink showIcon={false} variant="ghost" label={link.label} url={link.url} type="internal" on:click={closeMenu} />
		{/each}
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

	.navbar-container .slot { display: flex; }
	.navbar-container .slot.-middle { align-self: stretch; }
	.navbar-container .slot.-left {
		text-align: center;
		transition-property: padding;
		transition-duration: var(--transition-duration-mid);
		transition-timing-function: var(--transition-timing-function);
	}

	/** Scrolled state: reveal container background and border */
	.navbar.scrolled .navbar-container {
		background-color: var(--color-surface);
		border-bottom: var(--border-width) solid var(--color-on-surface-accent);
	}

	@media (min-width: 48rem) {
		.navbar { padding: 0 var(--space-1000); }
		.navbar-container .slot.-left { text-align: left; }
		.navbar.scrolled .navbar-container .slot.-left { padding: 0 var(--space-400); }
	}


	/* ------------------------------------------------------------------ */
	/* HAMBURGER BUTTON */
	/* ------------------------------------------------------------------ */

	.hamburger {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--space-100);
		width: 40px;
		height: 40px;
		padding: var(--space-100);
		background: none;
		border: var(--border-width) solid var(--color-on-surface-accent);
		cursor: pointer;
		flex-shrink: 0;
	}

	.hamburger-line {
		display: block;
		width: 100%;
		height: 1px;
		background-color: var(--color-on-surface);
		transform-origin: center;
		transition-property: transform, opacity;
		transition-duration: var(--transition-duration-mid);
		transition-timing-function: var(--transition-timing-function);
	}

	.hamburger-line:nth-child(1).open {
		transform: translate3d(0px, 4px, 0) rotate(45deg);
	}
	.hamburger-line:nth-child(2).open {
		transform: translate3d(0px, -4px, 0) rotate(-45deg);
	}

	/* ------------------------------------------------------------------ */
	/* MOBILE MENU */
	/* ------------------------------------------------------------------ */

	.mobile-menu {
		/**
		 * Expands downward from the navbar bar.
		 * max-height animates from 0 to a large value,
		 * which is the cleanest way to animate height from auto.
		 */
		max-height: 0;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-400);
		background-color: var(--color-surface);
		transition-property: max-height, border-color;
		transition-duration: var(--transition-duration-mid);
		transition-timing-function: var(--transition-timing-function);
	}

	.mobile-menu.open {
		max-height: 100vh;
		border-bottom: var(--border-width) solid var(--color-on-surface-accent);
	}

	/* ------------------------------------------------------------------ */
	/* REDUCED MOTION */
	/* ------------------------------------------------------------------ */

	@media (prefers-reduced-motion: reduce) {
		.hamburger-line,
		.mobile-menu,
		.mobile-nav-link,
		.nav-link {
			transition: none;
		}
	}

</style>
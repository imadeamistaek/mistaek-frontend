<script lang="ts">
	/**
	 * Navbar
	 * Fixed navigation bar with scroll transition and mobile overlay menu.
	 * Two lines hamburger animates to X on open.
	 *
	 * @prop full - spans full width when true
	 */
	export let full: boolean = false;

	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Newlink from '$lib/elements/newlink.svelte';
	import Logo from '$lib/elements/logo.svelte';

	let scrolled = false;
	let menuOpen = false;

	const navLinks = [
		{ label: 'Home', url: '/' },
		{ label: 'Work', url: '/cases' },
	];

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}

	/**
	 * Closes the menu, waits for the close animation to finish,
	 * then navigates. Prevents the jarring state where the menu
	 * stays open while the page has already changed underneath it.
	 */
	async function handleNavClick(url: string) {
		goto(url);
		await new Promise(resolve => setTimeout(resolve, 150));
		closeMenu();
	}
</script>

<nav
	class="navbar"
	class:scrolled
	class:menu-open={menuOpen}
	aria-label="Main navigation"
>
	<div class={`navbar-container ${full ? 'col-6 col-start-1' : 'col-4 col-start-2'}`}>

		<div class="slot -left col-1 col-start-1">
			<Logo small={true} />
		</div>

		<!--
			Desktop nav links: hidden on mobile via CSS.
			Visible from tablet up.
		-->
		<div class="slot -middle col-1 col-start-2">
			<Newlink showIcon={false} boxed variant="ghost" label="Cases" url="/cases" type="internal" />
		</div>

		<div class="slot -right col-4 col-start-3 md:col-2 md:col-start-5">
			<Newlink
				boxed
				variant="subtle"
				label="Book a call"
				url="https://cal.com/mistaek/15min"
				type="external"
				customClass="-full"
			/>

			<button
				class="hamburger"
				aria-label={menuOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={menuOpen}
				aria-controls="mobile-menu"
				on:click={toggleMenu}
			>
				<!--
					Single span, two lines via ::before and ::after.
					On open: both lines rotate to form an X.
					Transition is staggered: position first, then rotation.
				-->
				<span class="hamburger-line" class:open={menuOpen}></span>
			</button>
		</div>
	</div>

	<!--
		Mobile menu overlay.
		Slides down from above using translateY(-100vh) -> translateY(0).
		z-index: -1 keeps it behind the navbar bar so the bar stays clickable.
		Links fade and slide up individually after the panel opens.
	-->
	<div
		id="mobile-menu"
		class="mobile-menu"
		class:open={menuOpen}
		inert={!menuOpen ? true : undefined}
		aria-hidden={!menuOpen}
		on:wheel|preventDefault|nonpassive
		on:touchmove|preventDefault|nonpassive
	>
		<ul class="mobile-nav">
			{#each navLinks as link, i}
				<!--
					Each link is wrapped in a li with a custom property for
					stagger delay. The delay is based on the item index so
					they appear one after another once the panel is open.
				-->
				<li class="mobile-nav-item" style={`--i: ${i}`}>
					<!--
						Using a button instead of a link so we can intercept
						the click, close the menu, wait for the animation,
						then navigate programmatically via goto.
					-->
					<button
						class="mobile-nav-button"
						on:click={() => handleNavClick(link.url)}
					>
						{link.label}
					</button>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	/* ------------------------------------------------------------------ */
	/* NAVBAR */
	/* ------------------------------------------------------------------ */

	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		max-width: var(--max-width-container);
		margin: 0 auto;
		z-index: var(--zindex-fixed);
	}

	.navbar-container {
		position: relative;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		align-items: center;
		padding: 0 var(--space-200);
		background-color: transparent;
		border-bottom: var(--border-width) solid transparent;
		transition-property: background-color, border-color;
		transition-duration: var(--transition-duration-mid);
		transition-timing-function: var(--transition-timing-function);
		/**
		 * Creates a new stacking context so the mobile menu's z-index: -1
		 * is relative to the navbar-container, not the whole page.
		 */
		isolation: isolate;
	}

	.navbar.scrolled .navbar-container,
	.navbar.menu-open .navbar-container {
		background-color: var(--color-surface);
		border-bottom: var(--border-width) solid var(--color-on-surface-accent);
	}

	/* ------------------------------------------------------------------ */
	/* SLOTS */
	/* ------------------------------------------------------------------ */

	.slot {
		display: flex;
		align-items: center;
	}

	.slot.-left {
		justify-content: flex-start;
		transition-property: padding;
		transition-duration: var(--transition-duration-mid);
		transition-timing-function: var(--transition-timing-function);
	}

	.slot.-middle {
		align-self: stretch;
		align-items: stretch;
		justify-content: center;
		gap: 0;

		/** Hidden on mobile, shown from tablet up */
		display: none;
	}

	.slot.-right {
		justify-content: flex-end;
		gap: var(--space-200);
	}

	/* Medium: 768px+ (Tablet Portrait) */
	@media (min-width: 48rem) {
		.navbar-container { padding: 0 var(--space-1000); }
		.slot.-left { text-align: left; }
		.slot.-middle { display: flex; }
	}

	@media (min-width: 96rem) {
		.navbar-container { padding: 0; }
	}

	/* ------------------------------------------------------------------ */
	/* HAMBURGER */
	/* ------------------------------------------------------------------ */

	.hamburger {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		padding: var(--space-100);
		background-color: var(--color-on-surface-accent);
		border-radius: var(--space-50);
		border: var(--border-width) solid var(--color-on-surface-accent);
		cursor: pointer;
		flex-shrink: 0;
	}

	/* Medium: 768px+ (Tablet Portrait) */
	@media (min-width: 48rem) {
		.hamburger { display: none; }
	}

	.hamburger-line {
		position: relative;
		display: block;
		width: 18px;
		height: 18px;
	}

	/**
	 * Two lines via pseudo-elements.
	 * Default state: lines are separated (top and bottom).
	 * Open state: lines converge to center and rotate to form X.
	 * Transition is staggered: position moves first, then rotation.
	 */
	.hamburger-line::before,
	.hamburger-line::after {
		content: '';
		position: absolute;
		left: 0;
		display: block;
		width: 100%;
		height: 1px;
		background-color: var(--color-on-surface);
		transform-origin: center;
	}

	.hamburger-line::before {
		top: 4px;
		transition:
			top var(--transition-duration-fast) var(--transition-timing-function) var(--transition-duration-fast),
			transform var(--transition-duration-fast) var(--transition-timing-function) 0ms;
	}

	.hamburger-line::after {
		bottom: 4px;
		transition:
			bottom var(--transition-duration-fast) var(--transition-timing-function) var(--transition-duration-fast),
			transform var(--transition-duration-fast) var(--transition-timing-function) 0ms;
	}

	.hamburger-line.open::before {
		top: 50%;
		transform: translateY(-50%) rotate(45deg);
		transition:
			top var(--transition-duration-fast) var(--transition-timing-function) 0ms,
			transform var(--transition-duration-fast) var(--transition-timing-function) var(--transition-duration-fast);
	}

	.hamburger-line.open::after {
		bottom: 50%;
		transform: translateY(50%) rotate(-45deg);
		transition:
			bottom var(--transition-duration-fast) var(--transition-timing-function) 0ms,
			transform var(--transition-duration-fast) var(--transition-timing-function) var(--transition-duration-fast);
	}

	/* ------------------------------------------------------------------ */
	/* MOBILE MENU */
	/* ------------------------------------------------------------------ */

	.mobile-menu {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		padding: 0 var(--space-200);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		background-color: var(--color-surface);
		z-index: -1;
		transform: translateY(-100%);
		transition-property: transform;
		transition-duration: var(--transition-duration-mid);
		transition-timing-function: var(--transition-timing-function);
	}

	.mobile-menu.open {
		transform: translateY(0);
	}

	@media (min-width: 48rem) {
		.mobile-menu { padding: 0 var(--space-1000); }
	}

	/* ------------------------------------------------------------------ */
	/* MOBILE NAV LINKS */
	/* ------------------------------------------------------------------ */

	.mobile-nav {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-400);
	}

	.mobile-nav-item {
		opacity: 0;
		transform: translateY(8px);
		transition-property: opacity, transform;
		transition-duration: var(--transition-duration-mid);
		transition-timing-function: var(--transition-timing-function);
		transition-delay: 0ms;
	}

	.mobile-menu.open .mobile-nav-item {
		opacity: 1;
		transform: translateY(0);
		transition-delay: var(--transition-duration-mid);
		/* transition-delay: calc(var(--transition-duration-fast) + (var(--i) * 60ms)); */
	}

	/**
	 * Styled to look like a nav link but uses button semantics
	 * so we can intercept the click and control navigation timing.
	 */
	.mobile-nav-button {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		color: var(--color-on-surface);
		font-family: var(--typeface-family-base);
		font-size: var(--font-size-600);
		font-weight: bold;
		text-align: left;
		transition-property: color;
		transition-duration: var(--transition-duration-nitro);
		transition-timing-function: var(--transition-timing-function);
	}

	.mobile-nav-button:hover {
		color: var(--color-brand-accent);
	}

	/* ------------------------------------------------------------------ */
	/* REDUCED MOTION */
	/* ------------------------------------------------------------------ */

	@media (prefers-reduced-motion: reduce) {
		.hamburger-line::before,
		.hamburger-line::after,
		.mobile-menu,
		.mobile-nav-item,
		.mobile-nav-button {
			transition: none;
		}
	}
</style>
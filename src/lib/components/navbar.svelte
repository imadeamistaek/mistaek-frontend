<script lang="ts">
	import Link from '$lib/components/link.svelte';
</script>

<nav class="navbar">
	<div class="navbar-container col-4 col-start-2">
		<div class="slot -left">
			<a href="/" aria-label="Homepage">
				<picture>
					<source media="(min-width:650px)" srcset="/logotype_w.webp">
					<source media="(min-width:320px)" srcset="/logo.webp">
					<img src="/logotype_w.webp" alt="Website Logo" />
				</picture>
			</a>
		</div>
		<div class="slot -right">
			<Link url="https://cal.com/mistaek/15min" customClass="" label="Book an intro call" icon="arrow-out" />
		</div>
	</div>
</nav>

<style>
/* ---------------------------------------------------------------------------------------------------- */
/* Navigation Bar */
/*
/* This is everything needed to style the Navigation Bar, present at the top of all the pages
/* ---------------------------------------------------------------------------------------------------- */
.navbar {
	position: sticky;
	top: 0;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-row-gap: var(--space-800);
	z-index: var(--zindex-sticky);
}
.navbar-container {
	display: flex;
	justify-content: space-between;
	padding: var(--space-300) var(--space-500);
	background-color: var(--color-surface);
	border: var(--border-width) solid var(--color-on-surface-accent);
}

@media (min-width: 992px) {
	.navbar {
		grid-template-columns: repeat(6, 1fr);
	}
}


/* ---------------------------------------------------------------------------------------------------- */
/* Navigation Container Link */
/*
/* All the styles necessary to style the link inside the navigation container
/* ---------------------------------------------------------------------------------------------------- */
.navbar a picture img {
	height: var(--space-500);
}

</style>
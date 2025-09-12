<script lang="ts">
	export let full: boolean = false;
	import Link from '$lib/elements/link.svelte';
    import Logo from '$lib/elements/logo.svelte';
</script>

<nav class="navbar">
	<div class={`navbar-container ${full ? 'col-6 col-start-1' : 'col-4 col-start-2'}`}>
		<div class="slot -left">
			<Logo small={true} />
		</div>
		<div class="slot -right">
			<Link label="Book an intro call" url="https://cal.com/mistaek/15min" type="external" />
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

</style>
<script lang="ts">
	export let small: boolean = false;
</script>

<a href="/" aria-label="Homepage" class={`${small ? '-small' : ''}`}>
	<picture>
		<source media="(min-width:650px)" srcset="/brand/logotype_w.webp">
		<source media="(min-width:320px)" srcset="/brand/logo.webp">
		<img src="/brand/logotype_w.webp" alt="Website Logo" />
	</picture>
</a>

<style>
	a {
		text-decoration: none;
	}
	img {
		width: 100%;
		height: auto;
	}

	.-small img {
		height: var(--space-500);
		width: auto;
	}
</style>
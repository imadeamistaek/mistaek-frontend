<script lang="ts">
	export let small: boolean = false;
</script>

<a 
	href="/" 
	aria-label="Mistaek homepage" 
	class={`logo-link ${small ? '-small' : ''}`}
>
	<picture>
		<source media="(min-width:650px)" srcset="/brand/logotype_w.webp">
		<source media="(min-width:320px)" srcset="/brand/logo.webp">
		<img src="/brand/logotype_w.webp" alt="Mistaek" />
	</picture>
</a>

<style>
	.logo-link {
		text-decoration: none;
		display: inline-block;
		border-radius: var(--space-50);
		transition: opacity var(--transition-duration-nitro, 0.2s) ease;
	}
	
	/* Subtle hover effect */
	.logo-link:hover { opacity: 0.8; }

	img {
		width: 100%;
		height: auto;
		display: block; /* Removes image baseline gap */
	}

	.-small img {
		height: var(--space-500);
		width: auto;
	}
</style>
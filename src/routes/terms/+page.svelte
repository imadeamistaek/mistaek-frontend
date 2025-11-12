<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import BackgroundGrid from "$lib/elements/backgroundGrid.svelte";
	import Logo from '$lib/elements/logo.svelte';
	import Grid from "$lib/components/grid.svelte";
	import Box from '$lib/elements/box.svelte';
	import List from '$lib/components/list.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<svelte:head>
<title>Terms and Conditions | Mistaek</title>
<meta name="description" content="Terms and Conditions for Mistaek Studio" />
</svelte:head>

<BackgroundGrid />

<section class="container privacy-container" aria-labelledby="privacy_title">
	<Logo small />
	
	<Grid customClass="-cols-6 -gap-vm -items-hend">
		<Box customClass="col-6 col-start-1 md:col-3 md:col-start-1 -padding-vxl -gap-vs">
			<h1 id="privacy_title">Terms and Conditions</h1>
		</Box>
	</Grid>
	<Grid customClass="-cols-6 -gap-vm -items-hstart">
		<aside class="col-6 col-start-1 md:col-1 md:col-start-1 lg:col-2 lg:col-start-1 -padding-vxl -gap-vs">
			<p class="body_text -large -subtle -contained-xl">Last updated:</p>
			<p class="body_text -large -contained-xl">September 23, 2025</p>
		</aside>
		<main class="col-6 col-start-1 md:col-5 md:col-start-1 lg:col-4 lg:col-start-3 -padding-vxl -gap-vs">
			
			<!-- INTRODUCTION -->
			<section class="-padding-vl -gap-vs">
				<p class="body_text -large">We are <strong>Mistaek Studio Lda.</strong> ("<strong>Company</strong>," "<strong>we</strong>," "<strong>us</strong>," and "<strong>our</strong>").</p>
				<p class="body_text -large">We operate, as well as any other related products and services that refer or link to these legal terms (the "<strong>Legal Terms</strong>") (collectively, the "<strong>Services</strong>").</p>
			</section>
			
		</main>
	</Grid>
	
</section>

<Footer/>

<style>
	section {
		display: flex;
		flex-direction: column;
	}

	a {
		padding: 0 !important;
		text-decoration: underline !important;
	}

	:global(ul.list.-with-bullets) {
		width: auto !important;
		list-style: disc !important;
		padding-left: var(--space-600) !important;
	}
	:global(ul li) {
		display: list-item !important;
	}
</style>
<!-- src/routes/+error.svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import BackgroundGrid from "$lib/elements/backgroundGrid.svelte";
	import Grid from "$lib/components/grid.svelte";
	import Box from '$lib/elements/box.svelte';
	import Link from '$lib/elements/link.svelte';
    import Logo from '$lib/elements/logo.svelte';
	import List from '$lib/components/list.svelte';
	
	// Use the page store for status since props aren't being passed correctly
	$: is404 = $page.status === 404;
</script>

<svelte:head>
<title>{is404 ? 'Page Not Found' : 'Something went wrong'} | Mistaek</title>
<meta name="description" content="The page you're looking for doesn't exist. Let's get you back on track." />
</svelte:head>

<BackgroundGrid />

<section class="container error-container" aria-labelledby="error_title">
	{#if is404}
	<!-- 404 Specific Content -->
	<Logo small />
	<Grid customClass="-cols-6 -gap-vm -items-hend">
		<Box customClass="col-6 col-start-1 md:col-3 md:col-start-1 -padding-vxl -gap-vs">
			<h1 id="error_title">We couldn't find that page</h1>
			<div class="pairing col-3 col-start-1">
				<p class="body_text -large -contained-xl">Looks like this page got lost in the design process.</p>
				<p class="body_text -large -subtle -contained-xl">Don't worry. Even the best designs need iteration.</p>
			</div>
		</Box>
		<Box customClass="col-6 col-start-1 md:col-2 md:col-start-5 -padding-xl" boxed>
			<h2 class="h6">What you might be looking for:</h2>
			<List customClass="col-3 col-start-4 -gap-vs" vertical>
				<li><Link customClass="-small -full" label="Homepage" url="/" type="internal" /></li>
				<li><Link customClass="-small -full" label="Follow the updates" url="https://www.linkedin.com/company/mistaek-studio/" type="external" /></li>
				<li><Link customClass="-small -full" label="hello@mistaek.com" url="mailto:hello@mistaek.com" type="external" icon="send" /></li>
			</List>
		</Box>
	</Grid>
	{:else}
	<!-- General Error Content -->
	<Logo small />
	<Grid customClass="-cols-6 -gap-vm">
		<div class="pairing col-3 col-start-1 -spaced">
			<h1 id="error_title">Something went wrong</h1>
			<p class="body_text -large -contained-xl">We're experiencing a technical issue. Our team has been notified.</p>
			<li><Link customClass="-small -full" label="Go to Homepage" url="/" type="internal" /></li>
		</div>
	</Grid>
	{/if}
</section>

<style>
	section {
		float: left;
		height: calc(100% - (var(--space-max) * 2));
		padding: var(--space-max) 0;
		justify-content: space-between;
	}
	:global(.error-container .box):first-child {
		margin-top: var(--space-max);
	}
</style>
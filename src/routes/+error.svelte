<!-- src/routes/+error.svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Grid from "$lib/components/grid.svelte";
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

<section class="error-container -flex">
	{#if is404}
		<!-- 404 Specific Content -->
		<Logo small />
		<Grid customClass="col-6 col-start-1 -padding-none">
			<div class="pairing col-3 col-start-1 -spaced">
				<h1>We couldn't find that page</h1>
				<div class="pairing col-3 col-start-1">
					<p class="body_text -large -contained-xl">Looks like this page got lost in the design process.</p>
					<p class="body_text -large -subtle -contained-xl">Don't worry. Even the best designs need iteration.</p>
				</div>
			</div>
			<div class="pairing col-1 col-start-6 -spaced">
				<h2 class="h6">What you might be looking for:</h2>
				<List customClass="col-3 col-start-4 -gap-vnone" gapped>
					<li><Link customClass="-small -full" label="Homepage" url="/" type="internal" /></li>
					<li><Link customClass="-small -full" label="Follow the updates" url="https://www.linkedin.com/company/mistaek-studio/" type="external" /></li>
					<li><Link customClass="-small -full" label="hello@mistaek.com" url="mailto:hello@mistaek.com" type="external" icon="send" /></li>
				</List>
			</div>
		</Grid>
	{:else}
		<!-- General Error Content -->
		<Logo small />
		<Grid customClass="col-6 col-start-1 -padding-none">
			<div class="pairing col-3 col-start-1 -spaced">
				<h1>Something went wrong</h1>
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
</style>
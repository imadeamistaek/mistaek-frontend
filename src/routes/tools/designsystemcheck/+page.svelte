<script lang="ts">
	import Header from '$lib/sections/magnet/header.svelte';
	import About from '$lib/sections/magnet/about.svelte';
    import Checklist from '$lib/sections/magnet/checklist.svelte';
    import Fit from '$lib/sections/magnet/fit.svelte';
    import Creator from '$lib/sections/magnet/creator.svelte';
    import Footer from '$lib/sections/magnet/footer.svelte';
    import Industry from '$lib/sections/magnet/industry.svelte';

    import type { ActionData } from './$types';
    export let form: ActionData; // SvelteKit provides this automatically
</script>

<Header />
<About />
<Checklist {form} />
<Industry />
<Fit />
<Creator />
<Footer />
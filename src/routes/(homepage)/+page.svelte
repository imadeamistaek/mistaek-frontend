<script>
    import Hero from '$lib/sections/homepage/hero.svelte';
    import Problem from '$lib/sections/homepage/problem.svelte';
    import Solution from '$lib/sections/homepage/solution.svelte';
    import Whoisfor from '$lib/sections/homepage/whoisfor.svelte';
    import HowWeWork from '$lib/sections/homepage/howwework.svelte';
    import Comparison from '$lib/sections/homepage/comparison.svelte';
    import Pricing from '$lib/sections/homepage/pricing.svelte';
    import FeaturedItemsGrid from '$lib/sections/general/featuredItemsGrid.svelte';
    import Testimonials from '$lib/sections/homepage/testimonials.svelte';
    import Cta from '$lib/sections/general/cta.svelte';

	let { data } = $props();
</script>

<Hero />
<Problem />
<Whoisfor />
<HowWeWork />
<Solution />
<Comparison />
<Pricing />
<FeaturedItemsGrid
	items={data.cases}
	basePath="cases"
	tag="Cases"
	title="Work"
	linkLabel="View all cases"
	linkUrl="/cases"
/>
<Testimonials />
<Cta />
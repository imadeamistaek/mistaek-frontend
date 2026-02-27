<script>
	import Box from '$lib/elements/box.svelte';
</script>

<Box as="div" customClass="-align-vcenter -items-vbetween -padding-xs col-6 col-start-1 -horizontal" boxed>
	<p class="body_text -small">Make science trustworthy</p>
	<i class="icon" aria-hidden="true"><img src={`/icons/mi-arrow-right.webp`} alt="arrow-right"></i>
	<p class="body_text -small">Scale without chaos</p>
	<i class="icon" aria-hidden="true"><img src={`/icons/mi-arrow-right.webp`} alt="arrow-right"></i>
	<p class="body_text -small">Speed up development</p>
	<i class="icon" aria-hidden="true"><img src={`/icons/mi-arrow-right.webp`} alt="arrow-right"></i>
	<p class="body_text -small">Win enterprise data</p>
	<i class="icon" aria-hidden="true"><img src={`/icons/mi-arrow-right.webp`} alt="arrow-right"></i>
	<p class="body_text -small">Own the infrastructure</p>
</Box>

<style>
	i { transform: rotate(90deg); scale: 0.75; }
	@media (min-width: 992px) {
		i { transform: rotate(0deg); scale: 1; }
	}
</style>

<!-- TO DO: Transform component to have it as an automatic carousel -->
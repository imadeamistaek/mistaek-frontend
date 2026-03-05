<script lang="ts">
	/**
	 * Marquee / Benefits Bar
	 * Continuously scrolling ticker of benefit statements.
	 * Items are duplicated in the DOM to create a seamless infinite loop.
	 * Animation is CSS-only for performance.
	 */
	
	import Box from '$lib/elements/box.svelte';

		/**
	 * Marquee / Benefits Bar
	 * Continuously scrolling ticker using JS to reposition tracks,
	 * creating a true infinite loop with no visible jump or reset.
	 */
	import { onMount } from 'svelte';

	const items: string[] = [
		'Make science trustworthy',
		'Scale without chaos',
		'Speed up development',
		'Win enterprise data',
		'Own the infrastructure'
	];

	let marquee: HTMLElement;
	let track1: HTMLElement;
	let track2: HTMLElement;
	let track3: HTMLElement;
	let animationId: number;
	let speed = 1; // pixels per frame, increase to go faster

	onMount(() => {
		/**
		 * Get the full width of a single track including its gap.
		 * We use this to know when a track has fully left the viewport
		 * and needs to be repositioned after the other one.
		 */
		const getTrackWidth = () => track1.getBoundingClientRect().width;

		let position = 0;

		/**
		 * Each frame, move both tracks left by `speed` pixels.
		 * When track1 has fully scrolled out of view (position <= -trackWidth),
		 * snap it to the end of track2 and reset position to 0.
		 * This creates the illusion of an endless stream.
		 */
		const trackWidth = getTrackWidth(); // calculate once here

		const tick = () => {
			position -= speed;

			if (position <= -trackWidth) {
				position = 0;
			}
			
			track1.style.transform = `translateX(${position}px)`;
			track2.style.transform = `translateX(${position}px)`;
			track3.style.transform = `translateX(${position}px)`;

			animationId = requestAnimationFrame(tick);
		};

		animationId = requestAnimationFrame(tick);

		/** Cleanup animation when component is destroyed */
		return () => cancelAnimationFrame(animationId);
	});
</script>

<Box as="div" customClass="-align-vcenter -items-vbetween -padding-vxs col-6 col-start-1 -horizontal" boxed>

	<div class="marquee" aria-label="Benefits" bind:this={marquee}>
		<ul class="marquee-track" bind:this={track1} aria-hidden="false">
			{#each items as item}
				<li class="marquee-item">
					<span class="body_text -small">{item}</span>
					<i class="icon" aria-hidden="true">
						<img src="/icons/mi-arrow-right.webp" alt="" />
					</i>
				</li>
			{/each}
		</ul>

		<!--
			Track 2 starts positioned immediately after track 1.
			When track 1 exits, track 2 is already in view.
			When track 2 exits, track 1 has been repositioned after it.
		-->
		<ul class="marquee-track" bind:this={track2} aria-hidden="true">
			{#each items as item}
				<li class="marquee-item">
					<span class="body_text -small">{item}</span>
					<i class="icon" aria-hidden="true">
						<img src="/icons/mi-arrow-right.webp" alt="" />
					</i>
				</li>
			{/each}
		</ul>
		
		<!--
			Track 3 is an extra duplicate to ensure that when one track is exiting,
			the next one is already fully visible, preventing any gaps.
		-->
		<ul class="marquee-track" bind:this={track3} aria-hidden="true">
			{#each items as item}
				<li class="marquee-item">
					<span class="body_text -small">{item}</span>
					<i class="icon" aria-hidden="true">
						<img src="/icons/mi-arrow-right.webp" alt="" />
					</i>
				</li>
			{/each}
		</ul>
	</div>

</Box>

<style>
	.marquee {
		display: flex;
		flex-flow: row nowrap;
		overflow: hidden;
		width: 100%;
		gap: var(--space-200);
	}

	.marquee-track {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		list-style: none;
		padding: 0;
		margin: 0;
		gap: var(--space-200);
		flex-shrink: 0;
		width: max-content;

		/** JS handles movement, no CSS animation needed */
		will-change: transform;
	}

	.marquee-item {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		gap: var(--space-200);
		white-space: nowrap;
	}

	.icon { display: flex; align-items: center; }
	.icon img { width: 1rem; height: 1rem; }

	/** Respect user preference for reduced motion */
	@media (prefers-reduced-motion: reduce) {
		.marquee-track { animation: none; }
	}
</style>
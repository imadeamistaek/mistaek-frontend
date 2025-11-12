<script lang="ts">
	import { checklistSections, type ChecklistResult, checklistResults } from '$lib/data/checklist';
	import { selectedItems, totalScore } from '$lib/stores/checklist';
	import { blur } from 'svelte/transition';

	import Button from '$lib/elements/button.svelte';
	import Tag from '../elements/tag.svelte';
	import Link from '../elements/link.svelte';
	import List from '$lib/components/list.svelte';
	import Box from '$lib/elements/box.svelte';
	import Crosshair from "$lib/elements/markers/crosshair.svelte";
	import Grid from "$lib/components/grid.svelte";
	import MagnetForm from './magnetForm.svelte';
	import Modal from '$lib/components/modal.svelte';
	import IconItem from '$lib/elements/iconItem.svelte';
	
	// Props (Svelte 5 style)
	let { form }: { form: any } = $props();
	
	// State
	let step = $state(0);
	let isThinking = $state(false);
	let showResults = $state(false);
	let showModal = $state(false);
	
	// Derived state
	let score = $derived($totalScore);
	let result = $derived(getResult(score));
	
	// Functions
	function nextStep() { step++; }
	function prevStep() { step--; }
	function handleThinkingEnd() { step += 1; }
	
	function toggleItem(id: string) {
		selectedItems.update((current) => {
			const copy = new Set(current);
			copy.has(id) ? copy.delete(id) : copy.add(id);
			return copy;
		});
	}
	
	function restart() {
		step = 0;
		selectedItems.set(new Set());
	}
	
	function finishChecklist() {
		isThinking = true;
		step++;
		
		setTimeout(() => {
			isThinking = false;
			showResults = true;
		}, 6500);
	}
	
	function getResult(score: number): ChecklistResult {
		return checklistResults.find(({ range }) => score >= range[0] && score <= range[1])
		?? {
			id: 'fallback',
			range: [0, 0],
			title: 'No Result Found',
			message: 'There was a problem calculating your score.',
			insights: '',
			next: '',
			actions: []
		};
	}
</script>

<Box as="div" customClass={`container ${step >= 1 && step <= checklistSections.length ? "-step" : ""}`} boxed>
	<Crosshair customClass="-tl" />
	<Crosshair customClass="-tr" />
	<Crosshair customClass="-bl" />
	<Crosshair customClass="-br" />
	<Box as="div" customClass="-items-vcenter">
		{#key step}
		<div class="content" in:blur={{ duration: 800, delay: 200 }} out:blur={{ duration: 800 }}>
			{#if step === 0}
			<Grid customClass="custom-grid">
				<Box as="div" customClass="col-6 col-start-1 md:col-6 md:col-start-1 lg:col-5 lg:col-start-1 -padding-l">
					<p id="available_title" class="h1">The 5-step design system reality check</p>
				</Box>
				<Box as="div" customClass="col-6 col-start-1 md:col-6 md:col-start-1 lg:col-3 lg:col-start-1 -align-bl -padding-l -gap-vxs">
					<p class="h6 -contained-xl">Find out if you're ready, or if you need to solve other problems first.</p>
					<p class="body_text -medium -contained">Answer honestly. This isn't about giving you the answer you want to hear. It's about giving you the answer that will actually help your team move faster.</p>
				</Box>
				<Box as="div" customClass="col-6 col-start-1 md:col-6 md:col-start-1 lg:col-3 lg:col-start-4">
					<Button customClass="-full" variant="highlight" size="large" label="Start the Reality Check" on:click={nextStep} />
				</Box>
			</Grid>
			{:else if step >= 1 && step <= checklistSections.length}
			<Grid customClass="custom-grid -rows-3flex">
				<Box as="div" customClass="col-6 col-start-1 -padding-hl -padding-vxs -horizontal -gap-xs -items-hcenter">
					<Tag label="{checklistSections[step - 1].id}" customClass="-nano" />
					<p class="body_text -nano">{checklistSections[step - 1].completion}</p>
				</Box>
				<Box as="div" customClass="col-6 col-start-1 -padding-hl -gap-vs">
					<p class="h3">{checklistSections[step - 1].title}</p>
					<p class="body_text -medium -contained-xl">{checklistSections[step - 1].description}</p>
					<List customClass="-padding-vm" vertical gapped>
						{#each checklistSections[step - 1].items as item}
						<li>
							<label class="checkbox">
								<input
								type="checkbox"
								checked={$selectedItems.has(item.id)}
								onchange={() => toggleItem(item.id)}
								/>
								<i class="icon" aria-hidden="true"><img src={`/icons/mi-checkb.webp`} alt="check icon"></i>
								<p class="body_text -medium">{item.label}</p>
							</label>
						</li>
						{/each}
					</List>
				</Box>
				<Box as="div" customClass="col-6 col-start-1 -horizontal-to-vertical -wrap -gap-none -align-br">
					{#if step > 1 && step < checklistSections.length}
					<Button customClass="-full" variant="brand" size="large" label="Previous" on:click={prevStep} />
					<Button customClass="-full" variant="default" size="large" label="Next: {checklistSections[step - 1].next}" on:click={nextStep} />
					{:else if step === 1}
					<Button customClass="-full" variant="brand" size="large" label="Cancel" on:click={restart} />
					<Button customClass="-full" variant="default" size="large" label="Next: {checklistSections[step - 1].next}" on:click={nextStep} />
					{:else if step === checklistSections.length}
					<Button customClass="-full" variant="brand" size="large" label="Previous" on:click={prevStep} />
					<Button customClass="-full" variant="highlight" size="large" label="{checklistSections[step - 1].next}" on:click={finishChecklist} />
					{/if}
				</Box>
			</Grid>
			{:else}
			<!-- Final Step: Result -->
			{#if isThinking}
			<!-- Thinking transition -->
			<Box as="div" customClass="custom-grid col-6 col-start-1 -padding-hl -gap-hs -items-hcenter">
				<div class="thinking fade-out-after" onanimationend={handleThinkingEnd}>
					<span class="line line-1">
						<i class="icon" aria-hidden="true"><img src={`/icons/mi-checkw.webp`} alt="check"></i>
						<p class="body_text -medium -subtle">Calculating your results...</p>
					</span>
					<span class="line line-2">
						<i class="icon" aria-hidden="true"><img src={`/icons/mi-checkw.webp`} alt="check"></i>
						<p class="body_text -medium -subtle">Analysing your responses...</p>
					</span>
					<span class="line line-3">
						<i class="icon" aria-hidden="true"><img src={`/icons/mi-checkw.webp`} alt="check"></i>
						<p class="body_text -medium -subtle">Almost done...</p>
					</span>
				</div>
			</Box>
			{:else if showResults && result}
			<Grid customClass="custom-grid -rows-3flex">
				<Box as="div" customClass="col-6 col-start-1 row-full md:row-full lg:row-1 -padding-hl -padding-vs -horizontal-to-vertical -gap-hxs -items-hcenter">
					<Tag label="Score: {score} / 25" customClass="" />
					<Button variant="subtle" size="mini" icon="refreshw" label="Start Over" on:click={restart} />
				</Box>
				<Grid customClass="col-6 col-start-1 row-auto md:row-auto lg:row-auto -gap-vs -padding-l -space-l">
					<p class="h2 col-6 col-start-1 md:col-6 md:col-start-1 lg:col-3 lg:col-start-1">{result.title}</p>
					<p class="h6 col-6 col-start-1 md:col-6 md:col-start-1 lg:col-2 lg:col-start-5">{result.message}</p>
				</Grid>
				<Grid customClass="col-6 col-start-1 row-auto md:row-auto lg:row-auto -padding-none -space-l -gap-vs">
					<Box as="div" customClass="col-6 col-start-1 md:col-6 md:col-start-1 lg:col-3 lg:col-start-1 -space-s -horizontal -padding-hl">
						<p class="body_text -medium -contained-l">{result.insights}</p>
					</Box>
					<List customClass="col-6 col-start-1 md:col-6 md:col-start-1 lg:col-3 lg:col-start-4 -padding-none" vertical>
						<Box as="li" customClass="">
							<Button customClass="-full" variant="brand" size="large" icon="downloadw" label="Get My Custom Action Plan" on:click={() => (showModal = true)} />
						</Box>
						<Box as="li" customClass="-space-s -padding-xs" boxed>
							<Link customClass="-full" label="Book a Reality Check Call" url="https://cal.com/mistaek/15min" type="external" />
						</Box>
					</List>
				</Grid>
			</Grid>
			{:else}
			<p>Something went wrong calculating your result.</p>
			{/if}
			{/if}
		</div>
		{/key}
	</Box>
</Box>

<Modal bind:showModal>
	{#snippet header()}
		<p class="h5">Get your honest assessment results</p>
		<p class="body_text -large -contained-l">Your custom action plan based on where your team actually is right now.</p>
		<p class="body_text -micro -subtle -contained-l">We'll send you a detailed breakdown of your assessment, including:</p>
	{/snippet}

	{#snippet body()}	
		<List customClass="-padding-none" vertical>
			<IconItem as="li" icon="checkg" label="Your score and what it means for your specific situation" customClass="-micro"/>
			<IconItem as="li" icon="checkg" label="Next steps prioritized by what will actually move the needle" customClass="-micro"/>
			<IconItem as="li" icon="checkg" label="Common mistakes we've seen teams make at your stage" customClass="-micro"/>
			<IconItem as="li" icon="checkg" label="Resources to help you build the right foundation" customClass="-micro"/>
		</List>
		<List customClass="-padding-none" vertical>
			<IconItem as="li" icon="infow" label="This PDF isn't fully accessible yet (we practice what we preach about showing work in progress). Need a screen-reader friendly version? Email hello@mistaek.com and we'll send one within 24 hours." customClass="-micro -subtle"/>
		</List>
	{/snippet}

	{#snippet footer()}
		<MagnetForm
			{form}
			score={$totalScore}
			resultTitle={result.title}
			resultData={{ selectedItems: Array.from($selectedItems) }}
		/>
	{/snippet}
</Modal>

<style>
	:global(.box.container) {
		position: relative;
		min-height: 45rem;
		height: fit-content;
		flex: initial;
		background-color: var(--color-surface-darker);
		border-bottom: 0px;
	}
	/* Small: 480px+ (Large Mobile) */
	@media (min-width: 30rem) {
		:global(.box.container) { height: 58rem; }
	}

	/* Medium: 768px+ (Tablet Portrait) */
	@media (min-width: 48rem) {
		:global(.box.container) { height: 54rem; }
	}

	/* Large: 1024px+ (Desktop) */
	@media (min-width: 64rem) {
		:global(.box.container) { height: 58rem; }
	}

	/* Extra Large: 1280px+ (Large Desktop) */
	@media (min-width: 80rem) {
		:global(.box.container) { height: 50rem; }
	}

	/* 2XL: 1536px+ (Ultra Wide) */
	@media (min-width: 96rem) {
		:global(.box.container) { height: 58rem; }
	}

	/* 3XL: 1920px+ (Ultra Wide) */
	@media (min-width: 120rem) {
		:global(.box.container) { height: 58rem; }
	}

	:global(.custom-grid) {
    	height: 100%;
		width: 100%;
	}

	/* ---------------------------------------------------------------------------------------------------- */
	/* CONTENT */
	/*
	/* All the styles related to the content of the checklist
	/* ---------------------------------------------------------------------------------------------------- */
	/* Small: 480px+ (Large Mobile) */
	@media (min-width: 30rem) {
		.content {
			width: 100%;
			position: absolute;
			top: 0;
			bottom: 0;
			height: 100%;
		}
	}
	
	/* ---------------------------------------------------------------------------------------------------- */
	/* THINKING STAGE */
	/*
	/* Styles related solely to the Thinking State screen
	/* This state has some animations associated to them as a loading state
	/* ---------------------------------------------------------------------------------------------------- */
	.thinking {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: var(--space-200);
	}
	.fade-out-after {
		animation-name: fadeOut;
		animation-delay: 6500ms;
		animation-direction: forwards;
		animation-duration: var(--transition-duration-drag);
		animation-timing-function: var(--transition-timing-function);
	}
	.line {
		display: inline-flex;
		flex-direction: row;
		gap: var(--space-200);
		opacity: 0;
		transform: translateY(16px);
		animation-name: slideUpAndNudge;
		animation-duration: 5500ms;
		animation-fill-mode: forwards;
		animation-timing-function: var(--transition-timing-function);
	}
	.line-1 { animation-delay: 0ms; }
	.line-2 { animation-delay: 500ms; }
	.line-3 { animation-delay: 1000ms; }
	
	
	@keyframes slideUpAndNudge {
		0% {
			opacity: 0;
			transform: translateY(16px);
		}
		24% {
			opacity: 1;
			transform: translateY(0);
		}
		72% {
			opacity: 1;
			transform: translateY(0);
		}
		100% {
			opacity: 0;
			transform: translateY(-16px);
		}
	}
	@keyframes fadeOut {
		to {
			opacity: 0;
			transform: translateY(-16px);
		}
	}
</style>

<script lang="ts">
	import { checklistSections, type ChecklistResult, checklistResults } from '$lib/data/checklist';
	import { selectedItems, totalScore } from '$lib/stores/checklist';
	import { downloadPDF } from '$lib/utils/pdfClient';
	import { blur } from 'svelte/transition';
	import { get } from 'svelte/store';

	import ButtonOLD from "../elements/button(DEPRECATED).svelte";
	import Button from '$lib/elements/button.svelte';
	import Tag from '../elements/tag.svelte';
	import Link from '../elements/link.svelte';
	import List from '$lib/components/list.svelte';
	import Box from '$lib/elements/box.svelte';
	import Crosshair from "$lib/elements/markers/crosshair.svelte";
    import Grid from "$lib/components/grid.svelte";
	
	// STEPS --------------------------------------------------------------------------------------------------------
	// Logic to deal with steps
	let step = 0;
	function nextStep() { step++; }
	function prevStep() { step--; }
	function handleThinkingEnd() {step += 1;}
	
	// UPDATE CHECKBOXES --------------------------------------------------------------------------------------------
	// Logic to update items
	function toggleItem(id: string) {
		selectedItems.update((current) => {
			const copy = new Set(current);
			copy.has(id) ? copy.delete(id) : copy.add(id);
			return copy;
		});
	}
	
	// RESTART --------------------------------------------------------------------------------------------------------
	// Bring to Step 0 and delete all answers
	function restart() {
		step = 0;
		selectedItems.set(new Set());
	}
	
	// RESULTS --------------------------------------------------------------------------------------------------------
	// function getResult(score: number): ChecklistResult | undefined {
	// 	return checklistResults.find(({ range }) => score >= range[0] && score <= range[1]);
	// }
	
	let isThinking = false;
	let showResults = false;
	
	function finishChecklist() {
		isThinking = true;
		step++; // Go to results step
		
		setTimeout(() => {
			isThinking = false;
			showResults = true;
		}, 6500); // adjust duration as needed
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
			actions: [] // 👈 empty array to match type
		};
	}
	
	// ✅ These are reactive and always up to date
	let score: number;
	// let result: { label: string; range: [number, number]; summary: string } | undefined;
	let result: ChecklistResult;
	
	$: score = $totalScore;
	$: result = getResult(score);
</script>

<Box as="div" customClass={`container -aspect-16-9 ${step >= 1 && step <= checklistSections.length ? "-step" : ""}`} boxed>
	<Crosshair customClass="-tl" />
	<Crosshair customClass="-tr" />
	<Crosshair customClass="-bl" />
	<Crosshair customClass="-br" />
	<Box as="div" customClass="">
		{#key step}
		<div class="content" in:blur={{ duration: 800, delay: 200 }} out:blur={{ duration: 800 }}>
			{#if step === 0}
			<Grid customClass="col-6 grid-rows-4 custom-grid">
				<Box as="div" customClass="col-5 cell-row-span-2 -padding-l">
					<p id="available_title" class="h1">The 5-step design system reality check</p>
				</Box>
				<Box as="div" customClass="col-3 col-start-1 cell-row-span-2 -align-bl -padding-hl -rgap-xs">
					<p class="h6 -contained-xl">Find out if you're ready, or if you need to solve other problems first.</p>
					<p class="body_text -medium -contained">Answer honestly. This isn't about giving you the answer you want to hear. It's about giving you the answer that will actually help your team move faster.</p>
				</Box>
				<Box as="div" customClass="col-3 col-start-4  cell-row-span-2">
					<Button customClass="-full" variant="default" size="large" label="Start the Reality Check" on:click={nextStep} />
				</Box>
			</Grid>
			{:else if step >= 1 && step <= checklistSections.length}
			<Grid customClass="col-6 grid-rows-6 custom-grid">
				<Box as="div" customClass="col-6 cell-row-span-1 -padding-hl -padding-vs -horizontal -cgap-xs">
					<Tag label="{checklistSections[step - 1].id}" customClass="-nano" />
					<p class="body_text -nano">{checklistSections[step - 1].completion}</p>
				</Box>
				<Box as="div" customClass="col-6  cell-row-span-4 -padding-hl -rgap-s">
					<p class="h3">{checklistSections[step - 1].title}</p>
					<p class="body_text -medium -contained">{checklistSections[step - 1].description}</p>
					<List customClass="" vertical gapped>
						{#each checklistSections[step - 1].items as item}
						<li>
							<label class="checkbox">
								<input
								type="checkbox"
								checked={$selectedItems.has(item.id)}
								on:change={() => toggleItem(item.id)}
								/>
								<i class="icon" aria-hidden="true"><img src={`/icons/mi-checkb.webp`} alt="check icon"></i>
								<p class="body_text -medium">{item.label}</p>
							</label>
						</li>
						{/each}
					</List>
				</Box>
				<Box as="div" customClass="col-6 cell-row-span-1 -horizontal -cgap-none -align-br">
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
			<Box as="div" customClass="col-6 -padding-hl -rgap-s">
				<div class="thinking fade-out-after" on:animationend={handleThinkingEnd}>
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
			<Grid customClass="col-6 grid-rows-6 custom-grid">
				<Box as="div" customClass="col-6 cell-row-span-1 -padding-hl -padding-vs -horizontal -cgap-xs">
					<Tag label="Score: {score} / 25" customClass="" />
					<ButtonOLD customClass="subtle -padding-m" buttonLabel="Start Over" tagLabel="" icon="refreshw" on:click={restart}/>
				</Box>
				<Grid customClass="col-6 cell-row-span-2 -padding-l -space-l">
					<p class="h2 col-3">{result.title}</p>
					<p class="h6 col-2 col-start-5">{result.message}</p>
				</Grid>
				<Grid customClass="col-6 cell-row-span-3 -padding-none -space-l">
					<Box as="div" customClass="col-2 -space-s -horizontal -padding-hl">
						<p class="body_text -medium">{result.insights}</p>
					</Box>
					<List customClass="col-3 col-start-4" vertical>
						<Box as="li" customClass="">
							<ButtonOLD customClass="border -full -padding-m" buttonLabel="Get My Custom Action Plan" tagLabel="" icon="downloadw" on:click={downloadPDF}/>
						</Box>
						<Box as="li" customClass="-space-s -padding-s" boxed>
							<Link label="Book a Reality Check Call" url="https://cal.com/mistaek/15min" type="external" />
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

<style>
	:global(.box.container) {
		position: relative;
		background-color: var(--color-surface-darker);
		border-bottom: 0px;
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

	@media (min-width: 992px) {
		.content {
			width: 100%;
			position: absolute;
			top: 0;
			bottom: 0;
			/* display: flex;
			align-items: flex-start;
			flex-direction: column; */
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

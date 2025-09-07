<script lang="ts">
	import { checklistSections, type ChecklistResult, checklistResults } from '$lib/data/checklist';
	import { selectedItems, totalScore } from '$lib/stores/checklist';
	import { downloadPDF } from '$lib/utils/pdfClient';
	import { blur } from 'svelte/transition';
	import { get } from 'svelte/store';
	import Button from "./button.svelte";
	import Tag from './tag.svelte';
	import Link from './link.svelte';
	
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

<div class={step >= 1 && step <= checklistSections.length ? "container -step" : "container"}>
	{#if step === 0}
	<div class="grid-container" in:blur out:blur>
		<span class="col -hidden-xs"></span>
		<span class="col -hidden-xs"></span>
		<span class="col"></span>
		<span class="col"></span>
		<span class="col"></span>
		<span class="col -hidden-xs"></span>
	</div>
	{/if}
	<div class="content-container col-4 col-start-2">
		{#key step}
		<div class="content" in:blur={{ duration: 800, delay: 200 }} out:blur={{ duration: 800 }}>
			{#if step === 0}
			<div class="content_group -middle">
				<p class="h2">Take the 5-step readiness checklist</p>
				<p class="h6 -contained">This 5-step checklist helps you assess how ready your startup is to build (or improve) a design system.</p>
				<p class="body_text -medium -contained">You’ll reflect on product stage, design consistency, technical setup, accessibility, and maintainability, and get instant feedback after each step.</p>
				<div class="row_group">
					<Button customClass="default -full" buttonLabel="Start the Checklist" tagLabel="2-3 minutes" icon="" on:click={nextStep}/>
				</div>
			</div>
			{:else if step >= 1 && step <= checklistSections.length}
			<div class="content_group">
				<div class="row_group">
					<Tag customClass="" label="{checklistSections[step - 1].id}"/>
					<p class="body_text -nano">{checklistSections[step - 1].completion}</p>
				</div>
				<div class="heading_group">
					<p class="h3">{checklistSections[step - 1].title}</p>
					<p class="body_text -medium -contained">{checklistSections[step - 1].description}</p>
				</div>
				<ul class="-spaced">
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
				</ul>
				<div class="row_group -bottom">
					{#if step > 1 && step < checklistSections.length}
					<Button customClass="border -full" buttonLabel="Previous" tagLabel="" icon="" on:click={prevStep}/>
					<Button customClass="default -full" buttonLabel="Next: {checklistSections[step - 1].next}" tagLabel="" icon="" on:click={nextStep}/>
					{:else if step === 1}
					<Button customClass="border -full" buttonLabel="Cancel" tagLabel="" icon="" on:click={restart}/>
					<Button customClass="default -full" buttonLabel="Next: {checklistSections[step - 1].next}" tagLabel="" icon="" on:click={nextStep}/>
					{:else if step === checklistSections.length}
					<Button customClass="border -full" buttonLabel="Previous" tagLabel="" icon="" on:click={prevStep}/>
					<Button customClass="default -full" buttonLabel="{checklistSections[step - 1].next}" tagLabel="" icon="" on:click={finishChecklist}/>
					{/if}
				</div>
			</div>
			{:else}
			<!-- Final Step: Result -->
			{#if isThinking}
			<!-- Thinking transition -->
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
			{:else if showResults && result}
			<div class="content_group" in:blur>
				<div class="row_group">
					<Tag customClass="" label="Score: {score} / 25"/>
					<Button customClass="subtle" buttonLabel="Start Over" tagLabel="" icon="refreshw" on:click={restart}/>
				</div>
				<p class="h2">{result.title}</p>
				<p class="h6">{result.message}</p>
				<p class="body_text -medium">{result.insights}</p>
				<p class="body_text -medium">{result.next}</p>
				
				<div class="row_group">
					<Button customClass="border" buttonLabel="Download PDF Checklist" tagLabel="" icon="downloadw" on:click={downloadPDF}/>
					<Link url="https://cal.com/mistaek/15min" customClass="" label="Book an intro call" icon="arrow-out" />
				</div>
			</div>
			{:else}
			<p>Something went wrong calculating your result.</p>
			{/if}
			{/if}
		</div>
		{/key}
	</div>
</div>

<style>
	div.container {
		position: relative;
		height: 880px;
		display: grid;
		grid-template-columns: repeat(6, minmax(0, 1fr));
		column-gap: var(--space-400);
		padding: var(--space-700);
		background-color: var(--color-surface-darker);
		border: var(--border-width) solid var(--color-on-surface-accent);
	}
	@media (min-width: 992px) {
		div.container {padding: var(--space-700) var(--space-200);}
	}

	/* ---------------------------------------------------------------------------------------------------- */
	/* CONTENT */
	/*
	/* All the styles related to the content of the checklist
	/* ---------------------------------------------------------------------------------------------------- */
	.content-container {
		position: relative;
		z-index: var(--zindex-foreground);
	}
	.content {
		position: absolute;
		top: 0;
		bottom: 0;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
	}
	.content_group {
		height: 100%;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		justify-content: center;
	}
	
	/* ---------------------------------------------------------------------------------------------------- */
	/* ROW GROUP */
	/* ---------------------------------------------------------------------------------------------------- */
	.row_group {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		gap: var(--space-200);
	}
	.row_group.-bottom {
		height: 100%;
		align-items: flex-end;
	}

	/* ---------------------------------------------------------------------------------------------------- */
	/* HEADING GROUP */
	/* ---------------------------------------------------------------------------------------------------- */
	.heading_group {
		display: flex;
		flex-direction: column;
		gap: var(--space-300);
		margin-top: var(--space-300);
	}

	/* ---------------------------------------------------------------------------------------------------- */
	/* Specific margins */
	/* ---------------------------------------------------------------------------------------------------- */
	.row_group ~ .h2 {margin-top: var(--space-600);}
	.h2 ~ .h6 {margin-top: var(--space-500); max-width: 540px;}
	.h6 ~ .body_text {margin-top: var(--space-300);}
	.body_text ~ .row_group {margin-top: var(--space-600);}
	
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

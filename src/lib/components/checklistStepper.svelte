<script lang="ts">
	import { checklistSections, type ChecklistResult, checklistResults } from '$lib/data/checklist';
	import { selectedItems, totalScore } from '$lib/stores/checklist';
	import { blur } from 'svelte/transition';
	import { get } from 'svelte/store';
	import Button from "./button.svelte";
	import Tag from './tag.svelte';
	import Link from './link.svelte';

	// Logic to deal with steps
	let step = 0;
	function nextStep() { step++; }
	function prevStep() { step--; }

	// Logic to update items
	function toggleItem(id: string) {
		selectedItems.update((current) => {
			const copy = new Set(current);
			copy.has(id) ? copy.delete(id) : copy.add(id);
			return copy;
		});
	}

	// Restart checklist
	// Bring to Step 0 and delete all answers
	function restart() {
		step = 0;
		selectedItems.set(new Set());
	}

	// Definition of Results
	// Results messages and logic to calculate answers given
	// type Result = {
	// 	label: string;
	// 	range: [number, number];
	// 	summary: string;
	// };

	// const results: Result[] = [
	// 	{ label: 'Too Early', range: [0, 8], summary: 'You’re still early. Keep growing and revisit soon.' },
	// 	{ label: 'Some Gaps', range: [9, 16], summary: 'You’re on your way! A few key areas need attention.' },
	// 	{ label: 'Almost Ready', range: [17, 22], summary: 'You’re nearly ready. Just a few more tweaks.' },
	// 	{ label: 'Ready!', range: [23, 25], summary: 'You’re ready to implement a design system!' }
	// ];

	function getResult(score: number): ChecklistResult | undefined {
		return checklistResults.find(({ range }) => score >= range[0] && score <= range[1]);
	}

	// ✅ These are reactive and always up to date
	let score: number;
	// let result: { label: string; range: [number, number]; summary: string } | undefined;
	let result: ChecklistResult | undefined;

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
						<Button customClass="default -full" buttonLabel="Start the Checklist" tagLabel="2-3 minutes" on:click={nextStep}/>
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
					<ul>
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
						{#if step > 1}
							<Button customClass="border -full" buttonLabel="Previous" tagLabel="" on:click={prevStep}/>
							<Button customClass="default -full" buttonLabel="Next: {checklistSections[step - 1].next}" tagLabel="" on:click={nextStep}/>
						{:else if step = 1}
							<Button customClass="border -full" buttonLabel="Cancel" tagLabel="" on:click={restart}/>
							<Button customClass="default -full" buttonLabel="Next: {checklistSections[step - 1].next}" tagLabel="" on:click={nextStep}/>
						{/if}
					</div>
				</div>
			{:else}
			<!-- Final Step: Result -->
				{#if result}
					<div class="content_group">
						<Tag customClass="" label="Score: {score} / 25"/>
						<p class="h2">{result.title}</p>
						<p class="h6">{result.message}</p>
						<p class="body_text -medium">{result.insights}</p>
						<p class="body_text -medium">{result.next}</p>

						<div class="row_group">
							<Link url="https://cal.com/mistaek/15min" customClass="" label="Book an intro call" icon="arrow-out" />
							<a href="/pdf-checklist.pdf" class="btn btn-outline">Download PDF Checklist</a>
						</div>

						<Button customClass="-full" buttonLabel="Start Over" tagLabel="" on:click={restart}/>
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
		padding: var(--space-700) 0;
		background-color: var(--color-surface-darker);
		border: var(--border-width) solid var(--color-on-surface-accent);
	}
	@media (min-width: 992px) {
		div.container {padding: var(--space-700) var(--space-200);}
	}

	/* ---------------------------------------------------------------------------------------------------- */
	/* CONTENT */
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

	.row_group {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		gap: var(--space-400);
	}
	.row_group.-bottom {
		height: 100%;
		align-items: flex-end;
	}

	.heading_group {
		display: flex;
		flex-direction: column;
		gap: var(--space-300);
		margin-top: var(--space-300);
	}

	.h2 ~ .h6 {margin-top: var(--space-600); max-width: 540px;}
	.h6 ~ .body_text {margin-top: var(--space-300);}
	.body_text ~ .row_group {margin-top: var(--space-600);}
</style>

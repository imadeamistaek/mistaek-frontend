<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	
	// Props
	export let id: string;
	export let name: string;
	export let label: string = '';
	export let checked: boolean = false;
	export let value: string = 'on';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let customClass: string = '';
	export let error: string = '';
	export let validator: ((checked: boolean) => string) | null = null;
	
	const dispatch = createEventDispatcher();
	
	let touched = false;
	let internalError = '';
	
	$: displayError = error || internalError;
	$: hasError = touched && !!displayError;
	
	function handleChange(event: Event) {
		const target = event.target as HTMLInputElement;
		checked = target.checked;
		touched = true;
		
		dispatch('change', { checked, value });
		
		if (validator) {
			validate();
		}
	}
	
	function handleBlur() {
		touched = true;
		dispatch('blur', { checked });
		
		if (validator) {
			validate();
		}
	}
	
	function validate() {
		if (!validator) {
			internalError = '';
			return true;
		}
		
		internalError = validator(checked);
		return !internalError;
	}
	
	export function validateField(): boolean {
		touched = true;
		return validate();
	}
	
	export function reset() {
		checked = false;
		touched = false;
		internalError = '';
	}
</script>

<div class={`checkbox-container ${customClass}`} class:has-error={hasError}>
	<label for={id} class="checkbox_label">
		<input
		{id}
		{name}
		type="checkbox"
		class="checkbox-input"
		class:error={hasError}
		bind:checked
		{value}
		{required}
		{disabled}
		aria-invalid={hasError ? 'true' : 'false'}
		aria-describedby={hasError ? `${id}-error` : undefined}
		on:change={handleChange}
		on:blur={handleBlur}
		on:focus
		/>
		
		<i class="icon" aria-hidden="true"><img src={`/icons/mi-checkb.webp`} alt="check icon"></i>
		
		<span class="label-text">
			{#if label}
			<span class="body_text -medium">{label}</span>
			{:else}
			<span class="body_text -medium"><slot /></span>
			{/if}
			{#if !required}
			<span class="body_text -medium -subtle optional" aria-label="optional">(optional)</span>
			{/if}
		</span>
	</label>
	
	{#if hasError}
	<div class="input_feedback">
		<i class="icon" aria-hidden="true"><img src={`/icons/mi-alert-triangle-r.webp`} alt="Error icon"></i>
		<p id="{id}-error" class="body_text -small -error" role="alert">{displayError}</p>
	</div>
	{/if}
</div>

<style>
	.checkbox-container {
		display: flex;
		flex-direction: column;
		gap: var(--space-100);
	}

	label.checkbox_label {
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: var(--space-200);
		cursor: pointer;
		user-select: none;
	}
	input[type="checkbox"] {
		-webkit-appearance: none;
		appearance: none;
		margin: 0;
		width: var(--space-400);
		height: var(--space-400);
		background-color: var(--color-surface);
		border: var(--border-width) solid var(--color-on-surface-accent);
		border-radius: var(--border-radius-sm);
		transition-property: background-color;
		transition-duration: var(--transition-duration-nitro);
		transition-timing-function: var(--transition-timing-function);
	}
	label.checkbox_label input + i {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		transform: scale(0);
		transition-property: transform;
		transition-duration: var(--transition-duration-nitro);
		transition-timing-function: var(--transition-timing-function);
		max-height: initial !important;
	}

	.input_feedback {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: var(--space-100);
	}
	.input_feedback i { transform: scale(0.8); }
	
	input[type="checkbox"]:checked {background-color: var(--color-on-surface);}
	input[type="checkbox"]:checked + i {transform: scale(0.8);}
</style>

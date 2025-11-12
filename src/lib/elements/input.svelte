<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	
	// Props
	export let id: string;
	export let name: string;
	export let label: string;
	export let type: 'text' | 'email' | 'tel' | 'url' | 'password' | 'number' = 'text';
	export let value: string = '';
	export let placeholder: string = '';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let pattern: string = '';
	export let minlength: number | undefined = undefined;
	export let maxlength: number | undefined = undefined;
	export let customClass: string = '';
	export let error: string = '';
	export let hint: string = '';
	export let validateOn: 'blur' | 'input' | 'change' = 'blur';
	export let validator: ((value: string) => string) | null = null;
	
	const dispatch = createEventDispatcher();
	
	let touched = false;
	let internalError = '';
	
	// Computed error (external or internal)
	$: displayError = error || internalError;
	$: hasError = touched && !!displayError;
	$: ariaDescribedby = [
	hint ? `${id}-hint` : null,
	hasError ? `${id}-error` : null
	].filter(Boolean).join(' ') || undefined;
	
	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		value = target.value;
		dispatch('input', { value });
		
		if (validateOn === 'input' && touched) {
			validate();
		}
	}
	
	function handleChange(event: Event) {
		const target = event.target as HTMLInputElement;
		value = target.value;
		dispatch('change', { value });
		
		if (validateOn === 'change') {
			validate();
		}
	}
	
	function handleBlur() {
		touched = true;
		dispatch('blur', { value });
		
		if (validateOn === 'blur') {
			validate();
		}
	}
	
	function validate() {
		if (!validator) {
			internalError = '';
			return true;
		}
		
		internalError = validator(value);
		return !internalError;
	}
	
	// Public method to trigger validation externally
	export function validateField(): boolean {
		touched = true;
		return validate();
	}
	
	// Public method to reset field
	export function reset() {
		value = '';
		touched = false;
		internalError = '';
	}
</script>

<div class={`input-container ${customClass}`}>
	<label for={id} class="input-label">
		<span class="body_text -medium">{label}</span>

		{#if !required}
			<span class="body_text -medium -subtle -optional" aria-label="optional">(Optional)</span>
		{/if}
	</label>
	
	{#if hint}
		<p id="{id}-hint" class="body_text -small -subtle -hint">{hint}</p>
	{/if}

	{#if hasError}
	<div class="input_feedback">
		<i class="icon" aria-hidden="true"><img src={`/icons/mi-alert-triangle-r.webp`} alt="Error icon"></i>
		<p id="{id}-error" class="body_text -small -error" role="alert">{displayError}</p>
	</div>
	{/if}
	
	<input
		{id}
		{name}
		{type}
		class="input"
		class:error={hasError}
		{value}
		{placeholder}
		{required}
		{disabled}
		{readonly}
		{pattern}
		{minlength}
		{maxlength}
		aria-invalid={hasError ? 'true' : 'false'}
		aria-describedby={ariaDescribedby}
		on:input={handleInput}
		on:change={handleChange}
		on:blur={handleBlur}
		on:focus
	/>
</div>

<style>
	.input-container {
		display: flex;
		flex-direction: column;
		gap: var(--space-100);
	}

	label.input-label {
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: var(--space-100);
		cursor: pointer;
		user-select: none;
	}

	.input_feedback {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: var(--space-100);
	}
	.input_feedback i { transform: scale(0.8); }

	input {
		-webkit-appearance: none;
		appearance: none;
		margin: 0;
		padding: var(--space-200) var(--space-300);
		background-color: var(--color-surface);
		color: var(--color-on-surface);
		border: var(--border-width) solid var(--color-on-surface-accent);
		font-size: var(--typeface-size-body-medium);
		transition-property: background-color;
		transition-duration: var(--transition-duration-nitro);
		transition-timing-function: var(--transition-timing-function);
	}
	input:hover { background-color: var(--color-surface-darker); }
	input:active { background-color: var(--color-surface-darker); }

	input[aria-invalid="true"] {
		border-color: var(--color-surface-on-error-accent);
	}
	
</style>
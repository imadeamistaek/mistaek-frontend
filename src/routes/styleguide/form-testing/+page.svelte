<script lang="ts">
	import Checkbox from "$lib/elements/checkbox.svelte";
	import Input from "$lib/elements/input.svelte";
	import Grid from '$lib/components/grid.svelte';
	import Box from '$lib/elements/box.svelte';
	import Tag from '$lib/elements/tag.svelte';
	
	let emailValue = '';
	let companyValue = '';
	let privacyChecked = false;
	
	let emailInput: Input;
	let checkboxInput: Checkbox;
	
	// Simple validators for testing
	function validateEmail(value: string): string {
		if (!value.trim()) return 'Email is required';
		if (!value.includes('@')) return 'Invalid email format';
		return '';
	}
	
	function validatePrivacy(checked: boolean): string {
		if (!checked) return 'You must accept to continue';
		return '';
	}
	
	function triggerValidation() {
		emailInput.validateField();
		checkboxInput.validateField();
	}
	
	function resetAll() {
		emailInput.reset();
		checkboxInput.reset();
	}
</script>

<section>
	<Grid customClass="-cols-6">
		<Box customClass="col-6 col-start-1 -gap-vl -padding-vl">
			<h1>Inputs Validation</h1>
		</Box>
		<Box customClass="col-6 col-start-1 -gap-vl -padding-vl">
			<Tag label="Base Input - Normal State" customClass="-nano" />
			<Input
				id="test-email-1"
				name="test-email-1"
				type="email"
				label="Email Address"
				bind:value={emailValue}
			/>
		</Box>
	</Grid>

	<Grid customClass="-cols-6">
		<Box customClass="col-6 col-start-1 -gap-vl -padding-vl">
			<Tag label="Base Input - With Validation" customClass="-nano" />
			<Input
				bind:this={emailInput}
				id="test-email-2"
				name="test-email-2"
				type="email"
				label="Email Address"
				bind:value={emailValue}
				required
				validator={validateEmail}
				validateOn="blur"
			/>
			<p class="helper">Try typing invalid email and clicking away (blur)</p>
		</Box>
	</Grid>

	<Grid customClass="-cols-6">
		<Box customClass="col-6 col-start-1 -gap-vl -padding-vl">
			<Tag label="Base Input - With Hint" customClass="-nano" />
			<Input
				id="test-company"
				name="test-company"
				type="text"
				label="Company Name"
				bind:value={companyValue}
				hint="This helps us personalize your experience"
			/>
		</Box>
	</Grid>

	<Grid customClass="-cols-6">
		<Box customClass="col-6 col-start-1 -gap-vl -padding-vl">
			<Tag label="Base Input - With External Error" customClass="-nano" />
			<Input
				id="test-error"
				name="test-error"
				type="email"
				label="Email with Error"
				value="bad-email"
				error="This email is already taken"
			/>
		</Box>
	</Grid>
</section>

<section>
	<Grid customClass="-cols-6">
		<Box customClass="col-6 col-start-1 -gap-vl -padding-vl">
			<Tag label="Base Checkbox - Normal State" customClass="-nano" />
			<Checkbox
				id="test-check-1"
				name="test-check-1"
				label="I agree to the terms"
				bind:checked={privacyChecked}
			/>
		</Box>
	</Grid>

	<Grid customClass="-cols-6">
		<Box customClass="col-6 col-start-1 -gap-vl -padding-vl">
			<Tag label="Base Checkbox - With Validation" customClass="-nano" />
			<Checkbox
				bind:this={checkboxInput}
				id="test-check-2"
				name="test-check-2"
				required
				validator={validatePrivacy}
				>
				I accept the <a href="#" on:click|preventDefault>Privacy Policy</a>
			</Checkbox>
			<p class="helper">Check and uncheck to see validation</p>
		</Box>
	</Grid>

	<Grid customClass="-cols-6">
		<Box customClass="col-6 col-start-1 -gap-vl -padding-vl">
			<Tag label="Base Checkbox - With External Error" customClass="-nano" />
			<Checkbox
				id="test-check-3"
				name="test-check-3"
				label="Subscribe to newsletter"
				error="You must be 18 or older to subscribe"
			/>
		</Box>
	</Grid>
</section>

<section>
	<Grid customClass="-cols-6">
		<Box customClass="col-6 col-start-1 -gap-vl -padding-vl">
			<div class="button-group">
				<button class="test-button" on:click={triggerValidation}>
					Trigger Validation
				</button>
				<button class="test-button secondary" on:click={resetAll}>
					Reset All
				</button>
			</div>
		</Box>
	</Grid>
</section>

<style>
	.helper {
		margin: var(--space-200, 0.5rem) 0 0;
		font-size: var(--font-size-sm, 0.875rem);
		color: var(--color-on-surface-muted, #666);
		font-style: italic;
	}
	
	.button-group {
		display: flex;
		gap: var(--space-200, 0.5rem);
		flex-wrap: wrap;
	}
	
	.test-button {
		padding: var(--space-200, 0.5rem) var(--space-400, 1.5rem);
		font-size: var(--font-size-base, 1rem);
		font-weight: var(--font-weight-semibold, 600);
		color: white;
		background-color: var(--color-primary, #000);
		border: none;
		border-radius: var(--radius-md, 8px);
		cursor: pointer;
		transition: opacity 0.2s;
	}
	
	.test-button:hover {
		opacity: 0.9;
	}
	
	.test-button.secondary {
		background-color: var(--color-secondary, #666);
	}
</style>
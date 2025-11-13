<script lang="ts">
    import { enhance } from '$app/forms';
    import Input from '$lib/elements/input.svelte';
    import Checkbox from '$lib/elements/checkbox.svelte';
    import Button from '$lib/elements/button.svelte';

    export let form: any;
    export let score: number;
    export let resultTitle: string;
    export let resultData: any; // Your full quiz result object for PDF generation
    
    let emailInput: Input;
    let checkboxInput: Checkbox;
    
    let formState = {
        email: '',
        companyName: '',
        privacyAccepted: false
    };
    
    let isSubmitting = false;
    let submitSuccess = false;
    
    // Email validation
    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    
    function validateEmail(value: string): string {
        if (!value.trim()) {
            return 'Email address is required';
        }
        if (!EMAIL_REGEX.test(value)) {
            return 'Please enter a valid email address';
        }
        return '';
    }
    
    function validatePrivacy(checked: boolean): string {
        if (!checked) {
            return 'You must accept the privacy policy to continue';
        }
        return '';
    }
    
    function handleSubmit() {
        const emailValid = emailInput.validateField();
        const privacyValid = checkboxInput.validateField();
        
        if (!emailValid || !privacyValid) {
            return false;
        }
        
        isSubmitting = true;
        return true;
    }
</script>

<form
method="POST"
action="?/submit"
use:enhance={() => {
    return async ({ result, update }) => {
        isSubmitting = false;
        
        if (result.type === 'success') {
            submitSuccess = true;
        }
        
        await update();
    };
}}
on:submit|preventDefault={handleSubmit}
novalidate
class="lead-form"
>
<!-- Hidden fields for quiz data -->
<input type="hidden" name="score" value={score} />
<input type="hidden" name="resultTitle" value={resultTitle} />
<input type="hidden" name="resultData" value={JSON.stringify(resultData)} />

<Input
bind:this={emailInput}
id="email"
name="email"
type="email"
label="Email Address"
bind:value={formState.email}
placeholder="your@email.com"
required
validator={validateEmail}
disabled={isSubmitting || submitSuccess}
/>

<Input
id="company"
name="companyName"
type="text"
label="Company Name"
bind:value={formState.companyName}
placeholder="Your Company"
hint="Optional - helps us personalize your report"
disabled={isSubmitting || submitSuccess}
/>

<Checkbox
bind:this={checkboxInput}
id="privacy"
name="privacyAccepted"
bind:checked={formState.privacyAccepted}
required
validator={validatePrivacy}
disabled={isSubmitting || submitSuccess}
>
I accept the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer"><u>Privacy Policy</u></a>
</Checkbox>

{#if submitSuccess}
<div class="success-message" role="status" aria-live="polite">
    <svg class="success-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
    <div>
        <p class="success-title">Check your email!</p>
        <p class="success-text">Your custom action plan is on its way to {formState.email}</p>
    </div>
</div>
{:else}
<Button
  type="submit"
  variant="highlight"
  size="large"
  label={isSubmitting ? "Sending your report..." : "Get My Custom Action Plan"}
  loading={isSubmitting}
  customClass="-full"
/>
{/if}
</form>

<style>
    .lead-form {
        display: flex;
        flex-direction: column;
        gap: var(--space-400);
        width: 100%;
    }
    
    .success-message {
        display: flex;
        align-items: flex-start;
        gap: var(--space-300);
        padding: var(--space-400);
        background-color: var(--color-success-subtle, #e8f5e9);
        border-radius: var(--radius-md);
        border-left: 3px solid var(--color-success, #4caf50);
    }
    
    .success-icon {
        width: 2rem;
        height: 2rem;
        color: var(--color-success, #4caf50);
        flex-shrink: 0;
        margin-top: var(--space-50);
    }
    
    .success-title {
        margin: 0 0 var(--space-50);
        font-size: var(--font-size-lg);
        font-weight: var(--font-weight-semibold);
        color: var(--color-success-text, #1b5e20);
    }
    
    .success-text {
        margin: 0;
        font-size: var(--font-size-sm);
        color: var(--color-success-text, #2e7d32);
    }
</style>
<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	
	// Props
	export let label: string;
	export let variant: 'highlight' | 'brand' | 'default' | 'subtle' = 'default';
	export let size: 'mini' | 'small' | 'medium' | 'large' = 'medium';
	export let icon: string | null = null;
	export let iconPosition: 'left' | 'right' = 'right';
	export let loading: boolean = false;
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let customClass: string = '';
	export let ariaDescribedby: string | null = null;
	export let ariaExpanded: boolean | null = null;
	export let ariaPressed: boolean | null = null;

	// Events
	const dispatch = createEventDispatcher();
	
	// Computed values
	$: hasIcon = icon && !loading;
	$: isIconOnly = hasIcon && !label;
	$: ariaLabel = isIconOnly ? `${icon} button` : label;
	
	// CSS classes
	$: buttonClasses = [
		'btn',
		`btn--${variant}`,
		`btn--${size}`,
		hasIcon && `btn--has-icon btn--icon-${iconPosition}`,
		isIconOnly && 'btn--icon-only',
		loading && 'btn--loading',
		customClass
	].filter(Boolean).join(' ');

	function handleClick(event: MouseEvent) {
		if (loading) {
			event.preventDefault();
			return;
		}
		dispatch('click', event);
	}
</script>

<button
	class={buttonClasses}
	{type}
	aria-label={isIconOnly ? ariaLabel : null}
	aria-describedby={ariaDescribedby}
	aria-expanded={ariaExpanded}
	aria-pressed={ariaPressed}
	aria-busy={loading}
	on:click={handleClick}
	on:focus
	on:blur
	on:keydown
>
	{#if loading}
		<span class="btn__spinner" aria-hidden="true">
			<svg viewBox="0 0 24 24" class="btn__spinner-icon">
				<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" stroke-dasharray="60" stroke-dashoffset="40" />
			</svg>
		</span>
		<span class="sr-only">Loading</span>
	{:else}
		{#if hasIcon && iconPosition === 'left'}
			<i class="icon" aria-hidden="true">
				<img src={`/icons/mi-${icon}.webp`} alt="{icon}">
			</i>
		{/if}
		
		{#if label}
			<span class="btn__label">{label}</span>
		{/if}
		
		{#if hasIcon && iconPosition === 'right'}
			<i class="icon" aria-hidden="true">
				<img src={`/icons/mi-${icon}.webp`} alt="{icon}">
			</i>
		{/if}
	{/if}
</button>

<style>
	/* ---------------------------------------------------------------------------------------------------- */
	/* BUTTON default styles */
	/* ---------------------------------------------------------------------------------------------------- */
	button {
		position: relative;
		display: inline-flex;
		align-items: flex-end;
		justify-content: flex-start;
		gap: var(--space-200);
		font-family: inherit;
		color: var(--color-on-surface);
		text-align: left;
		text-decoration: none;
		text-wrap: auto;
		/* white-space: nowrap; */
		vertical-align: middle;
		user-select: none;
		cursor: pointer;
		transition-property: background-color, border, color;
		transition-duration: var(--transition-duration-fast);
		transition-timing-function: var(--transition-timing-function);
		
		/* Prevent layout shift on hover */
		transform: translateZ(0);
		backface-visibility: hidden;
	}

	button .btn__label {
		font-family: var(--typeface-family-base);
		font-weight: var(--typeface-weight-bold);
		line-height: var(--typeface-line-height-base);
		letter-spacing: var(--typeface-tracking-base);
		margin: 0;
		padding: 0;
	}

	/* ---------------------------------------------------------------------------------------------------- */
	/* Size Variants */
	/* ---------------------------------------------------------------------------------------------------- */
	.btn--mini {
		height: fit-content;
		padding: var(--space-100);
		align-items: center;
		font-size: var(--typeface-size-body-small);
	}

	.btn--small {
		padding: var(--space-100);
		font-size: var(--typeface-size-body-small);
	}

	.btn--medium {
		padding: var(--space-300);
		font-size: var(--typeface-size-body-medium);
	}

	.btn--large {
		padding: var(--space-500);
		font-size: var(--typeface-size-body-large);
	}

	/* Icon-only sizing */
	.btn--icon-only.btn--small {
		width: var(--space-600);
		padding: var(--space-150);
	}

	.btn--icon-only.btn--medium {
		width: var(--space-700);
		padding: var(--space-200);
	}

	.btn--icon-only.btn--large {
		width: var(--space-800);
		padding: var(--space-300);
	}

	/* ---------------------------------------------------------------------------------------------------- */
	/* Color Variants */
	/* ---------------------------------------------------------------------------------------------------- */
	/* Brand Highlight */
	.btn--highlight {
		background-color: var(--color-on-surface);
		border: var(--border-width) solid var(--color-on-surface-accent);
		color: var(--color-surface);
	}
	.btn--highlight:hover:not(:disabled) { background-color: var(--color-neutral-200); }
	.btn--highlight:active:not(:disabled) { background-color: var(--color-neutral-200); }

	/* Brand Variant */
	.btn--brand {
		background-color: var(--color-surface-darker);
		border: var(--border-width) solid var(--color-on-surface-accent);
	}
	.btn--brand:hover:not(:disabled) { background-color: var(--color-surface); }
	.btn--brand:active:not(:disabled) { background-color: var(--color-surface); }

	/* Default Variant */
	.btn--default {
		background-color: var(--color-surface);
		border: var(--border-width) solid var(--color-on-surface-accent);
	}
	.btn--default:hover:not(:disabled) { background-color: var(--color-on-surface-accent);}
	.btn--default:active:not(:disabled) { background-color: var(--color-on-surface-accent);}

	/* Subtle Variant */
	.btn--subtle {
		background-color: transparent;
		border: transparent;
	}
	.btn--subtle:hover:not(:disabled) { background-color: var(--color-on-surface-opacity-10);}

	/* ---------------------------------------------------------------------------------------------------- */
	/* States */
	/* ---------------------------------------------------------------------------------------------------- */
	.btn:focus-visible {
		border-color: var(--color-on-surface);
		outline: 3px solid var(--color-brand-accent);
		outline-offset: 0px;
	}

	.btn--loading {
		cursor: wait;
	}

	/* Icon styles */
	.btn__icon {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Loading spinner */
	.btn__spinner {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.btn__spinner-icon {
		width: 1.25em;
		height: 1.25em;
		animation: btn-spin 1s linear infinite;
	}

	@keyframes btn-spin {
		to {
			transform: rotate(360deg);
		}
	}

	/* Screen reader only text */
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	/* Reduced motion support */
	@media (prefers-reduced-motion: reduce) {
		.btn {
			transition: none;
		}
		
		.btn--primary:hover:not(:disabled) {
			transform: none;
		}
		
		.btn__spinner-icon {
			animation: none;
		}
	}

	/* High contrast support */
	@media (prefers-contrast: high) {
		.btn {
			border: 2px solid;
		}
		
		.btn--primary {
			border-color: var(--color-on-primary);
		}
		
		.btn--secondary {
			border-color: var(--color-on-surface);
		}
	}

	/* Utility classes */
	.btn.-full { flex: 1; justify-content: space-between; }
</style>
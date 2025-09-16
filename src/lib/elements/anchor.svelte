<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	
	// Props
	export let label: string;
	export let href: string;
	export let variant: 'highlight' | 'brand' | 'default' | 'subtle' = 'default';
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let icon: string | null = null;
	export let iconPosition: 'left' | 'right' = 'right';
	export let customClass: string = '';
	export let smooth: boolean = true;
	
	// Events
	const dispatch = createEventDispatcher();
	
	// Computed values
	$: hasIcon = !!icon;
	$: isIconOnly = hasIcon && !label;
	$: ariaLabel = isIconOnly ? `Navigate to ${href.replace('#', '')} section` : null;
	
	// CSS classes
	$: anchorClasses = [
		'anchor',
		`anchor--${variant}`,
		`anchor--${size}`,
		hasIcon && `anchor--has-icon anchor--icon-${iconPosition}`,
		isIconOnly && 'anchor--icon-only',
		smooth && 'anchor--smooth',
		customClass
	].filter(Boolean).join(' ');

	function handleClick(event: MouseEvent) {
		dispatch('click', event);
		
		if (smooth && href.startsWith('#')) {
			event.preventDefault();
			
			const target = document.querySelector(href);
			if (target) {
				// Announce navigation to screen readers
				const announcement = document.createElement('div');
				announcement.setAttribute('aria-live', 'polite');
				announcement.setAttribute('aria-atomic', 'true');
				announcement.className = 'sr-only';
				announcement.textContent = `Navigating to ${href.replace('#', '')} section`;
				document.body.appendChild(announcement);
				
				// Smooth scroll with focus management
				target.scrollIntoView({ 
					behavior: 'smooth', 
					block: 'start' 
				});
				
				// Set focus after scroll completes
				setTimeout(() => {
					if (target.hasAttribute('tabindex')) {
						(target as HTMLElement).focus();
					} else {
						target.setAttribute('tabindex', '-1');
						(target as HTMLElement).focus();
						// Remove tabindex after focus to maintain natural tab flow
						setTimeout(() => target.removeAttribute('tabindex'), 100);
					}
					
					// Clean up announcement
					document.body.removeChild(announcement);
				}, 500);
			}
		}
	}
</script>

<a
	class={anchorClasses}
	{href}
	aria-label={ariaLabel}
	on:click={handleClick}
	on:focus
	on:blur
>
	{#if hasIcon && iconPosition === 'left'}
		<i class="icon" aria-hidden="true">
			<img src={`/icons/mi-${icon}.webp`} alt="{icon}">
		</i>
	{/if}
	
	{#if label}
		<span class="anchor__label">{label}</span>
	{/if}
	
	{#if hasIcon && iconPosition === 'right'}
		<i class="icon" aria-hidden="true">
			<img src={`/icons/mi-${icon}.webp`} alt="{icon}">
		</i>
	{/if}
</a>

<style>
    /* ---------------------------------------------------------------------------------------------------- */
	/* ANCHOR default styles */
	/* ---------------------------------------------------------------------------------------------------- */
	.anchor {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: flex-start;
		gap: var(--space-200);
		font-family: inherit;
		color: var(--color-on-surface);
		text-align: left;
		text-decoration: none;
		white-space: nowrap;
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

	.anchor .anchor__label {
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
	.anchor--small {
		padding: var(--space-100);
		font-size: var(--typeface-size-body-small);
	}

	.anchor--medium {
		padding: var(--space-300);
		font-size: var(--typeface-size-body-medium);
	}

	.anchor--large {
		padding: var(--space-500);
		font-size: var(--typeface-size-body-large);
	}

	/* Icon-only sizing */
	.anchor--icon-only.anchor--small {
		width: var(--space-600);
		padding: var(--space-150);
	}

	.anchor--icon-only.anchor--medium {
		width: var(--space-700);
		padding: var(--space-200);
	}

	.anchor--icon-only.anchor--large {
		width: var(--space-800);
		padding: var(--space-300);
	}

	/* ---------------------------------------------------------------------------------------------------- */
	/* Color Variants */
	/* ---------------------------------------------------------------------------------------------------- */
	/* Brand Highlight */
	.anchor--highlight {
		background-color: var(--color-on-surface);
		border: var(--border-width) solid var(--color-on-surface-accent);
		color: var(--color-surface);
	}
	.anchor--highlight:hover:not(:disabled) { background-color: var(--color-on-surface-darker); }
	.anchor--highlight:active:not(:disabled) { background-color: var(--color-on-surface-darker); }

	/* Brand Variant */
	.anchor--brand {
		background-color: var(--color-surface-darker);
		border: var(--border-width) solid var(--color-on-surface-accent);
	}
	.anchor--brand:hover:not(:disabled) { background-color: var(--color-surface); }
	.anchor--brand:active:not(:disabled) { background-color: var(--color-surface); }

	/* Default Variant */
	.anchor--default {
		background-color: var(--color-surface);
		border: var(--border-width) solid var(--color-on-surface-accent);
	}
	.anchor--default:hover:not(:disabled) { background-color: var(--color-on-surface-accent);}
	.anchor--default:active:not(:disabled) { background-color: var(--color-on-surface-accent);}

	/* Subtle Variant */
	.anchor--subtle {
		background-color: transparent;
		border: transparent;
	}
	.anchor--subtle:hover:not(:disabled) { background-color: var(--color-on-surface-opacity-10);}

	/* ---------------------------------------------------------------------------------------------------- */
	/* States */
	/* ---------------------------------------------------------------------------------------------------- */
	.anchor:focus-visible {
		border-color: var(--color-on-surface);
		outline: 3px solid var(--color-brand-accent);
		outline-offset: 0px;
	}

	/* Smooth scroll animation indicator */
	/* .anchor--smooth::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 50%;
		width: 0;
		height: 2px;
		background-color: var(--color-on-surface-opacity-30);
		border-radius: 1px;
		transform: translateX(-50%);
		transition-property: width;
		transition-duration: var(--transition-duration-fast);
		transition-timing-function: var(--transition-timing-function);
	}

	.anchor--smooth:hover::after {
		width: 100%;
	} */

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
		.anchor {
			transition: none;
		}
		
		.anchor--primary:hover {
			transform: none;
		}
		
		.anchor--smooth::after {
			transition: none;
		}
		
		.anchor--smooth {
			scroll-behavior: auto;
		}
	}

	/* High contrast support */
	@media (prefers-contrast: high) {
		.anchor {
			border: 2px solid;
		}
		
		.anchor--primary {
			border-color: var(--color-on-primary);
		}
		
		.anchor--secondary {
			border-color: var(--color-on-surface);
		}
	}

	/* Utility classes */
	.anchor.-full { width: 100%; }
</style>
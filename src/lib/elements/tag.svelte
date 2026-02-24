<script lang="ts">
	export let label: string;
	export let customClass: string | null | undefined = null;
	export let variant: 'default' | 'progress' | 'planned' | 'completed' | 'validation' | 'client' | 'migration' | 'subtle' = 'default';
	export let size: 'default' | 'small' | 'nano' = 'default';
	
	// Determine if this tag represents status information
	$: hasStatusRole = variant !== 'default' && variant !== 'subtle';
	
	// Create semantic meaning for screen readers
	$: ariaLabel = getAriaLabel(variant, label);
	
	function getAriaLabel(variant: string, label: string): string {
		const statusMap: Record<string, string> = {
			progress: `${label}`,
			planned: `${label}`,
			completed: `${label}`,
			validation: `${label}`,
			client: `${label}`,
			migration: `${label}`
		};
		
		return statusMap[variant] || label;
	}
</script>

<div 
	class={`tag ${variant !== 'default' ? `-${variant}` : ''} ${size !== 'default' ? `-${size}` : ''} ${customClass || ''}`}
	{...hasStatusRole ? { role: 'status', 'aria-label': ariaLabel } : {}}
>
	<span class={`body_text ${customClass || ''}`} {...hasStatusRole ? { 'aria-hidden': 'true' } : {}}>
		{label}
	</span>
</div>

<style>
	/* ---------------------------------------------------------------------------------------------------- */
	/* TAG */
	/* All the styles necessary to style the tag component */
	/* ---------------------------------------------------------------------------------------------------- */
	.tag {
		width: max-content;
		height: fit-content;
		display: inline-flex;
		align-items: center;
		text-align: center;
		user-select: none;
		text-decoration: none;
		outline: none;
		padding: var(--space-100) var(--space-200);
		color: var(--color-on-surface);
		background-color: transparent;
		border: var(--border-width) solid var(--color-on-surface);
		border-radius: var(--border-radius-max);
		font-size: inherit; /* Inherit font size from context */
	}

	/* Ensure sufficient contrast */
	.tag {
		min-height: 24px; /* Minimum touch target size */
		box-sizing: border-box;
	}

	/* ---------------------------------------------------------------------------------------------------- */
	/* SIZE Variants */
	/* ---------------------------------------------------------------------------------------------------- */
	.-small {
		padding: var(--space-50) var(--space-100);
		min-height: 20px;
	}
	
	.-nano {
		padding: 2px var(--space-50);
		min-height: 16px;
	}

	/* ---------------------------------------------------------------------------------------------------- */
	/* VISUAL Variants */
	/* ---------------------------------------------------------------------------------------------------- */
	.tag.-subtle {
		border: var(--border-width) solid var(--color-on-surface-accent);
	}

	.tag.-progress {
		background-color: var(--color-tag-progress);
		color: var(--color-tag-on-progress);
		border: var(--border-width) solid var(--color-on-surface-opacity-10);
	}
	
	.tag.-planned {
		background-color: var(--color-tag-planned);
		color: var(--color-tag-on-planned);
		border: var(--border-width) solid var(--color-on-surface-opacity-10);
	}
	
	.tag.-completed {
		background-color: var(--color-tag-completed);
		color: var(--color-tag-on-completed);
		border: var(--border-width) solid var(--color-on-surface-opacity-10);
	}
	
	.tag.-validation {
		background-color: var(--color-tag-validation);
		color: var(--color-tag-on-validation);
		border: var(--border-width) solid var(--color-on-surface-opacity-10);
	}
	
	.tag.-client {
		background-color: var(--color-tag-client);
		color: var(--color-tag-on-client);
		border: var(--border-width) solid var(--color-on-surface-opacity-10);
	}
	
	.tag.-migration {
		background-color: var(--color-tag-migration);
		color: var(--color-tag-on-migration);
		border: var(--border-width) solid var(--color-on-surface-opacity-10);
	}

	/* Accessibility: Ensure text isn't too small */
	@media (max-width: 480px) {
		.-nano span {
			font-size: var(--typeface-size-body-micro);
		}
	}

	/* High contrast mode support */
	@media (prefers-contrast: high) {
		.tag {
			border-width: 2px;
		}
		
		.tag.-progress,
		.tag.-planned,
		.tag.-completed,
		.tag.-validation,
		.tag.-client,
		.tag.-migration {
			border-color: currentColor;
		}
	}
</style>
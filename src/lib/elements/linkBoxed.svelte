<script lang="ts">
	export let label: string;
	export let note: string | null | undefined = undefined;
	export let customClass: string | null | undefined = null;
	export let icon: string | null | undefined = null;
	export let url: string | null | undefined = null;
	export let type: 'external' | 'internal' | 'email' = 'internal';
	export let showIcon: boolean = true;
	export let showLabel: boolean = true;
	
	// Derived values based on type
	$: isExternal = type === 'external';
	$: isEmail = type === 'email';
	$: isInternal = type === 'internal';
	
	// Accessibility attributes
	$: target = isExternal ? '_blank' : undefined;
	$: rel = isExternal ? 'noopener noreferrer' : undefined;
	
	// Dynamic aria-label based on type
	$: ariaLabel = isExternal 
		? `${label} (opens in new tab)`
		: isEmail 
		? `Send email to ${label}`
		: label;
	
	// Icon selection based on type
	$: iconName = icon || (isExternal ? 'arrow-out' : isInternal ? 'arrow-right' : 'mail');
	$: iconAlt = isExternal ? 'external link' : isInternal ? 'internal link' : 'email';
	$: shouldShowIcon = showIcon && (icon || isExternal || isInternal);
</script>

<a 
	href={url} 
	class={`linkBoxed ${customClass || ''}`}
	class:external={isExternal}
	class:internal={isInternal}
	class:email={isEmail}
	{target} 
	{rel} 
	aria-label={ariaLabel}
>

	<div class="pairing">
		<span class="body_text -large -bold">{label}</span>
		{#if showLabel && note}
			<span class="body_text -small">{note}</span>
		{/if}
	</div>
	
	{#if shouldShowIcon}
	<div class="icon-wrapper" aria-hidden="true">
		<i class="icon -small">
			<img src={`/icons/mi-${iconName}.webp`} alt={iconAlt} />
		</i>
	</div>
	{/if}
</a>

<style>
	.linkBoxed {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: flex-start;
		gap: var(--space-200);
		padding: var(--space-200);
		background-color: var(--color-surface);
		border: var(--border-width) solid var(--color-on-surface-accent);
		white-space: nowrap;
		cursor: pointer;
		text-decoration: none;
		border-radius: var(--space-none);
        transition-property: background-color, border, color;
		transition-duration: var(--transition-duration-fast);
		transition-timing-function: var(--transition-timing-function);
	}

	span {
		color: var(--color-on-surface);
		transition-property: color;
		transition-duration: var(--transition-duration-nitro);
		transition-timing-function: var(--transition-timing-function);
	}

	.icon-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-100);
		background-color: var(--color-on-surface-accent);
		border-radius: var(--space-50);
		transition-property: background-color;
		transition-duration: var(--transition-duration-nitro);
		transition-timing-function: var(--transition-timing-function);
	}

	i {
		position: relative;
		overflow: hidden;
		display: block;
	}

	i img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
		transition-property: transform;
	}

	/* Base hover styles */
    .linkBoxed:hover:not(:disabled) {  background-color: var(--color-neutral-400); }
	.linkBoxed:hover span { color: var(--color-on-surface); }
	.linkBoxed:hover .icon-wrapper { background-color: var(--color-on-surface-brand);}

	/* External link animation */
	.linkBoxed.external:hover i img {
		animation-name: arrowOutLoop;
		animation-duration: 320ms;
		animation-fill-mode: forwards;
		animation-timing-function: var(--transition-timing-function);
	}

	/* Internal link animation */
	.linkBoxed.internal:hover i img {
		animation-name: arrowRightLoop;
		animation-duration: 320ms;
		animation-fill-mode: forwards;
		animation-timing-function: var(--transition-timing-function);
	}

	/* Email link animation */
	.linkBoxed.email:hover i img {
		animation-name: iconBounce;
		animation-duration: 400ms;
		animation-fill-mode: forwards;
		animation-timing-function: var(--transition-timing-function);
	}

	/* Custom class modifiers */
	.linkBoxed.-full { 
		width: 100%;
		justify-content: space-between;
	}
	
	@media (min-width: 992px) {
		.linkBoxed {
			justify-content: space-between;
		}
		
		.linkBoxed.-full { 
			width: auto;
			/* justify-content: center; */
		}
	}

	.linkBoxed.-small span { 
		font-size: var(--font-size-200); 
	}

	/* Animations */
	@keyframes arrowOutLoop {
		0% { transform: translate3d(0px, 0px, 10px); opacity: 1; }
		50% { transform: translate3d(24px, -24px, 10px); opacity: 1; filter: invert(1); }
		51% { opacity: 0; }
		52% { transform: translate3d(-24px, 24px, 10px); opacity: 0; }
		53% { opacity: 1; }
		100% { transform: translate3d(0px, 0px, 10px); opacity: 1; filter: invert(1); }
	}

	@keyframes arrowRightLoop {
		0% { transform: translateX(0px); opacity: 1; }
		50% { transform: translateX(16px); opacity: 1; filter: invert(1); }
		51% { opacity: 0; }
		52% { transform: translateX(-16px); opacity: 0; }
		53% { opacity: 1; }
		100% { transform: translateX(0px); opacity: 1; filter: invert(1); }
	}

	@keyframes iconBounce {
		0%, 100% { transform: translateY(0px) scale(1); }
		25% { transform: translateY(-4px) scale(1.05); }
		50% { transform: translateY(-2px) scale(1.02); }
		75% { transform: translateY(-6px) scale(1.08); }
	}

	/* Reduced motion support */
	@media (prefers-reduced-motion: reduce) {
		.linkBoxed, .icon-wrapper, span, i img {
			transition: none;
		}
		
		.linkBoxed:hover i img {
			animation: none;
			filter: invert(1);
		}
	}
</style>
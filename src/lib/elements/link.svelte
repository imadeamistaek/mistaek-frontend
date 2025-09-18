<script lang="ts">
	export let label: string;
	export let customClass: string | null | undefined = null;
	export let icon: string | null | undefined = null;
	export let url: string | null | undefined = null;
	export let type: 'external' | 'internal' | 'email' = 'internal';
	
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
</script>

<a 
	href={url} 
	class={`link ${customClass || ''}`}
	class:external={isExternal}
	class:internal={isInternal}
	class:email={isEmail}
	{target} 
	{rel} 
	aria-label={ariaLabel}
>
	<span class="body_text -large -bold">{label}</span>
	
	{#if icon || isExternal || isInternal}
	<div class="icon-wrapper" aria-hidden="true">
		<i class="icon -small">
			<img src={`/icons/mi-${iconName}.webp`} alt={iconAlt} />
		</i>
	</div>
	{/if}
</a>

<style>
	.link {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-200);
		white-space: nowrap;
		cursor: pointer;
		text-decoration: none;
		border-radius: var(--space-100);
		padding: var(--space-50);
		transition: all var(--transition-duration-nitro) var(--transition-timing-function);
	}

	span {
		text-decoration: underline;
		color: var(--color-on-surface-darker);
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
	.link:hover span { color: var(--color-on-surface); }
	.link:hover .icon-wrapper { background-color: var(--color-on-surface-brand);}

	/* External link animation */
	.link.external:hover i img {
		animation-name: arrowOutLoop;
		animation-duration: 320ms;
		animation-fill-mode: forwards;
		animation-timing-function: var(--transition-timing-function);
	}

	/* Internal link animation */
	.link.internal:hover i img {
		animation-name: arrowRightLoop;
		animation-duration: 320ms;
		animation-fill-mode: forwards;
		animation-timing-function: var(--transition-timing-function);
	}

	/* Email link animation */
	.link.email:hover i img {
		animation-name: iconBounce;
		animation-duration: 400ms;
		animation-fill-mode: forwards;
		animation-timing-function: var(--transition-timing-function);
	}

	/* Custom class modifiers */
	.link.-full { 
		width: 100%;
		justify-content: space-between;
	}
	
	@media (min-width: 992px) {
		.link.-full { 
			width: auto;
			/* justify-content: center; */
		}
	}

	.link.-small span { 
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
		.link, .icon-wrapper, span, i img {
			transition: none;
		}
		
		.link:hover i img {
			animation: none;
			filter: invert(1);
		}
	}
</style>
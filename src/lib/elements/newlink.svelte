<script lang="ts">
	/**
	 * Link Component
	 * A flexible link element supporting multiple visual variants,
	 * an optional boxed container, optional icon with optional background,
	 * and an optional note subtitle.
	 *
	 * @prop label - The visible link text
	 * @prop url - The href destination
	 * @prop type - 'internal' | 'external' | 'email'. Controls icon, target, rel, aria-label
	 * @prop variant - Visual style: 'default' | 'subtle' | 'brand' | 'ghost'
	 * @prop boxed - Adds border, background, and padding around the link
	 * @prop note - Optional subtitle text below the label
	 * @prop showIcon - Whether to show the icon. Defaults to true
	 * @prop iconBackground - Whether the icon has its own background pill. Defaults to true
	 * @prop icon - Override the default icon name
	 * @prop customClass - Optional helper classes
	 */
	export let label: string;
	export let url: string | null | undefined = null;
	export let type: 'external' | 'internal' | 'email' = 'internal';
	export let variant: 'default' | 'subtle' | 'brand' | 'ghost' = 'default';
	export let boxed: boolean = false;
	export let note: string | null | undefined = null;
	export let showIcon: boolean = true;
	export let iconBackground: boolean = true;
	export let icon: string | null | undefined = null;
	export let customClass: string | null | undefined = null;

	$: isExternal = type === 'external';
	$: isEmail = type === 'email';
	$: isInternal = type === 'internal';

	$: target = isExternal ? '_blank' : undefined;
	$: rel = isExternal ? 'noopener noreferrer' : undefined;

	$: ariaLabel = isExternal
		? `${label} (opens in new tab)`
		: isEmail
		? `Send email to ${label}`
		: label;

	$: iconName = icon || (isExternal ? 'arrow-out' : isEmail ? 'mail' : 'arrow-right');
	$: iconAlt = isExternal ? 'external link' : isEmail ? 'email' : 'internal link';
	$: shouldShowIcon = showIcon && (icon !== null || isExternal || isInternal || isEmail);
</script>

<a
	href={url}
	class={`link variant--${variant} ${boxed ? 'boxed' : ''} ${customClass || ''}`}
	class:external={isExternal}
	class:internal={isInternal}
	class:email={isEmail}
	class:has-note={!!note}
	{target}
	{rel}
	aria-label={ariaLabel}
>
	<div class="link-content">
		<span class="link-label body_text -large -bold">{label}</span>
		{#if note}
			<span class="link-note body_text -small">{note}</span>
		{/if}
	</div>

	{#if shouldShowIcon}
		<!--
			Icon wrapper: always renders when showIcon is true.
			iconBackground controls whether it has padding and a background pill.
			aria-hidden because the icon is purely decorative.
		-->
		<div
			class="icon-wrapper"
			class:has-background={iconBackground}
			aria-hidden="true"
		>
			<i class="icon -small">
				<img src={`/icons/mi-${iconName}.webp`} alt={iconAlt} />
			</i>
		</div>
	{/if}
</a>

<style>
	/* ------------------------------------------------------------------ */
	/* BASE */
	/* ------------------------------------------------------------------ */

	.link {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: flex-start;
		gap: var(--space-200);
		white-space: nowrap;
		cursor: pointer;
		text-decoration: none;
		transition-property: background-color, border-color, color;
		transition-duration: var(--transition-duration-fast);
		transition-timing-function: var(--transition-timing-function);
	}

	.link-content {
		display: flex;
		flex-direction: column;
		gap: var(--space-50);
	}

	.link-label {
		transition-property: color;
		transition-duration: var(--transition-duration-nitro);
		transition-timing-function: var(--transition-timing-function);
	}

	.link-note {
		transition-property: color;
		transition-duration: var(--transition-duration-nitro);
		transition-timing-function: var(--transition-timing-function);
	}

	/* ------------------------------------------------------------------ */
	/* BOXED MODIFIER */
	/* Adds container treatment on top of any variant.
	/* ------------------------------------------------------------------ */

	.link.boxed {
		padding: var(--space-200);
		/* border: var(--border-width) solid var(--color-on-surface-accent); */
	}

	/* ------------------------------------------------------------------ */
	/* ICON WRAPPER */
	/* ------------------------------------------------------------------ */

	.icon-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		transition-property: background-color;
		transition-duration: var(--transition-duration-nitro);
		transition-timing-function: var(--transition-timing-function);
	}

	/**
	 * has-background adds the pill treatment to the icon.
	 * Without it, the icon sits flush with no padding or background.
	 */
	.icon-wrapper.has-background {
		padding: var(--space-100);
		background-color: var(--color-on-surface-accent);
		border-radius: var(--space-50);
	}

	.icon-wrapper i {
		position: relative;
		overflow: hidden;
		display: block;
	}

	.icon-wrapper i img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
		transition-property: transform;
	}

	/* ------------------------------------------------------------------ */
	/* VARIANT: DEFAULT */
	/* Underlined label, icon with background by default. */
	/* ------------------------------------------------------------------ */
	.variant--default .link-label { color: var(--color-on-surface); }
	.variant--default:hover .link-label { color: var(--color-on-surface); }
	.variant--default.boxed { background-color: var(--color-surface); }
	.variant--default.boxed:hover { background-color: var(--color-neutral-400); }
    .variant--default:hover .icon-wrapper.has-background { background-color: var(--color-on-surface); }

    /* ------------------------------------------------------------------ */
	/* VARIANT: BRAND */
	/* Uses brand accent color for emphasis. */
	/* ------------------------------------------------------------------ */
	.variant--brand .link-label { color: var(--color-brand-accent); }
	.variant--brand:hover .link-label { color: var(--color-brand-accent-darker); }
	.variant--brand.boxed { background-color: var(--color-brand-accent); border-color: var(--color-brand-accent); }
	.variant--brand.boxed .link-label { color: var(--color-surface); }
	.variant--brand.boxed:hover { background-color: var(--color-brand-accent-darker); }
	.variant--brand.boxed:hover .link-label { color: var(--color-on-surface); }
	.variant--brand:hover .icon-wrapper.has-background { background-color: var(--color-on-surface); }
	/* .variant--brand:hover .icon-wrapper.has-background i img { filter: invert(1); } */

	/* ------------------------------------------------------------------ */
	/* VARIANT: SUBTLE */
	/* No underline, muted color, low visual weight. */
	/* ------------------------------------------------------------------ */

	.variant--subtle .link-label { color: var(--color-on-surface); }
	.variant--subtle:hover .link-label { color: var(--color-on-surface); }
	.variant--subtle.boxed { background-color: var(--color-on-surface-opacity-10); }
	.variant--subtle.boxed:hover { background-color: var(--color-on-surface-opacity-20); }
	.variant--subtle:hover .icon-wrapper.has-background { background-color: var(--color-on-surface); }

	/* ------------------------------------------------------------------ */
	/* VARIANT: GHOST */
	/* Transparent background, border only when boxed. */
	/* ------------------------------------------------------------------ */

	.variant--ghost .link-label { color: var(--color-on-surface); }
	.variant--ghost:hover .link-label { color: var(--color-on-surface); }
	.variant--ghost.boxed { background-color: transparent; }
	.variant--ghost.boxed:hover { background-color: var(--color-on-surface-opacity-10); }
	.variant--ghost:hover .icon-wrapper.has-background { background-color: var(--color-on-surface); }

	/* ------------------------------------------------------------------ */
	/* ICON ANIMATIONS */
	/* ------------------------------------------------------------------ */

	.link.external:hover .icon-wrapper i img {
		animation-name: arrowOutLoop;
		animation-duration: 320ms;
		animation-fill-mode: forwards;
		animation-timing-function: var(--transition-timing-function);
	}

	.link.internal:hover .icon-wrapper i img {
		animation-name: arrowRightLoop;
		animation-duration: 320ms;
		animation-fill-mode: forwards;
		animation-timing-function: var(--transition-timing-function);
	}

	.link.email:hover .icon-wrapper i img {
		animation-name: iconBounce;
		animation-duration: 400ms;
		animation-fill-mode: forwards;
		animation-timing-function: var(--transition-timing-function);
	}

	/* ------------------------------------------------------------------ */
	/* UTILITY MODIFIERS */
	/* ------------------------------------------------------------------ */

	.link.-full {
		width: 100%;
		justify-content: space-between;
	}

	/* ------------------------------------------------------------------ */
	/* ANIMATIONS */
	/* ------------------------------------------------------------------ */

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

	/* ------------------------------------------------------------------ */
	/* REDUCED MOTION */
	/* ------------------------------------------------------------------ */

	@media (prefers-reduced-motion: reduce) {
		.link,
		.link-label,
		.link-note,
		.icon-wrapper {
			transition: none;
		}

		.link:hover .icon-wrapper i img {
			animation: none;
			filter: invert(1);
		}
	}
</style>
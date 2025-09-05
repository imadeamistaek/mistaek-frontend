<script lang="ts">
	export let label: string;
	export let customClass: string | null | undefined;
	export let icon: string | null | undefined;
	export let url: string | null | undefined;
	export let mail: boolean = false;
</script>

<a href={url} class={`${customClass}`} target={`${mail? '' : '_blank'}`} rel={`${mail ? '' : 'noopener noreferrer'}`} aria-label={`${label} (opens in new tab)`}>
    <p class="body_text -large -bold">{label}</p>
	{#if icon}
	<div class="icon-wrapper">
		<i class="icon -small" aria-hidden="true">
			<img src={`/icons/mi-${icon}.webp`} alt="arrow-out">
		</i>
	</div>
	{/if}
</a>

<style>
    a {
		position: relative;
		display: inline-flex;
		justify-content: center;
		gap: var(--space-200);
		white-space: nowrap;
		cursor: pointer;
	}

	p {
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

	a.-full { justify-content: space-between;}
	@media (min-width: 992px) {
		a.-full { justify-content: center;}
	}

	a.-small p { font-size: var(--font-size-200); }

	a:hover p { color: var(--color-on-surface); }
	a:hover .icon-wrapper { background-color: var(--color-on-surface-brand) }
	a:hover i img {
		animation-name: arrowOutLoop;
		animation-duration: 320ms;
		animation-fill-mode: forwards;
		animation-timing-function: var(--transition-timing-function);
	}

	@keyframes arrowOutLoop {
		0% { transform: translate3d(0px, 0px, 10px); opacity: 1; }
		50% { transform: translate3d(24px, -24px, 10px); opacity: 1; filter: invert(1); }
		51% { opacity: 0; }
		52% { transform: translate3d(-24px, 24px, 10px); opacity: 0; }
		53% { opacity: 1; }
		100% { transform: translate3d(0px, 0px, 10px); opacity: 1; filter: invert(1); }
	}
</style>
<script lang="ts">
	let yes = $state(false);
</script>

<label class="checkbox">
	<input type="checkbox" bind:checked={yes} />
	<i class="icon" aria-hidden="true"><img src={`/icons/mi-checkb.webp`} alt="check icon"></i>
	Yes! Send me regular email spam
</label>

<style>
	label.checkbox {
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: var(--space-300);
	}
	input[type="checkbox"] {
		-webkit-appearance: none;
  		appearance: none;
		margin: 0;
		width: var(--space-400);
		height: var(--space-400);
		background-color: var(--color-surface);
		border: var(--border-width) solid var(--color-on-surface-accent);
		border-radius: var(--border-radius-sm);
		transition-property: background-color;
		transition-duration: var(--transition-duration-nitro);
		transition-timing-function: var(--transition-timing-function);
	}
	i {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		transform: scale(0%);
		transition-property: transform;
		transition-duration: var(--transition-duration-nitro);
		transition-timing-function: var(--transition-timing-function);
	}

	input[type="checkbox"]:checked {background-color: var(--color-on-surface);}
	input[type="checkbox"]:checked ~ i {transform: scale(100%);}
</style>

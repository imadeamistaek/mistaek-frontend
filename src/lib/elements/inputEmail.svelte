<label>
	Your email address
	<input type="email" name="magnet_email" required>
</label>

<style>
	label {
		display: flex;
		flex-direction: column;
		gap: var(--space-100);
		font-size: var(--font-size-200);
		color: var(--color-on-surface);
	}

	input {
		padding: var(--space-200);
		border: var(--border-width) solid var(--color-on-surface-opacity-10);
		background-color: var(--color-on-surface-accent);
		color: var(--color-on-surface);
		font-size: inherit;
	}

	input:focus {
		outline: var(--border-width-l) solid var(--color-surface);
		box-shadow: 0 0 0 6px var(--color-brand-accent);	
	}
</style>
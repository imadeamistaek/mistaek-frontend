<div class="background-grid">
	<div class="grid-container">
		<span class="col -l"></span>
		<span class="col -l"></span>
		<span class="col -ll"></span>
		<span class="col -r"></span>
		<span class="col -r"></span>
		<span class="col -r"></span>
	</div>
</div>

<style>
	div.background-grid {
		position: fixed;
		z-index: -1;
		top: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		padding: 0 80px;
		display: flex;
		justify-content: center;
	}
	div.grid-container {
		max-width: var(--max-width-container);
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: row;
		/* border: var(--border-width) solid var(--color-on-surface-accent); */
		border-top: 0;
		border-bottom: 0;
	}
	span {
		flex: 1;
		display: block;
		height: 100%;
	}
	span.-l { border-left: var(--border-width) solid var(--color-on-surface-accent);}
	span.-r { border-right: var(--border-width) solid var(--color-on-surface-accent);}
	span.-ll { border-right: var(--border-width) solid var(--color-on-surface-accent); border-left: var(--border-width) solid var(--color-on-surface-accent);}
</style>
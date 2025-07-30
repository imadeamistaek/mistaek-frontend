<script lang="ts">
	export let label: string;
</script>

<div class="tag">
	<p class="body_text -large">{label}</p>
</div>

<style>
	/* ---------------------------------------------------------------------------------------------------- */
	/* TAG */
	/*
	/* All the styles necessary to style the tag component
	/* ---------------------------------------------------------------------------------------------------- */
	.tag {
		width: fit-content;
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
	}
</style>
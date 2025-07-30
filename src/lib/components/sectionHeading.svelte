<script lang="ts">
  import Tag from "$lib/components/tag.svelte";
  export let label: string;
</script>

<div class="section_heading">
	<Tag label="{label}"/>
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: var(--space-800);
	}
</style>
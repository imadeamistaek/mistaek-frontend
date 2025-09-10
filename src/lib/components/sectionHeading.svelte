<script lang="ts">
  import Tag from "$lib/elements/tag.svelte";
  export let label: string;
  export let sectionCustomClass: string | null | undefined;
</script>

<div class={`section_heading ${sectionCustomClass}`}>
	<Tag customClass="" label="{label}"/>
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: var(--space-800);
	}
</style>
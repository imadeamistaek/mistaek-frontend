<script lang="ts">
  import Tag from '$lib/components/tag.svelte';
  import SectionHeading from '$lib/components/sectionHeading.svelte';
</script>

<section>
	<Tag label="Headings" />
	<h1>Is your startup ready for a Design System?</h1>
	<h2>Is your startup ready for a Design System?</h2>
	<h3>Is your startup ready for a Design System?</h3>
	<h4>Is your startup ready for a Design System?</h4>
	<h5>Is your startup ready for a Design System?</h5>
	<h6>Is your startup ready for a Design System?</h6>
</section>

<section>
	<Tag label="Paragraph" />
	<p class="body_text -large">This quick, no-fluff checklist helps you find out if it’s the right time to build a Design System — and where to start if it is.</p>
	<p class="body_text -medium">This quick, no-fluff checklist helps you find out if it’s the right time to build a Design System — and where to start if it is.</p>
	<p class="body_text -small">This quick, no-fluff checklist helps you find out if it’s the right time to build a Design System — and where to start if it is.</p>
	<p class="body_text -micro">This quick, no-fluff checklist helps you find out if it’s the right time to build a Design System — and where to start if it is.</p>
	<p class="body_text -nano">This quick, no-fluff checklist helps you find out if it’s the right time to build a Design System — and where to start if it is.</p>
</section>

<section>
	<SectionHeading label="Test">
		<h4>This is an example of a Section Heading component</h4>
		<p class="body_text -large"><b>This component</b> allows me to add whatever I want on the inside, allowing me to defined which heading tag I should use to help me with accessibility concerns.</p>
	</SectionHeading>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 64px;
		padding: 160px 0;
	}
</style>
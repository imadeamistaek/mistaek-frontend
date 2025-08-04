<script lang="ts">
	export let customClass: string | null | undefined;
	export let quote: string;
	export let photo: string;
	export let altText: string;
	export let author: string;
	export let job: string;
</script>

<div class={`testimonial ${customClass}`}>
	<div class="quote">
		<p class="body_text -medium">{quote}</p>
	</div>
	
	<div class="author">
		<img src={photo} alt={altText} class="testimonial-photo" />
		<div class="details">
			<p class="body_text -small">{author}</p>
			<p class="body_text -micro -subtle">{job}</p>
		</div>
	</div>
</div>

<style>
	.testimonial {
		display: flex;
		flex-direction: column;
		gap: var(--space-700);
		padding: var(--space-700);
		background-color: var(--color-surface);
		border: var(--border-width) solid var(--color-on-surface-accent);
	}
	.author {
		display: flex;
		flex-direction: row;
		gap: var(--space-200);
		align-items: center;
	}
	img {
		max-width: var(--space-500);
		max-height: var(--space-500);
		width: 100%;
		display: block;
		object-fit: cover;
		border: var(--border-width) solid var(--color-on-surface-accent);
		border-radius: var(--border-radius-max);
	}
</style>
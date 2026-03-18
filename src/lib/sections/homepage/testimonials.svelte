<script>
    import Tag from "$lib/elements/tag.svelte";
    import Grid from "$lib/components/grid.svelte";
	import List from '$lib/components/list.svelte';
	import Box from '$lib/elements/box.svelte';
    import Testimonial from "$lib/components/testimonial.svelte";
</script>

<section class="container" aria-labelledby="testimonials_title">
	<Grid customClass="-cols-6 -gap-vm">
		<Tag label="Testimonials" customClass="-nano col-1 col-start-1" />
		<p id="testimonials_title" class="h4 col-6 col-start-1 md:col-3 md:col-start-1">Your sprints are fast because we’ve spent 10+ years building systems for complex data</p>
		<div class="pairing col-6 col-start-1 md:col-2 md:col-start-5 -spaced">
			<p class="body_text -small -contained-xl">We've built design systems for fintech, insurance, and education. Places where data accuracy matters and getting it wrong has consequences.</p>
			<p class="body_text -small -contained-xl">Now we're applying that to sustainability tech.</p>
		</div>

		<List customClass="col-6 col-start-1 -padding-none">
			<Box as="li" customClass="-align-top -aspect-square -padding-s" boxed>
				<Testimonial
					customClass="col-2 -items-vbetween"
					quote="“Mistaek blends creativity with clear thinking — Every solution is user-centred and grounded in strategy. Their work consistently elevates the quality of the project, and their reliability makes them someone you want on your team. If you’re looking for experienced UX designers who truly make a difference, they're the ones.”"
					photo="/people/beatrizbotao.jpeg"
					altText="Photo in black and white of Beatriz Botão"
					author="Beatriz Botão"
					job="Co-Founder & Strategy Lead @ The Eggwhite"
				/>
			</Box>
			<Box as="li" customClass="-align-top -aspect-square -padding-s" boxed>
				<Testimonial
					customClass="col-2 -items-vbetween"
					quote="“Mistaek brings a rare blend of creativity and technical skill — they are both exceptional designers and capable developers. Their dedication, passion, and quality of work stand out in every stage, from brand strategy to execution. I’d recommend them to anyone looking for someone who can deliver both vision and results.”"
					photo="/people/carlosquadrado.jpeg"
					altText="Photo in black and white of Carlos Quadrado"
					author="Carlos Quadrado"
					job="Data Lead @ Comon"
				/>
			</Box>
			<Box as="li" customClass="-align-top -aspect-square -padding-s" boxed>
				<Testimonial
					customClass="col-2 -items-vbetween"
					quote="Mistaek stands out in high-stakes environments with a rare mix of creativity, strategic thinking, and focus on real results. They work with autonomy, bring clarity to complex challenges, and always keeps business goals in sight. If you need someone who delivers great UX and elevates the whole team — Mistaek is that team.”"
					photo="/people/michaelnunes.jpeg"
					altText="Photo in black and white of Michael Nunes"
					author="Michael Nunes"
					job="Chied Design Officer @ Monday"
				/>
			</Box>
		</List>
	</Grid>
</section>
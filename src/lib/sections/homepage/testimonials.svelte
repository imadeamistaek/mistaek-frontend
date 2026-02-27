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
		<h6 id="testimonials_title" class="h4 col-6 col-start-1 md:col-3 md:col-start-1">Your sprints are fast because we’ve spent 10+ years building systems for complex data</h6>
		<div class="pairing col-6 col-start-1 md:col-2 md:col-start-5 -spaced">
			<p class="body_text -small -contained-xl">We've built design systems for complex regulated domains like fintech, insurance, and education. Places where data accuracy and trust matter. Where getting it wrong has consequences.</p>
			<p class="body_text -small -contained-xl">Now we’re applying that expertise to environmental science and nature tech. Because the planet needs products that work as well as the science behind them.</p>
		</div>

		<List customClass="col-6 col-start-1 -padding-none" horizontal>
			<Box as="li" customClass="-align-top -aspect-square -padding-s" boxed>
				<Testimonial
					customClass="col-2 -items-vbetween"
					quote="“André blends creativity with clear thinking — every solution is user-centered and grounded in strategy. His work consistently elevates the quality of the project, and his reliability makes him someone you want on your team. If you’re looking for an experienced UX designer who truly makes a difference, he’s the one.”"
					photo="/people/beatrizbotao.jpeg"
					altText="Photo in black and white of Beatriz Botão"
					author="Beatriz Botão"
					job="Co-Founder & Strategy Lead @ The Eggwhite"
				/>
			</Box>
			<Box as="li" customClass="-align-top -aspect-square -padding-s" boxed>
				<Testimonial
					customClass="col-2 -items-vbetween"
					quote="“André brings a rare blend of creativity and technical skill — he’s both an exceptional designer and a capable developer. His dedication, passion, and quality of work stand out in every stage, from brand strategy to execution. I’d recommend him to anyone looking for someone who can deliver both vision and results.”"
					photo="/people/carlosquadrado.jpeg"
					altText="Photo in black and white of Carlos Quadrado"
					author="Carlos Quadrado"
					job="Data Lead @ Comon"
				/>
			</Box>
			<Box as="li" customClass="-align-top -aspect-square -padding-s" boxed>
				<Testimonial
					customClass="col-2 -items-vbetween"
					quote="“André stands out in high-stakes environments with a rare mix of creativity, strategic thinking, and focus on real results. He works with autonomy, brings clarity to complex challenges, and always keeps business goals in sight. If you need someone who delivers great UX and elevates the whole team — André is that person.”"
					photo="/people/michaelnunes.jpeg"
					altText="Photo in black and white of Michael Nunes"
					author="Michael Nunes"
					job="Chied Design Officer @ Monday"
				/>
			</Box>
		</List>
	</Grid>
</section>
<script>
    import Tag from "$lib/components/tag.svelte";
    import Grid from "$lib/components/grid.svelte";
    import Testimonial from "$lib/components/testimonial.svelte";
</script>

<section>
    <Tag customClass="-large" label="Testimonials" />
    <h3 class="h3 col-4 col-start-1">Don’t just take our word for it...</h3>
    <Grid customClass="col-6 col-start-1">
		<Testimonial
			customClass="col-2"
			quote="“André blends creativity with clear thinking — every solution is user-centered and grounded in strategy. His work consistently elevates the quality of the project, and his reliability makes him someone you want on your team. If you’re looking for an experienced UX designer who truly makes a difference, he’s the one.”"
			photo="/people/beatrizbotao.jpeg"
			altText="Photo in black and white of Beatriz Botão"
			author="Beatriz Botão"
			job="Co-Founder & Strategy Lead @ The Eggwhite"
		/>
		<Testimonial
			customClass="col-2"
			quote="“André brings a rare blend of creativity and technical skill — he’s both an exceptional designer and a capable developer. His dedication, passion, and quality of work stand out in every stage, from brand strategy to execution. I’d recommend him to anyone looking for someone who can deliver both vision and results.”"
			photo="/people/carlosquadrado.jpeg"
			altText="Photo in black and white of Carlos Quadrado"
			author="Carlos Quadrado"
			job="Data Lead @ Comon"
		/>
		<Testimonial
			customClass="col-2"
			quote="“André stands out in high-stakes environments with a rare mix of creativity, strategic thinking, and focus on real results. He works with autonomy, brings clarity to complex challenges, and always keeps business goals in sight. If you need someone who delivers great UX and elevates the whole team — André is that person.”"
			photo="/people/beatrizbotao.jpeg"
			altText="Photo in black and white of Michael Nunes"
			author="Michael Nunes"
			job="Chied Design Officer @ Monday"
		/>
	</Grid>
</section>
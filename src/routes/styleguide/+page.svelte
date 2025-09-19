<script lang="ts">
	import Tag from '$lib/elements/tag.svelte';
	import IconItem from '$lib/elements/iconItem.svelte';
    import Box from '$lib/elements/box.svelte';
    import List from '$lib/components/list.svelte';
    import Grid from '$lib/components/grid.svelte';
    import Footer from '$lib/components/footer.svelte';
	import Modal from '$lib/components/modal.svelte';
    import InputEmail from '$lib/elements/inputEmail.svelte';
    import Button from '$lib/elements/button.svelte';
    import Anchor from '$lib/elements/anchor.svelte';
    import CardCreator from '$lib/components/cardCreator.svelte';
	let showModal = $state(false);
</script>

<section>
	<Grid customClass="-cols-6">
		<Box customClass="col-6 col-start-1 -gap-vl -padding-vl">
			<Tag label="Headings" customClass="-nano" />
			<h1>Is your startup ready for a Design System?</h1>
			<h2>Is your startup ready for a Design System?</h2>
			<h3>Is your startup ready for a Design System?</h3>
			<h4>Is your startup ready for a Design System?</h4>
			<h5>Is your startup ready for a Design System?</h5>
			<h6>Is your startup ready for a Design System?</h6>
		</Box>
	</Grid>
</section>

<section>
	<Grid customClass="-cols-6">
		<Box customClass="col-6 col-start-1 -gap-vl -padding-vl">
			<Tag label="Paragraphs" customClass="-nano" />
			<p class="body_text -large">This quick, no-fluff checklist helps you find out if it’s the right time to build a Design System — and where to start if it is.</p>
			<p class="body_text -medium">This quick, no-fluff checklist helps you find out if it’s the right time to build a Design System — and where to start if it is.</p>
			<p class="body_text -small">This quick, no-fluff checklist helps you find out if it’s the right time to build a Design System — and where to start if it is.</p>
			<p class="body_text -micro">This quick, no-fluff checklist helps you find out if it’s the right time to build a Design System — and where to start if it is.</p>
			<p class="body_text -nano">This quick, no-fluff checklist helps you find out if it’s the right time to build a Design System — and where to start if it is.</p>
		</Box>
	</Grid>
</section>

<section>
	<Grid customClass="-cols-6">
		<Box customClass="col-6 col-start-1 -gap-vl -padding-vl">
			<Tag label="Buttons" customClass="-nano" />
			<Button variant="brand" label="Button" icon="arrow-out" iconPosition="right"/>
			<Button variant="default" label="Button" icon="arrow-out" iconPosition="right"/>
			<Button variant="subtle" label="Button" icon="arrow-out" iconPosition="right"/>
		</Box>
	</Grid>
</section>

<section>
	<Grid customClass="-cols-6">
		<Box customClass="col-6 col-start-1 -gap-vl -padding-vl">
			<Tag label="Anchors" customClass="-nano" />
			<Anchor variant="brand" label="test" href="#"/>
			<Anchor variant="default" label="test" href="#"/>
			<Anchor variant="subtle" label="test" href="#"/>
		</Box>
	</Grid>
</section>

<section>
	<Grid customClass="-cols-6">
		<Box customClass="col-6 col-start-1 -gap-vl -padding-vl">
			<Tag label="Box" customClass="-nano" />
			<Box boxed customClass="-padding-l">
				<p class="body_text -large">[Clarity] over complexity</p>
				<p class="body_text -large -subtle">It breaks down the key questions into plain language. No jargon, no endless theory. Just what you need to make a smart decision.</p>
			</Box>
		</Box>
	</Grid>
</section>

<section>
	<Grid customClass="-cols-6">
		<Box customClass="col-6 col-start-1 -gap-vl -padding-vl">
			<Tag label="List Items" customClass="-nano" />
			<List customClass="">
				<IconItem as="li" icon="checkw" label="A clear picture of your team’s current stage" customClass="-micro"/>
				<IconItem as="li" icon="checkw" label="A clear picture of your team’s current stage" customClass="-micro"/>
				<IconItem as="li" icon="checkw" label="A clear picture of your team’s current stage" customClass="-micro"/>
			</List>
			<List customClass="">
				<IconItem as="li" boxed icon="checkw" label="A clear picture of your team’s current stage" customClass="-micro"/>
				<IconItem as="li" boxed icon="checkw" label="A clear picture of your team’s current stage" customClass="-micro"/>
				<IconItem as="li" boxed icon="checkw" label="A clear picture of your team’s current stage" customClass="-micro"/>
			</List>
		</Box>
	</Grid>
</section>

<!-- <section>
	<Tag customClass="-large" label="Testimonial" />
	<Testimonial
		customClass=""
		quote="“André blends creativity with clear thinking — every solution is user-centered and grounded in strategy. His work consistently elevates the quality of the project, and his reliability makes him someone you want on your team. If you’re looking for an experienced UX designer who truly makes a difference, he’s the one.”"
		photo="/people/beatrizbotao.jpeg"
		altText="Photo in black and white of Beatriz Botão"
		author="Beatriz Botão"
		job="Co-Founder & Strategy Lead @ The Eggwhite"
	/>
	<Grid customClass="">
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
			quote="“André blends creativity with clear thinking — every solution is user-centered and grounded in strategy. His work consistently elevates the quality of the project, and his reliability makes him someone you want on your team. If you’re looking for an experienced UX designer who truly makes a difference, he’s the one.”"
			photo="/people/beatrizbotao.jpeg"
			altText="Photo in black and white of Beatriz Botão"
			author="Beatriz Botão"
			job="Co-Founder & Strategy Lead @ The Eggwhite"
		/>
		<Testimonial
			customClass="col-2"
			quote="“André blends creativity with clear thinking — every solution is user-centered and grounded in strategy. His work consistently elevates the quality of the project, and his reliability makes him someone you want on your team. If you’re looking for an experienced UX designer who truly makes a difference, he’s the one.”"
			photo="/people/beatrizbotao.jpeg"
			altText="Photo in black and white of Beatriz Botão"
			author="Beatriz Botão"
			job="Co-Founder & Strategy Lead @ The Eggwhite"
		/>
	</Grid>
</section> -->

<section>
	<Grid customClass="-cols-6">
		<Box customClass="col-6 col-start-1 -gap-vl -padding-vl">
			<Tag label="Creator Card" customClass="-nano" />
			<CardCreator photo="/people/andre.png" altText="A black and white portrait of André resting his head on his hand, looking at the camera with a thoughtful look, wearing a black wool sweater." />
		</Box>
	</Grid>
</section>

<section>
	<Grid customClass="-cols-6">
		<Box customClass="col-6 col-start-1 -gap-vl -padding-vl">
			<Tag label="Footer" customClass="-nano" />
			<Footer/>
		</Box>
	</Grid>
</section>

<section>
	<Grid customClass="-cols-6">
		<Box customClass="col-6 col-start-1 -gap-vl -padding-vl">
			<Tag label="Modal" customClass="-nano" />

			<p class="h6">This is the modal that will appear once the user finishes the checklist and is to insert their data in order to get the pdf</p>
			<Button variant="brand" label="Open Modal" on:click={() => (showModal = true)}/>

			<Modal bind:showModal>
				{#snippet header()}
					<p class="h5">Get your custom action plan</p>
					<p class="body_text -large -contained-l">Your personalized roadmap to design system success, delivered in minutes.</p>
					<p class="body_text -micro -subtle -contained-l">I'll email you a complete breakdown of your assessment, including:</p>
				{/snippet}

				{#snippet body()}	
					<List customClass="" vertical>
						<IconItem as="li" icon="checkg" label="Your score explanation and what it really means for your product's future" customClass="-micro"/>
						<IconItem as="li" icon="checkg" label="Specific, prioritised next steps you can tackle this week" customClass="-micro"/>
						<IconItem as="li" icon="checkg" label="Bonus insights and strategies I've used helping startups avoid expensive mistakes" customClass="-micro"/>
					</List>
					<List customClass="" vertical>
						<IconItem as="li" icon="checkw" label="This PDF isn't fully accessible yet. If you need a screen-reader friendly version, just email hello@mistaek.com and I'll send you one personally." customClass="-micro -subtle"/>
					</List>
				{/snippet}

				{#snippet footer()}
					<form method="POST">
						<InputEmail />
						<Button variant="brand" label="Send me the report"/>
					</form>
				{/snippet}
			</Modal>
		</Box>
	</Grid>
</section>
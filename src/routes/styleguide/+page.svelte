<script lang="ts">
	import Tag from '$lib/elements/tag.svelte';
	import IconItem from '$lib/elements/iconItem.svelte';
    import Box from '$lib/elements/box.svelte';
    import List from '$lib/components/list.svelte';
    import Grid from '$lib/components/grid.svelte';
    import Footer from '$lib/components/footer.svelte';
	import Modal from '$lib/components/modal.svelte';
    import Button from '$lib/elements/button.svelte';
    import Anchor from '$lib/elements/anchor.svelte';
    import CardCreator from '$lib/components/cardCreator.svelte';
	import MagnetForm from '$lib/components/magnetForm.svelte';
    import Checkbox from '$lib/elements/checkbox.svelte';
    import Input from '$lib/elements/input.svelte';
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
			<Tag label="Checkbox" customClass="-nano" />
			<Checkbox id="checkbox1" name="checkbox1" label="I agree to the terms and conditions" required error="test" />
		</Box>
	</Grid>
</section>

<section>
	<Grid customClass="-cols-6">
		<Box customClass="col-6 col-start-1 -gap-vl -padding-vl">
			<Tag label="Input" customClass="-nano" />
			<Input id="input1" name="input1" label="Full Name" placeholder="Enter your full name" required />
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
					<p class="h5">Get your honest assessment results</p>
					<p class="body_text -large -contained-l">Your custom action plan based on where your team actually is right now.</p>
					<p class="body_text -micro -subtle -contained-l">We'll send you a detailed breakdown of your assessment, including:</p>
				{/snippet}

				{#snippet body()}	
					<List customClass="-padding-none" vertical>
						<IconItem as="li" icon="checkg" label="Your score and what it means for your specific situation" customClass="-micro"/>
						<IconItem as="li" icon="checkg" label="Next steps prioritized by what will actually move the needle" customClass="-micro"/>
						<IconItem as="li" icon="checkg" label="Common mistakes we've seen teams make at your stage" customClass="-micro"/>
						<IconItem as="li" icon="checkg" label="Resources to help you build the right foundation" customClass="-micro"/>
					</List>
					<List customClass="-padding-none" vertical>
						<IconItem as="li" icon="infow" label="This PDF isn't fully accessible yet (we practice what we preach about showing work in progress). Need a screen-reader friendly version? Email hello@mistaek.com and we'll send one within 24 hours." customClass="-micro -subtle"/>
					</List>
				{/snippet}

				{#snippet footer()}
					<form method="POST">
						<Input id="email" name="email" label="Email address" placeholder="" required customClass="-margin-b"/>
						<Button variant="brand" label="Send me the report"/>
					</form>
					<!-- <MagnetForm
					  	{form}
						score={$totalScore}
						resultTitle={result.title}
						resultData={{ selectedItems: Array.from($selectedItems) }}
					/> -->
				{/snippet}
			</Modal>
		</Box>
	</Grid>
</section>
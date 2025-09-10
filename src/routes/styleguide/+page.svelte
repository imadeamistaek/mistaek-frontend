<script lang="ts">
	import Tag from '$lib/elements/tag.svelte';
	import SectionHeading from '$lib/components/sectionHeading.svelte';
	import ListItem from '$lib/elements/listItem.svelte';
    import Box from '$lib/elements/box.svelte';
    import List from '$lib/components/list.svelte';
    import Testimonial from '$lib/components/testimonial.svelte';
    import Grid from '$lib/components/grid.svelte';
    import CardFounder from '$lib/components/cardFounder.svelte';
    import CtaSection from '$lib/components/ctaSection.svelte';
    import ChecklistStepper from '$lib/components/checklistStepper.svelte';
    import Footer from '$lib/components/footer.svelte';
	import Modal from '$lib/components/modal.svelte';

	import Button from '$lib/elements/button.svelte';
    import InputEmail from '$lib/elements/inputEmail.svelte';
	let showModal = $state(false);
</script>

<section class="-flex">
	<Tag customClass="-large" label="Headings" />
	<h1>Is your startup ready for a Design System?</h1>
	<h2>Is your startup ready for a Design System?</h2>
	<h3>Is your startup ready for a Design System?</h3>
	<h4>Is your startup ready for a Design System?</h4>
	<h5>Is your startup ready for a Design System?</h5>
	<h6>Is your startup ready for a Design System?</h6>
</section>

<section class="-flex">
	<Tag customClass="-large" label="Paragraph" />
	<p class="body_text -large">This quick, no-fluff checklist helps you find out if it’s the right time to build a Design System — and where to start if it is.</p>
	<p class="body_text -medium">This quick, no-fluff checklist helps you find out if it’s the right time to build a Design System — and where to start if it is.</p>
	<p class="body_text -small">This quick, no-fluff checklist helps you find out if it’s the right time to build a Design System — and where to start if it is.</p>
	<p class="body_text -micro">This quick, no-fluff checklist helps you find out if it’s the right time to build a Design System — and where to start if it is.</p>
	<p class="body_text -nano">This quick, no-fluff checklist helps you find out if it’s the right time to build a Design System — and where to start if it is.</p>
</section>

<section class="-flex">
	<Tag customClass="-large" label="Section Heading" />
	<SectionHeading sectionCustomClass="" label="Test">
		<h4>This is an example of a Section Heading component</h4>
		<p class="body_text -large"><b>This component</b> allows me to add whatever I want on the inside, allowing me to defined which heading tag I should use to help me with accessibility concerns.</p>
	</SectionHeading>
</section>

<section class="-flex">
	<Tag customClass="-large" label="Pairing Box" />
	<Box customClass="">
		<p class="body_text -large">[Clarity] over complexity</p>
    	<p class="body_text -large -subtle">It breaks down the key questions into plain language. No jargon, no endless theory. Just what you need to make a smart decision.</p>
	</Box>
</section>

<section class="-flex">
	<Tag customClass="-large" label="List Items" />
	<List customClass="">
		<ListItem as="li" icon="checkw" label="A clear picture of your team’s current stage" customClass="-micro"/>
		<ListItem as="li" icon="checkw" label="A clear picture of your team’s current stage" customClass="-micro"/>
		<ListItem as="li" icon="checkw" label="A clear picture of your team’s current stage" customClass="-micro"/>
	</List>
	<List customClass="">
		<ListItem as="li" boxed icon="checkw" label="A clear picture of your team’s current stage" customClass="-micro"/>
		<ListItem as="li" boxed icon="checkw" label="A clear picture of your team’s current stage" customClass="-micro"/>
		<ListItem as="li" boxed icon="checkw" label="A clear picture of your team’s current stage" customClass="-micro"/>
	</List>
</section>

<section class="-flex">
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
</section>

<section class="-flex">
	<Tag customClass="-large" label="Fit" />
	<Grid customClass="">
		<Box customClass="col-3 -space-m">
			<p class="h6">We'll probably work well together if...</p>
			<List customClass="" vertical gapped>
				<ListItem as="li" icon="checkg" label="You’re building something meaningful in biotech, climate tech, accessibility, or sustainability — and want your brand and product to reflect that." customClass="-small"/>
				<ListItem as="li" icon="checkg" label="You care about clarity, usability, accessibility, and doing things right — not just quickly." customClass="-small"/>
				<ListItem as="li" icon="checkg" label="You want a design partner who brings structure, strategy, and clear thinking to your chaos." customClass="-small"/>
				<ListItem as="li" icon="checkg" label="You’re open to ideas, trust the process, and want someone who’ll challenge your assumptions (kindly)." customClass="-small"/>
			</List>
		</Box>
		<Box customClass="col-3 -space-m">
			<p class="h6">We’re probably not a great fit if…</p>
			<List customClass="" vertical gapped>
				<ListItem as="li" icon="close-circle-r" label="You’re looking for the cheapest option or just want to “get something up” fast." customClass="-small"/>
				<ListItem as="li" icon="close-circle-r" label="You want someone to take your brief and follow it exactly — no questions asked." customClass="-small"/>
				<ListItem as="li" icon="close-circle-r" label="You see design as decoration, not as a way to solve real problems and support your business." customClass="-small"/>
				<ListItem as="li" icon="close-circle-r" label="You don’t have time (or interest) in thinking through your product or strategy — and just want execution." customClass="-small"/>
			</List>
		</Box>
	</Grid>
</section>

<section class="-flex">
	<Tag customClass="-large" label="Founder Card" />
	<CardFounder customClass="" photo="/people/andre.png" altText="A black and white portrait of André resting his head on his hand, looking at the camera with a thoughtful look, wearing a black wool sweater." />
</section>

<section class="-flex">
	<Tag customClass="-large" label="Final CTA Section" />
	<CtaSection customClass=""/>
</section>

<section class="-flex">
	<Tag customClass="-large" label="Checklist Cover" />
	<ChecklistStepper/>
</section>

<section class="-flex">
	<Tag customClass="-large" label="Footer" />
	<Footer/>
</section>

<section class="-flex">
	<Tag customClass="-large" label="Modal" />
	<p class="h6">This is the modal that will appear once the user finishes the checklist and is to insert their data in order to get the pdf</p>
	<Button customClass="default -full" buttonLabel="Open Modal" tagLabel="" icon="" on:click={() => (showModal = true)}/>

	<Modal bind:showModal>
		{#snippet header()}
			<p class="h5">Get your custom action plan</p>
			<p class="body_text -large -contained">Your personalized roadmap to design system success, delivered in minutes.</p>
			<p class="body_text -micro -subtle -contained">I'll email you a complete breakdown of your assessment, including:</p>
		{/snippet}

		{#snippet body()}	
			<List customClass="" vertical>
				<ListItem as="li" icon="checkg" label="Your score explanation and what it really means for your product's future" customClass="-micro"/>
				<ListItem as="li" icon="checkg" label="Specific, prioritised next steps you can tackle this week" customClass="-micro"/>
				<ListItem as="li" icon="checkg" label="Bonus insights and strategies I've used helping startups avoid expensive mistakes" customClass="-micro"/>
			</List>
			<List customClass="" vertical>
				<ListItem as="li" icon="checkw" label="This PDF isn't fully accessible yet. If you need a screen-reader friendly version, just email hello@mistaek.com and I'll send you one personally." customClass="-micro -subtle"/>
			</List>
		{/snippet}

		{#snippet footer()}
			<form method="POST">
				<InputEmail />
				<Button customClass="default -full" buttonLabel="Send me the report" tagLabel="" icon=""/>
			</form>
		{/snippet}
	</Modal>
</section>
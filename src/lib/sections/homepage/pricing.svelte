<script>
	import Tag from "$lib/elements/tag.svelte";
	import Grid from "$lib/components/grid.svelte";
	import Box from '$lib/elements/box.svelte';
	import NewLink from '$lib/elements/newlink.svelte';
	import Grain from '$lib/elements/grain.svelte';
	import List from "$lib/components/list.svelte";
	import ListItem from "$lib/elements/listItem.svelte";
	import Crosshair from "$lib/elements/markers/crosshair.svelte";
</script>

<section class="container" aria-labelledby="pricing_title">
	<Grid customClass="-gap-vxl">
		
		<Tag label="Pricing" customClass="-nano col-1 col-start-1" />
		<div class="pairing col-6 col-start-1 col-6 col-start-1 md:col-3 md:col-start-1 -spaced">
			<h6 id="pricing_title" class="h3 col-6 col-start-1">Clear Pricing. No surprises</h6>
			<p class="body_text -large -contained-xl">One focused sprint. Everything your team needs to ship consistently. No hidden costs.</p>
		</div>

		<Box as="div" customClass="col-6 col-start-1 -space-none">
			
			<Box as="div" customClass="col-6 col-start-1 -space-l" boxed>
			
				<Grain absolute/>
				
				<div class="glass-container">
					<div class="circle -brand -alt"></div>
					<div class="circle -niche"></div>
				</div>
				
				<Grid>
					<Crosshair customClass="-tl" />
					<Crosshair customClass="-tr" />
					<Crosshair customClass="-bl" />
					<Crosshair customClass="-br" />
					<Grid customClass="col-6 col-start-1 lg:col-3 -padding-l -gap-vm">
						<div class="pairing col-6 col-start-1">
							<p class="h5">Unlock Sprint</p>
							<p class="body_text -medium -contained-xl">Your design system, built for complex scientific data</p>
						</div>
						<div class="pairing col-6 col-start-1">
							<p class="h1">10k €</p>
							<p class="body_text -medium -contained-xl">50% upfront, 50% at handoff</p>
						</div>
						<NewLink boxed variant="default" label="Get started" url="https://cal.com/mistaek/15min" type="external" customClass="col-6 col-start-1 -full" />
					</Grid>
					<Grid customClass="col-6 col-start-1 lg:col-3 lg:col-start-4 -padding-l -gap-vm">
						<div class="pairing col-6 col-start-1">
							<p class="body_text -medium -bold -contained-xl">What you’ll get</p>
							<p class="body_text -medium -contained-xl">Complete design infrastructure your team owns permanently. Built specifically for your data. No retainers, no dependencies.</p>
						</div>
						<List customClass="col-6 col-start-1" vertical smallgap>
							<ListItem as="li" icon="checkg" label="Complete design system your team runs without us" customClass="-small"/>
							<ListItem as="li" icon="checkg" label="Components and patterns built for scientific data" customClass="-small"/>
							<ListItem as="li" icon="checkg" label="Documentation and training so the handoff sticks" customClass="-small"/>
							<ListItem as="li" icon="checkg" label="Governance framework for long-term consistency" customClass="-small"/>
							<ListItem as="li" icon="checkg" label="2-3 training sessions included" customClass="-small"/>
							<ListItem as="li" icon="checkg" label="4-6 weeks, clear timeline" customClass="-small"/>
						</List>
					</Grid>
				</Grid>

			</Box>

			<List customClass="stages col-6 col-start-1 -gap-none">
				<Box as="li" customClass="-align-top -padding-s" boxed>
					<p class="body_text -large">Find Sprint</p>
					<p class="body_text -small -subtle">Clarify your positioning before you build</p>
					<span class="spacer -small"></span>
					<p class="h6">3-4 weeks, from €6,000</p>
				</Box>
				<Box as="li" customClass="-align-top -padding-s" boxed>
					<p class="body_text -large">Enter Sprint</p>
					<p class="body_text -small -subtle">Expand your system as the product grows</p>
					<span class="spacer -small"></span>
					<p class="h6">2-3 weeks, from €4,000</p>
				</Box>
				<Box as="li" customClass="-align-top -padding-s" boxed>
					<p class="body_text -large">Open Sprint</p>
					<p class="body_text -small -subtle">Bring your website and product up to system quality</p>
					<span class="spacer -small"></span>
					<p class="h6">3-4 weeks, from €5,000</p>
				</Box>
			</List>

		</Box>

	</Grid>
</section>


<style>
	.glass-container {
		position: absolute;
		float: left;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
	}
	
	.circle {
		position: absolute;
		border-radius: 50%;
		filter: blur(64px);
	}

	.circle.-brand {
		bottom: 30%;
		right: 0%;
		width: 1600px;
		height: 1600px;
		background: radial-gradient(var(--color-neutral-100) 60%, var(--color-brand-20) 30%, var(--color-brand-accent) 10%);
		animation-name: slowTranslation;
		animation-direction: both;
		animation-duration: 30s;
		animation-timing-function: var(--transition-timing-function);
		animation-iteration-count: infinite;
	}
	.circle.-niche {
		bottom: 50%;
		right: 10%;
		width: 1400px;
		height: 1400px;
		background: radial-gradient(var(--color-tag-completed) 24%, var(--color-tag-progress) 50%, var(--color-tag-on-progress) 75%);
		animation-name: slowTranslation;
		animation-direction: reverse;
		animation-duration: 60s;
		animation-timing-function: var(--transition-timing-function);
		animation-iteration-count: infinite;
	}
	@keyframes slowTranslation {
		0%{
			transform: rotate(0deg) translate(-80px) rotate(0deg);
		}
		100%{
			transform: rotate(360deg) translate(-80px) rotate(-360deg);
		}
	}

	@media (min-width: 992px) {
		.circle.-brand {
			bottom: -10%;
			right: 40%;
			background: radial-gradient(var(--color-neutral-100) 60%, var(--color-brand-20) 30%, var(--color-brand-accent) 10%);
		}
		.circle.-niche {
			bottom: -10%;
			right: 50%;
			background: radial-gradient(var(--color-tag-completed) 24%, var(--color-tag-progress) 50%, var(--color-tag-on-progress) 75%);
		}
	}
</style>
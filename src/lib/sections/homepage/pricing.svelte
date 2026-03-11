<script>
	import Tag from "$lib/elements/tag.svelte";
	import Grid from "$lib/components/grid.svelte";
	import Box from '$lib/elements/box.svelte';
	import LinkBoxed from '$lib/elements/linkBoxed.svelte';
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
			<p class="body_text -large">One focused sprint. All the infrastructure you need. No hidden costs.</p>
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
							<p class="h5">Systems Sprint</p>
							<p class="body_text -medium -contained-xl">Transform complex science into trustworthy products</p>
						</div>
						<div class="pairing col-6 col-start-1">
							<p class="h1">10k €</p>
							<p class="body_text -medium -contained-xl">50% upfront, 50% at handoff</p>
						</div>
						<LinkBoxed label="Get started" url="https://cal.com/mistaek/15min" type="external" customClass="col-6 col-start-1" />
					</Grid>
					<Grid customClass="col-6 col-start-1 lg:col-3 lg:col-start-4 -padding-l -gap-vm">
						<div class="pairing col-6 col-start-1">
							<p class="body_text -medium -bold -contained-xl">What you’ll get</p>
							<p class="body_text -medium -contained-xl">Complete design infrastructure your team owns permanently. Built specifically for complex scientific data. No retainers, no dependencies.</p>
						</div>
						<List customClass="col-6 col-start-1" vertical smallgap>
							<ListItem as="li" icon="checkg" label="Complete design system in Figma" customClass="-small"/>
							<ListItem as="li" icon="checkg" label="Design tokens, components, data visualisation patterns" customClass="-small"/>
							<ListItem as="li" icon="checkg" label="Documentation for designers and developers" customClass="-small"/>
							<ListItem as="li" icon="checkg" label="Team training (2-3 sessions)" customClass="-small"/>
							<ListItem as="li" icon="checkg" label="Governance framework" customClass="-small"/>
							<ListItem as="li" icon="checkg" label="4-6 weeks, clear timeline" customClass="-small"/>
						</List>
					</Grid>
				</Grid>

			</Box>

			<List customClass="stages col-6 col-start-1 -gap-none">
				<Box as="li" customClass="-align-top -padding-s" boxed>
					<p class="body_text -large">Positioning Sprint</p>
					<p class="body_text -small -subtle">Clarify your message for customers</p>
					<span class="spacer -small"></span>
					<p class="h6">3-4 weeks, €6k</p>
				</Box>
				<Box as="li" customClass="-align-top -padding-s" boxed>
					<p class="body_text -large">Build Sprint</p>
					<p class="body_text -small -subtle">Design product features that match your system</p>
					<span class="spacer -small"></span>
					<p class="h6">2-3 weeks, €4k</p>
				</Box>
				<Box as="li" customClass="-align-top -padding-s" boxed>
					<p class="body_text -large">Launch Sprint</p>
					<p class="body_text -small -subtle">Bring your digital presence up to product quality</p>
					<span class="spacer -small"></span>
					<p class="h6">3-4 weeks, €5k</p>
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
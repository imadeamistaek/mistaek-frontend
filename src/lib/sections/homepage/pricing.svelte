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
			<p class="body_text -large -contained-xl">Two programs. Choose by where you are, not by assembling parts.</p>
			<NewLink variant="ghost" label="Book a call" url="https://cal.com/mistaek/intro" type="external" />
		</div>

		<Box as="div" customClass="col-6 col-start-1 -space-none">

			<Grain absolute/>
			
			<div class="glass-container">
				<div class="circle -brand -alt"></div>
				<div class="circle -niche"></div>
			</div>

			<List customClass="stages col-6 col-start-1 -gap-none">
				<Box as="div" customClass="-space-l" >
					
					<Grid>
						<Crosshair customClass="-tl" />
						<Crosshair customClass="-bl" />
						<Grid customClass="col-6 col-start-1 -padding-l -gap-vm">
							<div class="pairing col-6 col-start-1">
								<p class="h5">Open (featured)</p>
								<p class="body_text -medium -contained-xl">Your technology becomes legible to the people who decide about it.</p>
							</div>
							<div class="pairing col-6 col-start-1">
								<p class="h1">32k €</p>
								<p class="body_text -medium -contained-xl">8 weeks | 40% to start, 30% at design sign-off, 30% at launch.</p>
							</div>
						</Grid>
						<Grid customClass="col-6 col-start-1 -padding-l -gap-vm">
							<div class="pairing col-6 col-start-1">
								<p class="body_text -medium -bold -contained-xl">What you’ll get</p>
							</div>
							<List customClass="col-6 col-start-1" vertical smallgap>
								<ListItem as="li" icon="checkg" label="Workshops with your team, users, and buyers" customClass="-small"/>
								<ListItem as="li" icon="checkg" label="Brand, narrative, positioning, and an investor and sales deck" customClass="-small"/>
								<ListItem as="li" icon="checkg" label="Visual identity and a UI foundation built as a system" customClass="-small"/>
								<ListItem as="li" icon="checkg" label="A website designed and shipped, five page templates" customClass="-small"/>
								<ListItem as="li" icon="checkg" label="Everything owned by your team, documented and permanent" customClass="-small"/>
							</List>
						</Grid>
					</Grid>

				</Box>
				<Box as="div" customClass="-space-l" >
					
					<Grid>
						<Crosshair customClass="-tr" />
						<Crosshair customClass="-br" />
						<Grid customClass="col-6 col-start-1 -padding-l -gap-vm">
							<div class="pairing col-6 col-start-1">
								<p class="h5">Hold</p>
								<p class="body_text -medium -contained-xl">It holds together as you scale.</p>
							</div>
							<div class="pairing col-6 col-start-1">
								<p class="h1">48k €</p>
								<p class="body_text -medium -contained-xl">12 weeks | 30% to start, 40% at the system build, 30% at handoff.</p>
							</div>
						</Grid>
						<Grid customClass="col-6 col-start-1 -padding-l -gap-vm">
							<div class="pairing col-6 col-start-1">
								<p class="body_text -medium -bold -contained-xl">What you’ll get</p>
							</div>
							<List customClass="col-6 col-start-1" vertical smallgap>
								<ListItem as="li" icon="checkg" label="Full audit and gap analysis" customClass="-small"/>
								<ListItem as="li" icon="checkg" label="A complete design system with documentation and governance" customClass="-small"/>
								<ListItem as="li" icon="checkg" label="Key product flows rebuilt on the system" customClass="-small"/>
								<ListItem as="li" icon="checkg" label="DesignOps and training, plus a 30-day adoption check" customClass="-small"/>
								<ListItem as="li" icon="checkg" label="Everything owned by your team, permanent" customClass="-small"/>
							</List>
						</Grid>
					</Grid>

				</Box>
			</List>

			<List customClass="stages col-6 col-start-1 -gap-none">
				<Box as="li" customClass="-align-top -padding-s" boxed>
					<p class="body_text -large">Compare Open to a senior designer at €60,000 a year plus employment costs, who takes three to four months to reach this point and leaves with the knowledge. Or a brand studio that stops at brand, after which the work is rebuilt at the next stage of scale.</p>
				</Box>
			</List>

		</Box>

		<Box as="div" customClass="col-6 col-start-1 -space-none">

			<Tag label="Add-ons" customClass="-nano col-1 col-start-1" />
			
			<List customClass="stages col-6 col-start-1 -gap-none">
				<Box as="li" customClass="-align-top -padding-s" boxed>
					<p class="body_text -small -subtle">Additional page, designed and developed</p>
					<span class="spacer -small"></span>
					<p class="h6">1.500 €</p>
				</Box>
				<Box as="li" customClass="-align-top -padding-s" boxed>
					<p class="body_text -small -subtle">Additional workshop session</p>
					<span class="spacer -small"></span>
					<p class="h6">1.200 €</p>
				</Box>
				<Box as="li" customClass="-align-top -padding-s" boxed>
					<p class="body_text -small -subtle">Additional deck</p>
					<span class="spacer -small"></span>
					<p class="h6">2.500 €</p>
				</Box>
				<Box as="li" customClass="-align-top -padding-s" boxed>
					<p class="body_text -small -subtle">Extra revision round</p>
					<span class="spacer -small"></span>
					<p class="h6">1.000 €</p>
				</Box>
			</List>

			<NewLink boxed variant="default" label="Book a call" url="https://cal.com/mistaek/intro" type="external" />

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
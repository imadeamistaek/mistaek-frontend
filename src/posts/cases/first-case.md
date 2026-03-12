---
title: When a Bank's Design System was fragmenting across four countries
description: How governance and systemic thinking rebuilt Santander's digital foundation at scale
date: '2024-01-15'
categories:
  - Design System
  - DesignOps
team:
  - André Sequeira
published: true
cover: /cases/andre.png
coverAlt: Screenshot of the final website design
---

<script>
  import Tag from "$lib/elements/tag.svelte";
  import Image from '$lib/elements/image.svelte'
</script>

---

<section class="text_block -cols-6 col-6 col-start-1 -gap-vxl">
<Tag label="01. Client context" customClass="-nano col-6 col-start-1 md:col-2 md:col-start-1 lg:col-1 lg:col-start-1" />
<div class="col-6 col-start-1 md:col-3 md:col-start-4">

## A global bank, a growing digital team, and no shared foundation

Santander is one of the world's largest financial institutions, operating across dozens of markets with thousands of people building digital products simultaneously. This project focused on four European markets: Portugal, the UK, Poland, and Spain, during a period of rapid digital expansion across all of them.

</div>
</section>

---

<section class="text_block -cols-6 col-6 col-start-1 -gap-vxl">
<Tag label="02. The challenge" customClass="-nano col-6 col-start-1 md:col-2 md:col-start-1 lg:col-1 lg:col-start-1" />
<div class="col-6 col-start-1 md:col-3 md:col-start-4">

### Seventy designers. Four countries. No shared system.

In Portugal alone, 10 to 15 designers were running parallel projects with almost no shared infrastructure. Multiple component libraries existed side by side with no clear rules about which to use or why. Colors, typography, and foundational tokens varied not just between countries, but between teams within the same country.

The first version of the design system, Flame 1.0, had fragmented under the pressure of regional growth. Each market had adapted it to local needs without a shared process for managing those adaptations. Teams were duplicating work that already existed elsewhere, sometimes without knowing it. The brief was to rebuild it: modular, scalable, WCAG AAA compliant, and capable of supporting both local customization and global consistency.

</div>
</section>

---

<section class="text_block -cols-6 col-6 col-start-1 -gap-vxl">
<Tag label="03. My approach" customClass="-nano col-6 col-start-1 md:col-2 md:col-start-1 lg:col-1 lg:col-start-1" />
<div class="col-6 col-start-1 md:col-3 md:col-start-4">

#### Diagnosis first. Components second.

I came in as Lead European Design System Designer, working directly with one representative from each country and through them, with teams of 10 to 15 people per market. Around 70 to 80 designers in total.

The audit of Flame 1.0 made the core problem clear: this wasn't a component quality issue. It was a governance issue. Teams had been adapting the system without a process for feeding those adaptations back into the shared foundation. Good work was being done in isolation and then lost.

That shaped everything. Midway through the project, I noticed three of the four countries weren't using a set of components we'd already shipped. They hadn't existed in those markets when the relevant sprint had passed. Instead of leaving that gap, I introduced dedicated update sprints to bring missing components to every market, paired with weekly newsletters explaining what was changing and why. Adoption fails when designers feel a system is being imposed on them. It works when they understand the reasoning behind it.

</div>
</section>

<Image
  src="/cases/andre.png"
  alt="Screenshot of the final design"
  cover
  customClass="-aspect-16-9 col-6"
/>
<Image
  src="/cases/andre.png"
  alt="Screenshot of the final design"
  cover
  customClass="-aspect-4-3 col-4 col-start-1"
/>
<Image
  src="/cases/andre.png"
  alt="Screenshot of the final design"
  cover
  customClass="-aspect-16-9 col-3 col-start-4"
/>

---

<section class="text_block -cols-6 col-6 col-start-1 -gap-vxl">
<Tag label="04. What I Built" customClass="-nano col-6 col-start-1 md:col-2 md:col-start-1 lg:col-1 lg:col-start-1" />
<div class="col-6 col-start-1 md:col-3 md:col-start-4">

##### A system designed to survive after handoff

Flame 2.0 was built on a shared token architecture covering color, typography, spacing, and interaction patterns. The token layer supported regional customization without breaking system coherence. WCAG AAA compliance shaped decisions across the entire system, from contrast ratios to interaction states to documentation standards.

Beyond the components, I built the governance infrastructure: clear roles for each country representative, a structured review process, documentation standards, and the update sprint model. Toward the end of the project, I was working directly with development teams to close the gap between what was being designed and what was actually being shipped.

</div>
</section>

---

<section class="text_block -cols-6 col-6 col-start-1 -gap-vxl">
<Tag label="05. The Outcome" customClass="-nano col-6 col-start-1 md:col-2 md:col-start-1 lg:col-1 lg:col-start-1" />
<div class="col-6 col-start-1 md:col-3 md:col-start-4">

###### 35% faster. And adopted globally without being asked.

The system achieved a 35% average reduction in time spent on mobile and desktop projects across the European markets, based on Santander's internal reporting. Teams started building with shared context instead of in parallel isolation. Work that had been duplicated was now reused.

The result that wasn't in the brief: Santander's global team decided to migrate their work onto the European foundation. Not because they were told to. Because the system was solid enough to earn it.

</div>
</section>

---

<section class="text_block -cols-6 col-6 col-start-1 -gap-vxl">
<Tag label="06. Key Insight" customClass="-nano col-6 col-start-1 md:col-2 md:col-start-1 lg:col-1 lg:col-start-1" />
<div class="col-6 col-start-1 md:col-4 md:col-start-3 xlg:col-3 xlg:col-start-4">

###### The components aren't the hard part. The culture is.

A technically excellent library that teams don't trust or feel ownership over will fragment again within months. What made Flame 2.0 stick wasn't the token architecture or the accessibility standards. It was the newsletters, the update sprints, and the consistent effort to explain the reasoning behind every decision. Systems are only as good as the culture built around them.

</div>
</section>

---

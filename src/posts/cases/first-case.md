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
  import Image from '$lib/elements/image.svelte'
</script>

---

## Client context

Santander is one of the world's largest financial institutions, operating across dozens of markets with thousands of people building digital products simultaneously. This project focused on four European markets: Portugal, the UK, Poland, and Spain, during a period of rapid digital expansion across all of them.

---

### The challenge

When I joined the project, Santander's European design teams were technically working toward the same goals but practically operating in isolation. In Portugal alone, 10 to 15 designers were running parallel projects with almost no shared infrastructure. Multiple component libraries existed side by side with no clear rules about which to use or why. Colors, typography, and foundational tokens varied not just between countries, but between teams within the same country.

The first version of the design system, Flame 1.0, had made a genuine attempt at unification. But it had fragmented under the pressure of regional growth. Each market had adapted it to local needs without a shared process for managing those adaptations. The result was a system in name only.

This matters because fragmentation in a design system isn't just a design problem. It slows development, erodes trust between design and engineering teams, and makes every product decision harder than it needs to be. At Santander's scale, that slowdown compounds fast. Teams were duplicating work that already existed elsewhere, sometimes without even knowing it.

The brief was to build Flame 2.0: a modular, scalable system meeting WCAG AAA accessibility standards, capable of supporting both local customization and global consistency. Twelve months to redesign the foundation of how four countries build digital products.

---

#### My approach

<Image
  src="/cases/andre.png"
  alt="Screenshot of the final design"
  cover
  customClass="-aspect-16-9"
/>

I came in as Lead European Design System Designer. In practice, that meant being responsible for how the system was architected, how decisions were made, and how knowledge moved across the team. I worked directly with one representative designer from each country, and through them, with teams of 10 to 15 people per market. Around 70 to 80 designers in total.

The first thing I did was audit Flame 1.0 properly. Not just cataloging what existed, but understanding why the fragmentation had happened. The answer was mostly governance, or the absence of it. Teams had been adapting components to local needs without a clear process for feeding those adaptations back into the shared system. Good work was being done in isolation and then lost.
That diagnosis shaped everything that followed. Building better components wasn't enough. We needed a model that made the system self-correcting over time.

One decision that defined the project came mid-sprint. I noticed that three of the four countries weren't using a set of components we'd already shipped. The components were well-designed and accessible, but they simply hadn't existed in those markets when the relevant sprint had passed. Under a strict sprint model, that work would have stayed siloed. Instead, I pushed for dedicated update sprints focused specifically on bringing missing components to the markets that needed them, alongside clear explanations of why each component worked the way it did. We also introduced weekly internal newsletters so teams across all four countries knew what was being built, what was changing, and the reasoning behind it.

That last part, the "why," matters more than most people expect. Adoption fails when designers feel like a system is being imposed on them. It works when they understand the reasoning and feel like contributors to it.

---

##### What I built

The core of Flame 2.0 was a modular component library built on a shared token architecture, covering color, typography, spacing, and interaction patterns. The token layer was designed specifically to support regional customization without breaking system coherence. A market could adapt surface-level choices while the foundational structure stayed consistent.

Accessibility was non-negotiable from the start, with WCAG AAA compliance as the target. That level of rigor pushed decisions that had downstream effects across the whole system, from color contrast ratios to interaction states to documentation standards.

Beyond the components themselves, I built the governance infrastructure: clear roles for each country representative, a structured review process, documentation standards, and the update sprint model that kept the system alive as product needs evolved. Toward the end of the project, I was working directly with development teams to close the gap between what was being designed and what was actually being shipped, and to understand why those gaps existed in the first place.

---

###### The outcome

The system achieved a 35% average reduction in time spent on mobile and desktop projects across the European markets, based on Santander's internal reporting. For a team of 70 to 80 designers building products simultaneously, that's not a marginal improvement. It compounds across every project, every sprint, every market.

Qualitatively, what changed was that teams started building with shared context instead of in parallel isolation. The newsletters and governance model meant that decisions made in Portugal weren't invisible to Poland. Work that had been duplicated was now reused. Designers understood the system well enough to work within it, and to flag when it wasn't serving them.

The European system performed well enough that Santander's global team, which had been in regular contact throughout the project, decided to migrate their work onto our foundation. That wasn't part of the original brief. It happened because the system was solid enough to scale beyond its original scope.

> Key insight
>
> The hardest part of building a design system at scale isn't the components. It's the governance. A technically excellent library that teams don't understand, trust, or feel ownership over will fragment again within months. What made Flame 2.0 stick wasn't the token architecture or the accessibility standards, though both mattered. It was the newsletters, the update sprints, the weekly touchpoints with country representatives, and the consistent effort to explain the reasoning behind every decision. Systems are only as good as the culture built around them.

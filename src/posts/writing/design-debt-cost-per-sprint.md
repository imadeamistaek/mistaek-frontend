---
title: The design debt you are carrying, and what it is costing per sprint
description: Most Startup founders never see what design debt is costing them per sprint. Here is the actual calculation, with numbers, plus what to do about it.
date: '2026-06-10'
categories:
  - Founders
team:
  - André Sequeira
published: true
cover: /writing/06-design-debt-cost-per-sprint/cover.webp
hero: /writing/06-design-debt-cost-per-sprint/hero.webp
---

A developer on your team spent four hours yesterday rebuilding a chart component. Not designing a new one. Rebuilding a version of something that already exists in your codebase, in three slightly different forms, none of which quite did what this feature needed.

Nobody flagged it. It looked like work. The ticket got closed. The sprint moved on.

That sprint was normal. Sprints at companies carrying significant design debt mostly are. The cost shows up everywhere except the place that would let you do something about it.
What we are talking about is the accumulated cost of design decisions made under pressure, without a shared foundation, that now have to be reconciled every time a new feature touches them. Each individual decision was reasonable when it got made. Together, they become an invoice your team pays in small instalments every sprint, without ever seeing the total.

---

## Let me put a number on it.

Say you have two developers. Each one loses around three hours per two-week sprint to decisions that a documented design system would have already resolved: which colour token, which spacing scale, which loading state pattern, which empty state, which error treatment. Three hours sounds modest. In my experience it is conservative.

Two developers, three hours each, every two weeks. That is 156 engineering hours per year. At a fully loaded cost of around €70 per hour for an engineer, you are looking at roughly €11,000 a year in pure rework time. And that is just the visible part.

Design debt is not a fixed line item. It grows. Every new feature built on the inconsistent foundation makes the next feature harder to build consistently. The dashboard that has three different chart components now will have four next quarter. The fourth will not be a deliberate choice. It will be the path of least resistance for whoever is shipping that feature on a Tuesday afternoon.

The pattern is familiar in another part of your operation. Engineering teams call it technical debt. They have language for it, sprint rituals for it, sometimes a line in the OKRs for it. Design debt produces the same compounding cost. It just rarely gets named, which is why it does not show up in planning.

It also shows up where you least want it to. Accessibility tends to be the first thing to drift. When components are reinvented under pressure, contrast ratios slip, keyboard navigation breaks in the new flow, screen reader labels get forgotten. Each instance is small. Together, they put your product on the wrong side of the conversation when an institutional buyer's procurement checklist arrives, or when a public-sector deal needs WCAG sign-off and nobody on your team can guarantee it.

---

### Now the comparison that matters.

A focused sprint to build the foundation costs a defined amount over a defined period of weeks. The team that runs it owns the system permanently. The work compounds.

Leaving it costs a different way. The €11,000 a year I mentioned is the floor. Add the deferred features your team did not ship because they were patching inconsistencies. Add the institutional deals that moved slower because the product did not look ready. Add the senior designer you will eventually hire, who will spend their first three months reverse-engineering the system that does not exist instead of building the things you brought them in for.

---

#### Two years of that and the difference is not even close.

The sprint capacity you are losing is not invisible. It is just not labelled. Once it has a name and a number, the question changes. It stops being whether to address it. It becomes when, and what gets done first.

If you want a clear picture of what your version of this looks like, the Discovery Sprint is the lowest-friction way to get one. One week, a structured audit of where your team is losing capacity, and a prioritised list of what to do about it. The investment is €1,500. If you run a full sprint afterwards, that amount is credited against it.

Or, if you are not sure that is the right starting point, a [fifteen-minute call works](https://cal.com/mistaek/intro). The point is the same: get the number out of your head and onto paper. The cost of not knowing what this is costing you is worse than whatever the answer turns out to be.

---
---
title: Moving too fast for a design system is usually the wrong conclusion
description: Not all design decisions move at the same speed. The stable ones are where your system lives, even when the rest of the product is changing fast.
date: '2026-06-17'
categories:
  - Systems
team:
  - André Sequeira
published: true
cover: /writing/07-design-system-product-pivot/cover.webp
hero: /writing/07-design-system-product-pivot/hero.webp
---

Someone on your team just mentioned a design system. The reaction in the room was probably somewhere between "not yet" and "we tried that."

Both responses come from the same experience. Someone built a component library, called it a design system, and three months later the product shifted and the library became a liability. Rebuilding it cost more than not having it in the first place. The conclusion then is: design systems and fast-moving products don't coexist.

That conclusion is wrong. But it's wrong in a specific way that's worth understanding.

---

## Two layers of design decisions. Only one belongs in a system.

Every product at sustainability tech carries two different kinds of design decisions. They run in parallel, they both look like "design," and they operate on completely different timescales.

The first kind moves with the product. Navigation models, information architecture, how your data structures surface to the user. These shift when priorities shift, when you enter a new market, when an enterprise client asks for something that changes what the product needs to do. They should be flexible. Locking them into a system prematurely is how you build exactly the kind of debt that becomes a liability when the product changes.

The second kind doesn't move. The colour that means "confirmed action." The spacing between a label and its input field. How a loading state behaves when the server is slow. The treatment of an empty data table. These decisions exist in every product, they tend to be consistent even when nobody planned for consistency, and they rarely shift when the product direction shifts.

A design system captures the second kind. Not because someone imposed that constraint, but because that is what a design system is: a record of stable decisions, made once and applied consistently.

The objection "our product is moving too fast" identifies a problem that is real, but it's a problem with the first layer, not the second. A design system that only lives in the second layer stays intact when the first layer shifts.

---

### The decision that changes everywhere at once

Without token naming, the same colour decision gets made in fifteen different places, by fifteen different people, across twelve months of sprints. Not because anyone was careless but because there was no shared name for it.

A design token is a name given to a decision. The token "interactive-default" holds the colour value used for every element a user can act on. When that value needs to change, you change it once, and it changes everywhere the token is referenced, without a designer opening a single file.

The business outcome: a brand update that would take weeks to apply manually takes an afternoon. A product pivot that restructures the navigation and data model doesn't cascade into the visual layer, because the visual layer is separated from it, named, and referenced rather than embedded and duplicated.

This is not a design concept. It is an operations problem that tokens solve.

---

#### When the product changes direction

Product pivots happen. At Series A, they're almost guaranteed. The data model shifts to serve a new use case. The navigation model changes. Half the existing features are deprioritised.

None of that touches the colour system. None of it changes how spacing works. The interaction patterns for confirmation states remain because users still need to know when something completed, regardless of what that thing is. The typography still needs to communicate hierarchy because hierarchy is a human need, not a product requirement.

A token-based foundation absorbs the structural pivot and keeps everything built on top of it intact. New features inherit the existing patterns. The team builds on a surface that doesn't need to be rebuilt from scratch, because it was never in the part of the product that changed.

Without that foundation, the same pivot produces a different outcome. The new features get built by whoever has capacity to make the visual decisions in that sprint. Those decisions get made again, slightly differently, by slightly different people. The gap between how this screen looks and how that screen looks widens, quietly.

---

##### You've probably been asking the wrong question

The right question is not "is our product stable enough for a design system." That question assumes you are systematising everything. No one is suggesting that.

The right question is: which of our design decisions are already stable, even if we haven't noticed?

For most sustainability tech companies, the answer is more than the team thinks. The colour system hasn't changed in eight months. The spacing logic is consistent across the core product even without documentation. The interaction patterns for data tables are the same across every screen because whoever built the first one was sensible and everyone copied it.

Those decisions exist. They're already stable. Most teams are already relying on them, they just haven't named them. A design system doesn't invent them. It makes them findable, so the next person building something doesn't have to reconstruct them from scratch.

The product can keep changing. The layer underneath it doesn't have to.

---
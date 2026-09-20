---
title: A design token budget should name the change it pays for
description: A design token budget is hard to approve because its return is a change nobody has asked for yet, so it should be tested against one the company already expects.
date: '2026-09-21'
categories:
  - Systems
team:
  - André Sequeira
published: true
cover: /writing/12-design-token-budget-next-change/cover.webp
hero: /writing/12-design-token-budget-next-change/hero.webp
---

A design token budget should name the change it pays for.

The hardest line in a budget to defend is one whose return is a change nobody has asked for yet.

That describes a design token system. A token is a name for a value the product uses, a colour or a spacing step, and screens point at the name instead of the value. On the day it ships, nothing on screen looks different. The person who benefits most is whoever has to change something next year, and that person is not in the room when the budget is decided.

I would expect a proposal like that to get argued on what can be shown: how many tokens, how many components, which platforms. Those are numbers about the system. None of them is a number about the company, so the cost sits alone on the page with nothing to weigh it against, and the decision leans on how much the approver trusts whoever is asking.

---

## Price one change the company already expects, twice

The version I would want, if I were the one signing, starts from a change the company already expects. A rebrand after the raise. A second product on the same foundation. A customer who wants the product in their own colours for a pilot. Anything with a date or a person attached will do.

Then I would ask for that one change to be priced twice: what it costs with the system in place, and what it costs without. The gap between the two is the case for the budget. It is a number about the company, so it can finally be weighed against something.

Two things follow from that. A vague change does not count, because "future flexibility" prices at nothing. And if nobody can name a change the company expects, that is worth knowing as well. My guess is that the first version of the system should then be smaller.

---

### Check it with a walk-through and a count

Once the budget is approved, the question changes to how anyone knows it worked. A demo will not show it, because the screens look the same as the day before. I would ask for two answers instead.

The first is a walk-through of one change. If we alter the colour of the main action, where does that happen, and how many places does someone have to touch afterwards? The answer I would hope to hear is one place and none. Any other answer means some of the product still holds its own copy of the value.

The second is a count. How many colours, sizes and spacings in the product do not come from a token? That can be counted from the code, which is what makes it useful. It does not depend on anyone's memory of what was agreed, and it will be a different number next quarter. If it falls, I would expect the system is being used. If it rises, I would expect people are walking around it, usually for reasons that felt sensible that afternoon. A team that cannot produce the number does not yet know how much of its own product the system governs.

Both checks have limits I should state. A token system does not stop anyone from typing a raw value on a Friday. It makes each one visible and countable, which is a smaller promise than prevention and the one I would trust. And I cannot tell you what any of this saves in money. I have not measured it across companies, and a saving quoted with no specific change behind it would not tell you much.

If you are weighing a design system budget and want to test it against one real change, the discovery call is free. I will tell you honestly whether Hold makes sense for where you are.

---

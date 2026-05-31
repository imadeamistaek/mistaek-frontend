---
title: The governance gap - why design systems fragment six months after handoff
description: The components were fine. The documentation was clear. Six months later the system is fragmenting. This is the governance gap, and why it sits with founders.
date: '2026-06-01'
categories:
  - Systems
team:
  - André Sequeira
published: true
cover: /writing/05-governance-gap-design-systems-fragment/cover.webp
---

## Six months ago you paid for a design system. Last week you opened the product and noticed something.

The dashboard has three versions of the same button. A chart pattern appeared that was not in any documentation you remember signing off on. Two screens use different spacing for what looks like the same thing.

Nothing is broken. Nobody made a bad decision. The components in the Figma file are still there, still well-documented, still as solid as the day they shipped. The system did not fail. It just quietly stopped mattering.

This is the failure mode nobody talks about. And it is not a build problem.

---

### What actually failed

Most design system post-mortems get the diagnosis wrong. The components were fine. The naming conventions held up. The documentation was clear enough that a new designer could follow it. The system did exactly what it was built to do.

What was missing was the answer to a different question: when a new feature shows up and the existing system does not cover it, who decides what happens next, and how does that decision get back into the system so the next person finds it?

Without that, the system is a snapshot of one moment in time. Useful for a quarter. Less useful for a year. By month nine it is a reference document that some people consult and others have stopped opening.

This is the governance gap. And it is what causes most design systems to fragment six months after handoff.

---

#### Where you see it first

There are three places governance failure shows up before anyone has the words for it.

The first is a new feature that does not fit. Your team is building something the system did not anticipate. A new data type, a new user flow, a new pattern. A designer makes a sensible call. The pattern gets shipped. Nothing wrong with the decision. The problem is that nobody told the system about it. Next quarter, someone else builds the same thing slightly differently, because the first version was never documented as the answer.

The second is a developer who builds something off-system. They needed a component the documentation did not cover, so they made one. It works. It is in production. It is also the start of a parallel system nobody is tracking.

The third is the quietest one. Two team members make the same kind of decision differently in the same week. Both versions ship. Neither knows the other exists. Multiply by six months.

If your team is doing any of these, the system has not failed yet. But the path to fragmentation is open.

---

##### What governance looks like when you are 30 people

Most writing on this topic comes from companies with design teams the size of your entire engineering org. Their answer is committees, design ops roles, formal review cycles. That is not the answer at Series A.

At 30 people, governance is three things.

A named person who owns the system. Not a job title with "design system" in it. A person who, when someone asks "is this in the system or not?", has a clear answer. This is usually the senior-most designer, sometimes a product lead.

A clear process for proposing changes. Lightweight. A single channel where new patterns get raised, decisions get made visibly, and the answer gets documented. The format matters less than the consistency.

A short review loop. Not a meeting. A rhythm. Once a fortnight, the owner reviews what got shipped, what new patterns showed up, what needs to go back into the system. Thirty minutes, not three hours.

That is the whole machine. No committee. No specialist role. No new hire required. If the team is small enough that these three things sound like overkill, the team is also small enough that the founder can run them directly until someone else can.

---

###### The part that sits with you

Here is what makes this piece a founder problem rather than a design team problem.

Governance is product infrastructure. It is in the same category as analytics, version control, deployment processes. The team running design will not invent it on their own, the same way the engineering team does not invent a deployment process without someone deciding that is how things get done here.

If nobody on the leadership team owns the question of how the design system evolves, it will not get answered. The team will keep shipping. The system will keep being technically present and operationally absent. The gap between the two will widen quietly until one sprint makes the cost impossible to ignore.

The good news is that the fix is small. The bad news is that nobody else will start it.

---

###### What this means for what comes next

The system that fragments six months after handoff is not the system that was built badly. It is the system that was handed over without a process for evolving it. Components without governance are a Figma file with a half-life.

If you are looking at your product and recognising any of the three signals, the question is not whether you need to rebuild. The question is whether what you have is a build problem, a governance problem, or both. Those have different answers and different costs.

That is what the Diagnose sprint is for. One week. An honest audit. A clear answer on what is actually happening and what to do about it. If a fifteen-minute call is the right starting point instead, the link for that is [here](https://cal.com/mistaek/intro).
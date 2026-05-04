---
title: Design Systems don't die during the build. They die after it.
description: Why most design systems fail at adoption, not delivery. The three real reasons teams stop using them, and the question to ask before you build.
date: '2026-05-04'
categories:
  - Design Systems
  - DesignOps
team:
  - André Sequeira
published: true
cover: /blog/design-systems-dont-die-during-the-build-they-die-after-it/cover.webp
---

## Most design systems I've seen don't fail during the build. They fail three months after handoff, quietly, when nobody's looking.

The Figma file is complete. The documentation is written. The handoff meeting happened. On paper, the project was a success. In practice, developers are rebuilding the same components from scratch, designers are making decisions that were already made, and the system sits unopened, doing nothing.

This isn't rare. It's the norm.

The problem isn't the quality of what was built. It's that delivery and adoption are two completely different things, and most design system projects treat them as the same milestone.

---

### The delivery trap: why teams celebrate the wrong milestone

When a design system project ends, there's usually a clear moment of completion. Files delivered. Documentation published. Maybe a handoff presentation. Everyone involved feels good about it, because the work is real and the output is visible.

The issue is that the system hasn't been tested yet. Not properly. What's been tested is whether it can be built. What hasn't been tested is whether a team that didn't build it will actually use it, in sprints, under deadline pressure, when their instincts tell them to solve the problem themselves.

Delivery is the beginning of adoption, not the end of it. Treating them as the same thing is where most systems go wrong.

---

#### Three reasons adoption fails

When I audit a design system that nobody's using, it almost always comes down to one of three things:

---

**No governance process.**

Governance is how decisions get made when new patterns are needed, when something in the system needs to change, and when different team members disagree on how to use a component. Without it, every designer and developer defaults to their own judgment. That's not a failure of discipline. It's just what happens when there's no shared process for making decisions.

The pattern holds across every context where I've seen it work. A design system built across a distributed team of 70+ designers fragmented not because the components were bad, but because there was no shared process for governing them. Once a governance model was introduced alongside regular sessions that explained the reasoning behind every change, the system stabilised. The team stopped working around it and started contributing to it.

The system fragments. Not because people are careless, but because nobody told them what to do when the system didn't have an answer yet.

---

**No training built into the handoff.**

Handing over documentation and running a training session are not the same thing. Documentation tells people what exists. Training builds the muscle memory for how to use it when it matters, under real pressure, in real sprints.

Most design system handoffs include the first. Almost none build in the second. So the team knows the system theoretically and reaches for their own instincts practically, because that's faster in the moment.

A 30-day check-in after handoff isn't a nice-to-have. It's the moment where you find out whether training actually landed or whether the team needs another pass at a specific part of the system before the pattern calcifies.

---

**The team didn't help build it, so they don't trust it**

This is the one nobody wants to hear. When a design system is built for a team rather than with them, the team doesn't own it. They received it. And something received doesn't carry the same weight as something built.

When someone understands why a pattern exists, they can judge when to follow it and when a genuine exception is warranted. Without that context, the system feels arbitrary. And arbitrary things get abandoned.

Co-ownership isn't a soft thing. It's what separates a system the team contributes to from a system the team tolerates.

---

##### What adoption looks like when it's actually working

Adoption isn't a sentiment. It's a behaviour.

A new designer joins the team and starts building with the system in their first week, not because they were told to, but because the documentation makes the reasoning clear enough to trust.

A developer needs to build a new data table and checks the system first, before writing a single line of custom code, because the last time they used it it saved them two days.

A sprint planning session happens without a design decision argument, because the answer is already in the system and everyone knows where to find it.

None of these behaviours are automatic. They come from governance that makes the system the obvious first choice, training that builds the habit, and co-ownership that gives the team a reason to care about keeping it good.

---

###### The question to ask before you commission a design system

Most conversations about design systems start with the same question: what should we build?

That's the wrong question to start with.

The right question is: who will own this after we build it? Not technically own it. Actually own it. Who on your team has the authority to make decisions about it, the time to maintain it, and the investment in keeping it relevant as your product grows?

If you can't answer that before the project starts, you're not building a design system. You're building a Figma file with good intentions.

The components are rarely the hard part. The governance, the training, and the team's trust in the system are the hard part. Any studio that doesn't talk about those things is solving the easy problem and leaving you with the difficult one.

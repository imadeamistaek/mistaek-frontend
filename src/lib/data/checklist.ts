export type ChecklistItem = {
	id: string;
	label: string;
	points: number;
};

export type ChecklistSection = {
	id: string;
	completion: string;
	next: string;
	title: string;
	description: string;
	items: ChecklistItem[];
};

export type ChecklistResult = {
	id: string;
	range: [number, number];
	title: string;
	message: string;
	insights: string;
	next: string;
};

export const checklistSections: ChecklistSection[] = [
	{
		id: '01. Product Maturity',
		completion: '1/5',
		next: 'Design & Brand Consistency',
		title: 'Where is your product right now?',
		description: 'Let’s start with the big picture. These questions help you reflect on your product’s current stage — so you can see if a design system would actually help you move faster, or if it’s still early days.',
		items: [
			{ id: 'pm-1', label: `We have a live product with real users (not just prototypes or concepts)`, points: 1 },
			{ id: 'pm-2', label: `Our core features are stable and we're not constantly changing the main user flow`, points: 1 },
			{ id: 'pm-3', label: `We're planning to build new features or expand to new user types in the next 6 months`, points: 1 },
			{ id: 'pm-4', label: `Our team has grown (or will grow) beyond just 1-2 people working on design/development`, points: 1 },
			{ id: 'pm-5', label: `We're getting user feedback that points to consistency or usability issues`, points: 1 },
		]
	},
	{
		id: '02. Design & Brand Consistency',
		completion: '2/5',
		next: 'Technical Foundations',
		title: 'How consistent is your design?',
        description: 'Here we look at how your team handles visual consistency — across screens, tools, and people. If things often feel “off” or get rebuilt too often, this is where it shows up.',
		items: [
			{ id: 'd-1', label: 'We have basic brand guidelines (colorus, fonts, logo usage) documented somewhere', points: 1 },
			{ id: 'd-2', label: 'Our main screens look like they belong together — similar buttons, spacing, and overall feel', points: 1 },
			{ id: 'd-3', label: 'We reuse design patterns instead of creating new solutions for similar problems', points: 1 },
			{ id: 'd-4', label: 'Our team agrees on basic design decisions (like button styles or how forms should look)', points: 1 },
			{ id: 'd-5', label: `New designs follow established patterns rather than starting from scratch each time`, points: 1 },
		]
	},
	{
		id: '03. Technical Foundations',
		completion: '3/5',
		next: 'Accessibility Awareness',
		title: 'How ready is your tech for reusable design?',
        description: 'A design system doesn’t just live in Figma — it lives in your codebase too. These questions check if your dev setup can actually support shared components and scalable UI.',
		items: [
			{ id: 't-1', label: 'We use a modern development framework (React, Vue, Angular, etc.) instead of building everything custom', points: 1 },
			{ id: 't-2', label: 'Our developers can easily reuse code components across different parts of the product', points: 1 },
			{ id: 't-3', label: 'We have a consistent way of organising our code and files', points: 1 },
			{ id: 't-4', label: 'Our development team collaborates well with design (regular handoffs, shared tools, etc.)', points: 1 },
			{ id: 't-5', label: 'We can make style changes globally without manually updating every single screen', points: 1 },
		]
	},
	{
		id: '04. Accessibility Awareness',
		completion: '4/5',
		next: 'Sustainability & Maintainability',
		title: 'How inclusive is your design approach?',
        description: 'Accessibility isn’t an afterthought — it should be baked into the system. This step explores how your team currently thinks about inclusion and if you’re ready to build with everyone in mind.',
		items: [
			{ id: 'a11y-1', label: `Our developers use semantic HTML and understand ARIA roles or screen reader behavior.`, points: 1 },
			{ id: 'a11y-2', label: 'We test or review designs and code with accessibility in mind (even informally).', points: 1 },
			{ id: 'a11y-3', label: `Someone on our team knows accessibility basics or we're committed to learning`, points: 1 },
			{ id: 'a11y-4', label: 'We consider accessibility a shared responsibility — not something to fix at the end.', points: 1 },
			{ id: 'a11y-5', label: 'We want to be inclusive by default, not only when required.', points: 1 },
		]
	},
	{
		id: '05. Sustainability & Maintainability',
		completion: '5/5',
		next: 'Finish checklist',
		title: 'How future-friendly is your workflow?',
        description: 'A good design system reduces waste, chaos, and unnecessary rework. These questions look at how your team handles design debt, duplication, and long-term scaling.',
		items: [
			{ id: 's-1', label: `Making design updates takes longer than we'd like — we know there's room for efficiency`, points: 1 },
			{ id: 's-2', label: `We sometimes have inconsistencies creep in when we're moving fast`, points: 1 },
			{ id: 's-3', label: 'Our team spends time on repetitive design work instead of solving new problems', points: 1 },
			{ id: 's-4', label: 'We want our product to feel more polished and professional as we scale', points: 1 },
			{ id: 's-5', label: `We're ready to invest time upfront to save time and headaches later`, points: 1 },
		]
	}
];

export const checklistResults: ChecklistResult[] = [
	{
		id: 'results-verylow',
		range: [0, 8],
		title: `You're Just Getting Started`,
		message: `You're still early in your product journey — and that's totally normal! Most successful companies start exactly where you are.`,
		insights: `Right now, a full design system would likely slow you down more than help you. Focus on nailing your core user experience and building momentum first. The smart move? Get your foundation solid before adding complexity. Once you have real users and stable features, that's when design systems start making sense.`,
		next: `I've helped early-stage teams like yours build the right foundation from day one. Want to chat about what to focus on first?`,
	},
	{
		id: 'results-low',
		range: [9, 16],
		title: `You're Making Progress`,
		message: `You've got some good pieces in place, but there are a few gaps to fill before a design system makes sense.`,
		insights: `You're in that tricky middle phase where things are working, but you can feel the cracks starting to show. The good news? You're asking the right questions at the right time. Focus on strengthening your design consistency and development processes first. Once those are solid, you'll be in a much better position to build (and actually use) a design system.`,
		next: `I specialise in helping teams bridge exactly these gaps. Let's talk about the quickest path to get you ready for scale.`,
	},
	{
		id: 'results-high',
		range: [17, 22],
		title: `You're Almost There`,
		message: `You're really close! You've built a solid foundation and just need to tie up a few loose ends.`,
		insights: `Your team clearly knows what they're doing. You've got the basics covered and you're thinking ahead — that's exactly when design systems start paying off big time. The missing pieces are probably smaller than they feel. With a little focused effort on your remaining gaps, you'll be ready to build something that actually saves time instead of creating busywork.`,
		next: `You're at the perfect stage to start planning your design system approach. I'd love to help you nail the strategy and avoid common pitfalls.`,
	},
	{
		id: 'results-veryhight',
		range: [23, 25],
		title: `You're Ready to Build`,
		message: `Congratulations! You've got everything you need for a design system that will actually make your team more efficient.`,
		insights: `You've done the hard work of building solid foundations. Now you can invest in a design system knowing it'll pay dividends immediately — faster development, fewer inconsistencies, and happier designers. The key is building something that fits your actual workflow instead of copying what works for bigger companies. Start focused and expand from there.`,
		next: `You're ready for the real thing. Let's talk about building a design system that's perfectly tailored to how your team actually works.‘`,
	},
];
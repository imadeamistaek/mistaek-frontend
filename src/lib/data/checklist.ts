export type ChecklistItem = {
	id: string;
	label: string;
	points: number;
};

export type ChecklistActionPlan = {
	id: string;
	title: string;
	message: string;
}

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
	actions: ChecklistActionPlan[];
};

export const checklistSections: ChecklistSection[] = [
	{
		id: '01. Product Maturity',
		completion: '1/5',
		next: 'Design & Brand Consistency',
		title: 'Where your product actually is',
		description: `Let’s start with the big picture. These questions help you reflect on your product’s current stage — so you can see if a design system would actually help you move faster, or if it’s still early days.`,
		items: [
			{ id: 'pm-1', label: `We have multiple people working on the UI who need to stay consistent`, points: 1 },
			{ id: 'pm-2', label: `We're actively scaling the product or planning a significant redesign`, points: 1 },
			{ id: 'pm-3', label: `Our team wastes time recreating the same components over and over`, points: 1 },
			{ id: 'pm-4', label: `We have a stable product direction (not pivoting every month)`, points: 1 },
			{ id: 'pm-5', label: `Our design-to-development handoff creates friction and confusion`, points: 1 },
		]
	},
	{
		id: '02. Design & Brand Consistency',
		completion: '2/5',
		next: 'Technical Foundations',
		title: 'How consistent you actually are',
        description: `If your biggest design problem is 'things look different across screens,' a design system might help. If your problem is 'we don't know what we're building,' you need strategy first.`,
		items: [
			{ id: 'd-1', label: `We use consistent colors and typography (not just 'close enough')`, points: 1 },
			{ id: 'd-2', label: 'Components get reused instead of rebuilt for every screen', points: 1 },
			{ id: 'd-3', label: 'Designers and developers agree on naming and patterns', points: 1 },
			{ id: 'd-4', label: 'Our design decisions actually reflect our brand', points: 1 },
			{ id: 'd-5', label: `We have some kind of shared reference, even if it's messy`, points: 1 },
		]
	},
	{
		id: '03. Technical Foundations',
		completion: '3/5',
		next: 'Accessibility Awareness',
		title: 'Whether your code can handle it',
        description: `Design systems aren't just Figma files. They live in code. If your technical setup can't handle shared components, you'll end up with a beautiful design system that no one can actually use.`,
		items: [
			{ id: 't-1', label: 'Our frontend supports reusable components (React, Vue, etc.)', points: 1 },
			{ id: 't-2', label: 'We have a process to go from design to code that actually works', points: 1 },
			{ id: 't-3', label: 'We use version control for UI components and design-related code', points: 1 },
			{ id: 't-4', label: `We've successfully reused components across multiple parts of the product`, points: 1 },
			{ id: 't-5', label: 'Developers know where to find design specifications and UI patterns', points: 1 },
		]
	},
	{
		id: '04. Accessibility Awareness',
		completion: '4/5',
		next: 'Sustainability & Maintainability',
		title: 'How serious you are about inclusion',
        description: `Most design systems claim to be accessible but fail basic usability tests. If you're going to build a system, build one that actually works for everyone from day one.`,
		items: [
			{ id: 'a11y-1', label: `We design with real accessibility needs, not just compliance checkboxes`, points: 1 },
			{ id: 'a11y-2', label: 'Our developers understand semantic HTML and screen reader behavior', points: 1 },
			{ id: 'a11y-3', label: `We treat accessibility as everyone's job, not something to fix later`, points: 1 },
			{ id: 'a11y-4', label: 'We test our designs and code with accessibility in mind', points: 1 },
			{ id: 'a11y-5', label: 'We want to be inclusive by default, not just when legally required', points: 1 },
		]
	},
	{
		id: '05. Sustainability & Maintainability',
		completion: '5/5',
		next: 'Finish checklist',
		title: `Whether you'll actually maintain it`,
        description: `The internet is full of abandoned design systems that teams built once and never updated. If you can't commit to maintaining it, don't build it.`,
		items: [
			{ id: 's-1', label: `We regularly waste time because design decisions aren't documented`, points: 1 },
			{ id: 's-2', label: `We've dealt with bloated design files and unused components before`, points: 1 },
			{ id: 's-3', label: 'We care about reducing design and development waste', points: 1 },
			{ id: 's-4', label: `We need simpler foundations that don't break when we iterate`, points: 1 },
			{ id: 's-5', label: `We're committed to maintaining and evolving our design tools`, points: 1 },
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
		actions: [
			{ id: 'rvla-1', title: `(01) Establish basic design consistency`, message: `Pick 2-3 core UI elements (buttons, forms, colors) and make sure they're used the same way across your main screens.` },
			{ id: 'rvla-2', title: `(02) Document your current patterns`, message: `Take screenshots of your key screens and note what's working. This will be gold when you're ready to systemize.` },
			{ id: 'rvla-3', title: `(03) Set up regular design-dev collaboration`, message: `Start with weekly 15-minute sync meetings to align on upcoming changes and catch inconsistencies early.` },
		]
	},
	{
		id: 'results-low',
		range: [9, 16],
		title: `You're Making Progress`,
		message: `You've got some good pieces in place, but there are a few gaps to fill before a design system makes sense.`,
		insights: `You're in that tricky middle phase where things are working, but you can feel the cracks starting to show. The good news? You're asking the right questions at the right time. Focus on strengthening your design consistency and development processes first. Once those are solid, you'll be in a much better position to build (and actually use) a design system.`,
		next: `I specialise in helping teams bridge exactly these gaps. Let's talk about the quickest path to get you ready for scale.`,
		actions: [
			{ id: 'rla-1', title: `(01) Audit your current components`, message: `List every button, form field, and card style you're currently using. You'll probably find more variations than you expect.` },
			{ id: 'rla-2', title: `(02) Standardize your most-used elements`, message: `Pick your top 5 most common UI components and create one "official" version of each. Start using only these versions going forward.` },
			{ id: 'rla-3', title: `(03) Improve your handoff process`, message: `Make sure developers have everything they need (spacing, states, interactions) without having to guess or ask questions.` },
		]
	},
	{
		id: 'results-high',
		range: [17, 22],
		title: `You're Almost There`,
		message: `You're really close! You've built a solid foundation and just need to tie up a few loose ends.`,
		insights: `Your team clearly knows what they're doing. You've got the basics covered and you're thinking ahead — that's exactly when design systems start paying off big time. The missing pieces are probably smaller than they feel. With a little focused effort on your remaining gaps, you'll be ready to build something that actually saves time instead of creating busywork.`,
		next: `You're at the perfect stage to start planning your design system approach. I'd love to help you nail the strategy and avoid common pitfalls.`,
		actions: [
			{ id: 'rha-1', title: `(01) Plan your component hierarchy`, message: `Decide which components you'll build first (hint: start with the ones you use most often, not the complex edge cases).` },
			{ id: 'rha-2', title: `(02) Set up your design system infrastructure`, message: `Choose your tools (Figma libraries, Storybook, etc.) and create the basic structure before building components.` },
			{ id: 'rha-3', title: `(03) Define your naming conventions`, message: `Agree on how you'll name components, variants, and properties. Consistency here prevents confusion later.` },
		]
	},
	{
		id: 'results-veryhight',
		range: [23, 25],
		title: `You're Ready to Build`,
		message: `Congratulations! You've got everything you need for a design system that will actually make your team more efficient.`,
		insights: `You've done the hard work of building solid foundations. Now you can invest in a design system knowing it'll pay dividends immediately — faster development, fewer inconsistencies, and happier designers. The key is building something that fits your actual workflow instead of copying what works for bigger companies. Start focused and expand from there.`,
		next: `You're ready for the real thing. Let's talk about building a design system that's perfectly tailored to how your team actually works.‘`,
		actions: [
			{ id: 'rvha-1', title: `(01) Start with a pilot project`, message: `Pick one small feature or page to rebuild using your new design system components. Learn from this before going all-in.` },
			{ id: 'rvha-2', title: `(02) Create component documentation`, message: `For each component, document when to use it, how it behaves, and what variants exist. Your future self will thank you.` },
			{ id: 'rvha-3', title: `(03) Plan your migration strategy`, message: `Decide how you'll gradually move existing screens to use system components without breaking everything at once.` },
		]
	},
];
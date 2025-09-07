import { PDFDocument, PDFPage, rgb, StandardFonts } from 'pdf-lib';
import { checklistSections, checklistResults } from '$lib/data/checklist';

export async function generateChecklistPDF(selected: Set<string>, score: number) {
	const pdfDoc = await PDFDocument.create();
	const result = getResultForScore(score);

	// Definition of the pages
	const page = pdfDoc.addPage([595, 842]); // A4 size in points
	const { width, height } = page.getSize();
	const page2 = pdfDoc.addPage([595, 842]); // A4 size in points
	const page3 = pdfDoc.addPage([595, 842]); // A4 size in points
	const page4 = pdfDoc.addPage([595, 842]); // A4 size in points
	const page5 = pdfDoc.addPage([595, 842]); // A4 size in points
	const page6 = pdfDoc.addPage([595, 842]); // A4 size in points
	const page7 = pdfDoc.addPage([595, 842]); // A4 size in points
	const page8 = pdfDoc.addPage([595, 842]); // A4 size in points
	const page9 = pdfDoc.addPage([595, 842]); // A4 size in points
	const allPages = [page, page2, page3, page4, page5, page6, page7, page8, page9];
	
	// Type Variables
	const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
	const fontSizeSmall = 11;
	const fontSizeDefault = 14;
	const defaultLineHeightL = fontSizeDefault*1.4;
	const defaultLineHeightM = fontSizeDefault*1.2;
	const defaultLineHeightS = fontSizeDefault*1;

	// Spacing Variables
	const defaultSpacing = 24;
	const containerMargin = 40;
	const containerWidth = width - (containerMargin*2);
	const columnWidth = containerWidth / 3;
	const containerHeight = height - (containerMargin*2);
	const rowHeight = containerHeight / 6;

	// Start from a base y-position for the first question
	let baseY = containerHeight - (rowHeight * 3.7);
	let textBaseY = containerHeight - (rowHeight * 3.8);
	let baseYonTop = containerHeight;
	let textBaseYonTop = containerHeight - defaultSpacing;
	const itemSpacing = containerMargin+8; // vertical space between questions
	
	let y = height - containerMargin;
	y -= containerMargin*2;

	// Color Variables
	const surfaceColor = rgb(0.078, 0.078, 0.082); //Dark Grey
	const surfaceColorHighlight = rgb(0.157, 0.157, 0.165); //Grid Grey
	const contentOnSurface = rgb(0.957, 0.957, 0.961); // White
	const contentOnSurfaceDarker = rgb(0.541, 0.541, 0.576); // White
	const contentGreen = rgb(0.322, 0.796, 0.596); // Green

	// Recurrent SVGs
	const checkPath = 'M3.83315 9.19193C3.61982 9.19193 3.40648 9.11193 3.24315 8.94859L0.146484 5.84859L0.853151 5.14193L3.83315 8.12193L11.1465 0.808594L11.8532 1.51526L4.42315 8.94526C4.34573 9.02275 4.25374 9.08414 4.15247 9.1259C4.05121 9.16766 3.94269 9.18897 3.83315 9.18859V9.19193Z';
	const crossPath = 'M0.333984 6.9987C0.333984 3.32203 3.32398 0.332031 7.00065 0.332031C10.6773 0.332031 13.6673 3.32203 13.6673 6.9987C13.6673 10.6754 10.6773 13.6654 7.00065 13.6654C3.32398 13.6654 0.333984 10.6754 0.333984 6.9987ZM1.33398 6.9987C1.33398 10.122 3.87732 12.6654 7.00065 12.6654C10.124 12.6654 12.6673 10.122 12.6673 6.9987C12.6673 3.87536 10.124 1.33203 7.00065 1.33203C3.87732 1.33203 1.33398 3.87536 1.33398 6.9987ZM7.00065 6.29203L9.14732 4.14536L9.85399 4.85203L7.70732 6.9987L9.85399 9.14537L9.14732 9.85203L7.00065 7.70537L4.85398 9.85203L4.14732 9.14537L6.29398 6.9987L4.14732 4.85203L4.85398 4.14536L7.00065 6.29203Z';

	const today = new Date();
	const formattedDate = today.toLocaleDateString('en-GB', {
		day: '2-digit',
		month: 'short',
		year: 'numeric'
	});
	
	for (const page of allPages) {
		const { width, height } = page.getSize();
		drawPageBackground(page, width, height);
	}

	function drawPageBackground(page: PDFPage, width: number, height: number) {
		// Background fill
		page.drawRectangle({
			x: 0,
			y: 0,
			width,
			height,
			color: surfaceColor
		});

		// Container outline
		page.drawRectangle({
			x: containerMargin,
			y: 0,
			width: containerWidth,
			height,
			borderColor: surfaceColorHighlight
		});

		// Center column
		page.drawRectangle({
			x: (width / 2) - (columnWidth / 2),
			y: 0,
			width: columnWidth,
			height,
			borderColor: surfaceColorHighlight
		});
	}

	function getResultForScore(score: number) {
		return (
			checklistResults.find(
				(result) => score >= result.range[0] && score <= result.range[1]
			) ?? {
				title: 'No result found',
				message: '',
				insights: '',
				next: '',
				actions: [] // 👈 empty array to match type
			}
		);
	}

	
	//  -------------------------------------------------- */
	//  Page 1 */
	//  The Cover page of the PDF
	//  -------------------------------------------------- */
	// LOGO
	const svgPath = 'M230 115V172.5L115 57.5V0L230 115Z M0 57.5L115 57.5L115 230L0 115V57.5Z'
	page.drawSvgPath(svgPath, {
		x: containerMargin,
		y: height - containerMargin,
		color: contentOnSurface,
		scale: 0.25
	})

	// Title
	page.drawText('READY FOR A DESIGN SYSTEM?', {
		x: containerMargin,
		y: height - (containerMargin*6),
		size: 100,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth,
		lineHeight: 100,
		wordBreaks: [" "]
	});

	// Description
	page.drawText('This report contains your personalized results from the Design System Readiness Check, along with specific action steps tailored to your current stage. Keep this handy as a reference — your readiness will evolve as your product grows.', {
		x: containerMargin + columnWidth,
		y: containerMargin + columnWidth,
		size: fontSizeDefault,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - columnWidth,
		lineHeight: defaultLineHeightL,
		wordBreaks: [" "]
	});

	// Footer
	page.drawText(`Created by Mistaek Design Studio | ${formattedDate}`, {
		x: containerMargin,
		y: containerMargin,
		size: fontSizeSmall,
		font,
		color: contentOnSurfaceDarker,
		lineHeight: defaultLineHeightS,
	});
	

	//  -------------------------------------------------- */
	//  Page 2 */
	//  Thank You page
	//  -------------------------------------------------- */
	// Container Background
	page2.drawRectangle({
		x: containerMargin,
		y: containerMargin,
		width: containerWidth,
		height: height - containerMargin*2,
		borderColor: surfaceColorHighlight,
	});
	page2.drawRectangle({
		x: containerMargin+1,
		y: containerMargin+1,
		width: containerWidth-2,
		height: (height - containerMargin*2)-2,
		color: surfaceColor,
	});
	
	// TAG
	const tagPath = 'M75,75H25C11.19,75,0,63.81,0,50v0c0-13.81,11.19-25,25-25h50c13.81,0,25,11.19,25,25v0C100,63.81,88.81,75,75,75z'
	page2.drawSvgPath(tagPath, {
		x: containerMargin*2,
		y: containerHeight+containerMargin/2,
		borderColor: contentOnSurface,
	})
	// Title
	page2.drawText('THANK YOU', {
		x: containerMargin*2+17,
		y: containerHeight-containerMargin+6,
		size: fontSizeSmall,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: fontSizeSmall*1.2,
		wordBreaks: [" "]
	});

	// Title
	page2.drawText('Thanks for taking the Design System Readiness Check!', {
		x: containerMargin*2,
		y: containerHeight - rowHeight,
		size: 40,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: 40*1.2,
		wordBreaks: [" "]
	});
	// Description
	page2.drawText(`I know your time is valuable, so I really appreciate you taking a few minutes to assess where your product stands.`, {
		x: containerMargin*2,
		y: containerHeight - (rowHeight * 2.2),
		size: fontSizeDefault,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - containerMargin*2,
		wordBreaks: [" "],
	});
	page2.drawText(`The fact that you're thinking about design systems shows you're planning ahead, and that's exactly the kind of strategic thinking that separates successful products from the rest.`, {
		x: containerMargin*2,
		y: containerHeight - (rowHeight * 2.7),
		size: fontSizeDefault,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: defaultLineHeightL,
		wordBreaks: [" "],
	});
	page2.drawText(`This report is personalised to your responses, so bookmark it and refer back as your product evolves. I'd love to hear how things progress for you.`, {
		x: containerMargin*2,
		y: containerHeight - (rowHeight * 3.3),
		size: fontSizeDefault,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: defaultLineHeightL,
		wordBreaks: [" "],
	});

	// Footer
	page2.drawText(`André Sequeira`, {
		x: containerMargin*2,
		y: containerMargin*2+20,
		size: fontSizeSmall,
		font,
		color: contentOnSurface,
		lineHeight: defaultLineHeightS,
	});
	page2.drawText(`Founder, Mistaek Design Studio`, {
		x: containerMargin*2,
		y: containerMargin*2,
		size: fontSizeSmall,
		font,
		color: contentOnSurfaceDarker,
		lineHeight: defaultLineHeightS,
	});


	//  -------------------------------------------------- */
	//  Page 3 */
	//  Results Page
	//  -------------------------------------------------- */
	// Container Background
	page3.drawRectangle({
		x: containerMargin,
		y: containerMargin,
		width: containerWidth,
		height: height - containerMargin*2,
		borderColor: surfaceColorHighlight,
	});
	page3.drawRectangle({
		x: containerMargin+1,
		y: containerMargin+1,
		width: containerWidth-2,
		height: (height - containerMargin*2)-2,
		color: surfaceColor,
	});
	// Content
	const tag2Path = 'M0 1h178s18 0 18 18v0s0 18 -18 18h-178s-18 0 -18 -18v0s0 -18 18 -18'
	page3.drawSvgPath(tag2Path, {
		x: containerMargin*2+18,
		y: containerHeight,
		borderColor: contentOnSurface,
	})
	page3.drawText('WHERE YOU STAND TODAY', {
		x: containerMargin*2+12,
		y: containerHeight-containerMargin+16,
		size: 14,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: fontSizeSmall*1.2,
		wordBreaks: [" "]
	});

	// Score
	page3.drawText(`${score}`, {
		x: containerMargin*2,
		y: containerHeight - rowHeight,
		size: 100,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: 100*1.2,
		wordBreaks: [" "]
	});
	page3.drawText(`/ 25`, {
		x: columnWidth*2,
		y: containerHeight - rowHeight,
		size: 100,
		font,
		color: contentOnSurfaceDarker,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: 100*1.2,
		wordBreaks: [" "]
	});

	// Description
	page3.drawText(result.title, {
		x: containerMargin*2,
		y: containerHeight - (rowHeight * 2.8),
		size: 48,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: 48*1.2,
		wordBreaks: [" "],
	});
	page3.drawText(result.message, {
		x: containerMargin*2,
		y: containerHeight - (rowHeight * 3.6),
		size: fontSizeDefault,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: defaultLineHeightL,
		wordBreaks: [" "],
	});
	page3.drawText(result.insights, {
		x: columnWidth+containerMargin,
		y: containerHeight - (rowHeight * 4),
		size: 11,
		font,
		color: contentOnSurfaceDarker,
		maxWidth: containerWidth - columnWidth-containerMargin,
		lineHeight: defaultLineHeightM,
		wordBreaks: [" "],
	});
	page3.drawText(result.next, {
		x: columnWidth+containerMargin,
		y: containerHeight - (rowHeight * 4.9),
		size: 11,
		font,
		color: contentOnSurfaceDarker,
		maxWidth: containerWidth - columnWidth-containerMargin,
		lineHeight: defaultLineHeightM,
		wordBreaks: [" "],
	});

	//  -------------------------------------------------- */
	//  Page 4 */
	//  Breakdown
	//  -------------------------------------------------- */
	// Content
	const tag3Path = 'M0 1h80s18 0 18 18v0s0 18 -18 18h-80s-18 0 -18 -18v0s0 -18 18 -18'
	page4.drawSvgPath(tag3Path, {
		x: containerMargin*2-18,
		y: containerHeight,
		borderColor: contentOnSurface,
	})
	page4.drawText('BREAKDOWN', {
		x: containerMargin+16,
		y: containerHeight-containerMargin+16,
		size: 14,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: fontSizeSmall*1.2,
		wordBreaks: [" "]
	});
	page4.drawText(`Your Complete Assessment`, {
		x: containerMargin,
		y: containerHeight - (rowHeight * 0.8),
		size: 40,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: 40*1.2,
		wordBreaks: [" "],
	});
	page4.drawText(`Here's how you answered each section. This breakdown helps you see exactly where your strengths are and which areas need attention first.`, {
		x: containerMargin,
		y: containerHeight - (rowHeight * 1.5),
		size: fontSizeDefault,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - columnWidth,
		lineHeight: defaultLineHeightL,
		wordBreaks: [" "],
	});

	page4.drawRectangle({
		x: containerMargin,
		y: 0+containerMargin+1,
		width: containerWidth,
		height: height/2-containerMargin,
		borderColor: surfaceColorHighlight,
	});
	page4.drawRectangle({
		x: containerMargin+1,
		y: 0+containerMargin+2,
		width: containerWidth-2,
		height: height/2-containerMargin-2,
		color: surfaceColor,
	});

	const firstSection = checklistSections[0]; // first section
	// Title
	page4.drawText(firstSection.id, {
		x: containerMargin*2,
		y: rowHeight*3,
		size: fontSizeDefault,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: defaultLineHeightL,
		wordBreaks: [" "],
	});
	// Description
	page4.drawText(firstSection.description, {
		x: containerMargin*2,
		y: rowHeight*2.8,
		size: 11,
		font,
		color: contentOnSurfaceDarker,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: defaultLineHeightM,
		wordBreaks: [" "],
	});

	// Loop answers for this section
	for (const [index, item] of firstSection.items.entries()) {
		const isSelected = selected.has(item.id);
		const icon = isSelected ? checkPath : crossPath;

		// Adjust Y by index * spacing
		const yIcon = baseY - (index * itemSpacing);
		const yText = textBaseY - (index * itemSpacing);

		page4.drawSvgPath(icon, {
			x: containerMargin * 2,
			y: yIcon,
			scale: 1.5,
			color: isSelected ? contentGreen : contentOnSurfaceDarker,
		});

		page4.drawText(item.label, {
			x: containerMargin * 3,
			y: yText,
			size: 12,
			font,
			color: contentOnSurface,
			maxWidth: containerWidth - columnWidth,
			lineHeight: defaultLineHeightL,
			wordBreaks: [" "],
		});
	}


	//  -------------------------------------------------- */
	//  Page 5 */
	//  Breakdown
	//  -------------------------------------------------- */
	page5.drawRectangle({
		x: containerMargin,
		y: containerHeight/2+containerMargin,
		width: containerWidth,
		height: height/2-containerMargin,
		borderColor: surfaceColorHighlight,
	});
	page5.drawRectangle({
		x: containerMargin+1,
		y: containerHeight/2+containerMargin+1,
		width: containerWidth-2,
		height: height/2-containerMargin-2,
		color: surfaceColor,
	});
	page5.drawRectangle({
		x: containerMargin,
		y: 0+containerMargin+1,
		width: containerWidth,
		height: height/2-containerMargin,
		borderColor: surfaceColorHighlight,
	});
	page5.drawRectangle({
		x: containerMargin+1,
		y: 0+containerMargin+2,
		width: containerWidth-2,
		height: height/2-containerMargin-2,
		color: surfaceColor,
	});

	const secondSection = checklistSections[1]; // Second section
	const thirdSection = checklistSections[2]; // Third section
	// Title
	page5.drawText(secondSection.id, {
		x: containerMargin*2,
		y: baseYonTop,
		size: fontSizeDefault,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: defaultLineHeightL,
		wordBreaks: [" "],
	});
	// Description
	page5.drawText(secondSection.description, {
		x: containerMargin*2,
		y: textBaseYonTop,
		size: 11,
		font,
		color: contentOnSurfaceDarker,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: defaultLineHeightM,
		wordBreaks: [" "],
	});

	// Loop answers for this section
	for (const [index, item] of secondSection.items.entries()) {
		const isSelected = selected.has(item.id);
		const icon = isSelected ? checkPath : crossPath;

		// Adjust Y by index * spacing
		const yIcon = baseYonTop - (index * itemSpacing) - containerMargin*2;
		const yText = baseYonTop - (index * itemSpacing) - containerMargin*2.3;

		page5.drawSvgPath(icon, {
			x: containerMargin * 2,
			y: yIcon,
			scale: 1.5,
			color: isSelected ? contentGreen : contentOnSurfaceDarker,
		});

		page5.drawText(item.label, {
			x: containerMargin * 3,
			y: yText,
			size: 12,
			font,
			color: contentOnSurface,
			maxWidth: containerWidth - columnWidth,
			lineHeight: defaultLineHeightL,
			wordBreaks: [" "],
		});
	}

	// Title
	page5.drawText(thirdSection.id, {
		x: containerMargin*2,
		y: rowHeight*3,
		size: fontSizeDefault,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: defaultLineHeightL,
		wordBreaks: [" "],
	});
	// Description
	page5.drawText(thirdSection.description, {
		x: containerMargin*2,
		y: rowHeight*2.8,
		size: 11,
		font,
		color: contentOnSurfaceDarker,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: defaultLineHeightM,
		wordBreaks: [" "],
	});

	// Loop answers for this section
	for (const [index, item] of thirdSection.items.entries()) {
		const isSelected = selected.has(item.id);
		const icon = isSelected ? checkPath : crossPath;

		// Adjust Y by index * spacing
		const yIcon = baseY - (index * itemSpacing);
		const yText = textBaseY - (index * itemSpacing);

		page5.drawSvgPath(icon, {
			x: containerMargin * 2,
			y: yIcon,
			scale: 1.5,
			color: isSelected ? contentGreen : contentOnSurfaceDarker,
		});

		page5.drawText(item.label, {
			x: containerMargin * 3,
			y: yText,
			size: 12,
			font,
			color: contentOnSurface,
			maxWidth: containerWidth - columnWidth,
			lineHeight: defaultLineHeightL,
			wordBreaks: [" "],
		});
	}


	//  -------------------------------------------------- */
	//  Page 6 */
	//  Breakdown
	//  -------------------------------------------------- */
	page6.drawRectangle({
		x: containerMargin,
		y: containerHeight/2+containerMargin,
		width: containerWidth,
		height: height/2-containerMargin,
		borderColor: surfaceColorHighlight,
	});
	page6.drawRectangle({
		x: containerMargin+1,
		y: containerHeight/2+containerMargin+1,
		width: containerWidth-2,
		height: height/2-containerMargin-2,
		color: surfaceColor,
	});
	page6.drawRectangle({
		x: containerMargin,
		y: 0+containerMargin+1,
		width: containerWidth,
		height: height/2-containerMargin,
		borderColor: surfaceColorHighlight,
	});
	page6.drawRectangle({
		x: containerMargin+1,
		y: 0+containerMargin+2,
		width: containerWidth-2,
		height: height/2-containerMargin-2,
		color: surfaceColor,
	});

	const fourthSection = checklistSections[3]; // Fourth section
	const fifthSection = checklistSections[4]; // Fifth section
	page6.drawText(fourthSection.id, {
		x: containerMargin*2,
		y: baseYonTop,
		size: fontSizeDefault,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: defaultLineHeightL,
		wordBreaks: [" "],
	});
	page6.drawText(fourthSection.description, {
		x: containerMargin*2,
		y: textBaseYonTop,
		size: 11,
		font,
		color: contentOnSurfaceDarker,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: defaultLineHeightM,
		wordBreaks: [" "],
	});

	for (const [index, item] of fourthSection.items.entries()) {
		const isSelected = selected.has(item.id);
		const icon = isSelected ? checkPath : crossPath;
		const yIcon = baseYonTop - (index * itemSpacing) - containerMargin*2;
		const yText = baseYonTop - (index * itemSpacing) - containerMargin*2.3;

		page6.drawSvgPath(icon, {
			x: containerMargin * 2,
			y: yIcon,
			scale: 1.5,
			color: isSelected ? contentGreen : contentOnSurfaceDarker,
		});

		page6.drawText(item.label, {
			x: containerMargin * 3,
			y: yText,
			size: 12,
			font,
			color: contentOnSurface,
			maxWidth: containerWidth - columnWidth,
			lineHeight: defaultLineHeightL,
			wordBreaks: [" "],
		});
	}

	page6.drawText(fifthSection.id, {
		x: containerMargin*2,
		y: rowHeight*3,
		size: fontSizeDefault,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: defaultLineHeightL,
		wordBreaks: [" "],
	});
	page6.drawText(fifthSection.description, {
		x: containerMargin*2,
		y: rowHeight*2.8,
		size: 11,
		font,
		color: contentOnSurfaceDarker,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: defaultLineHeightM,
		wordBreaks: [" "],
	});
	for (const [index, item] of fifthSection.items.entries()) {
		const isSelected = selected.has(item.id);
		const icon = isSelected ? checkPath : crossPath;

		const yIcon = baseY - (index * itemSpacing);
		const yText = textBaseY - (index * itemSpacing);

		page6.drawSvgPath(icon, {
			x: containerMargin * 2,
			y: yIcon,
			scale: 1.5,
			color: isSelected ? contentGreen : contentOnSurfaceDarker,
		});

		page6.drawText(item.label, {
			x: containerMargin * 3,
			y: yText,
			size: 12,
			font,
			color: contentOnSurface,
			maxWidth: containerWidth - columnWidth,
			lineHeight: defaultLineHeightL,
			wordBreaks: [" "],
		});
	}


	/* ---------------------------------------------------------------------------------------------------- */
	/* PAGE 7 - ACTION PLAN */
	/* ---------------------------------------------------------------------------------------------------- */
	const tag4Path = 'M0 1h84s18 0 18 18v0s0 18 -18 18h-84s-18 0 -18 -18v0s0 -18 18 -18'
	page7.drawSvgPath(tag4Path, {
		x: containerMargin*2-18,
		y: containerHeight,
		borderColor: contentOnSurface,
	})
	page7.drawText('ACTION PLAN', {
		x: containerMargin+16,
		y: containerHeight-containerMargin+16,
		size: 14,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: fontSizeSmall*1.2,
		wordBreaks: [" "]
	});
	page7.drawText(`Your Custom Action Plan`, {
		x: containerMargin,
		y: containerHeight - (rowHeight * 0.8),
		size: 40,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - columnWidth,
		lineHeight: 40*1.2,
		wordBreaks: [" "],
	});
	page7.drawText(result.message, {
		x: containerMargin,
		y: containerHeight - (rowHeight * 1.5),
		size: fontSizeDefault,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - columnWidth,
		lineHeight: defaultLineHeightL,
		wordBreaks: [" "],
	});

	// ROWS
	page7.drawRectangle({
		x: containerMargin,
		y: height/2-rowHeight,
		width: containerWidth,
		height: rowHeight,
		borderColor: surfaceColorHighlight,
	});
	page7.drawRectangle({
		x: containerMargin+1,
		y: height/2-rowHeight+1,
		width: containerWidth-2,
		height: rowHeight-2,
		color: surfaceColor,
	});
	page7.drawRectangle({
		x: containerMargin,
		y: height/2-rowHeight*2,
		width: containerWidth,
		height: rowHeight,
		borderColor: surfaceColorHighlight,
	});
	page7.drawRectangle({
		x: containerMargin+1,
		y: height/2-rowHeight*2+1,
		width: containerWidth-2,
		height: rowHeight-2,
		color: surfaceColor,
	});
	page7.drawRectangle({
		x: containerMargin,
		y: height/2-rowHeight*3,
		width: containerWidth,
		height: rowHeight,
		borderColor: surfaceColorHighlight,
	});
	page7.drawRectangle({
		x: containerMargin+1,
		y: height/2-rowHeight*3+1,
		width: containerWidth-2,
		height: rowHeight-2,
		color: surfaceColor,
	});

	// Example: Draw them in the PDF
	let yPos = height/2-containerMargin;
	for (const action of result.actions) {
		page7.drawText(action.title, {
			x: containerMargin * 2,
			y: yPos,
			size: fontSizeDefault,
			font,
			color: contentOnSurface,
			maxWidth: containerWidth - containerMargin * 2,
			lineHeight: defaultLineHeightL
		});
		page7.drawText(action.message, {
			x: containerMargin * 2,
			y: yPos-defaultSpacing,
			size: 12,
			font,
			color: contentOnSurfaceDarker,
			maxWidth: containerWidth - containerMargin * 2,
			lineHeight: 12*1.4
		});
		yPos -= rowHeight;
	}

	/* ---------------------------------------------------------------------------------------------------- */
	/* PAGE 8 - CALL TO ACTION */
	/* ---------------------------------------------------------------------------------------------------- */
	/* Background ----------------------------------------------------------------------------------------- */
	page8.drawRectangle({
		x: containerMargin,
		y: containerMargin,
		width: containerWidth,
		height: height - containerMargin*2,
		borderColor: surfaceColorHighlight,
	});
	page8.drawRectangle({
		x: containerMargin+1,
		y: containerMargin+1,
		width: containerWidth-2,
		height: (height - containerMargin*2)-2,
		color: surfaceColor,
	});
	/* Content -------------------------------------------------------------------------------------------- */
	const thankPath = 'M0 1h80s18 0 18 18v0s0 18 -18 18h-80s-18 0 -18 -18v0s0 -18 18 -18'
	page8.drawSvgPath(thankPath, {
		x: containerMargin*2+16,
		y: containerHeight,
		borderColor: contentOnSurface,
	})
	page8.drawText('NEXT STEPS', {
		x: containerMargin*2+12,
		y: containerHeight-containerMargin+16,
		size: 14,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: fontSizeSmall*1.2,
		wordBreaks: [" "]
	});
	page8.drawText(`Ready to Take Action?`, {
		x: containerMargin * 2,
		y: containerHeight - rowHeight,
		size: 40,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: 40*1.2,
		wordBreaks: [" "],
	});
	page8.drawText(`You now have a clear picture of where you stand and what to focus on next. The question is: do you want to tackle this alone, or would you like some expert guidance?`, {
		x: containerMargin * 2,
		y: containerHeight - (rowHeight * 1.4),
		size: fontSizeDefault,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: defaultLineHeightL,
		wordBreaks: [" "],
	});
	page8.drawText(`I've helped dozens of startup teams navigate exactly this journey — from chaotic early-stage designs to polished, scalable design systems. Every situation is unique, but the patterns are surprisingly similar.`, {
		x: containerMargin * 2,
		y: containerHeight - (rowHeight * 2),
		size: fontSizeDefault,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: defaultLineHeightL,
		wordBreaks: [" "],
	});
	page8.drawRectangle({
		x: containerMargin*2,
		y: containerHeight - (rowHeight * 3),
		width: containerWidth-containerMargin*2,
		height: 1,
		color: surfaceColorHighlight,
	});
	page8.drawText(`Here's what a free strategy call with me looks like:`, {
		x: containerMargin * 2,
		y: containerHeight - (rowHeight * 3.4),
		size: 18,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: 18*1.2,
		wordBreaks: [" "],
	});
	page8.drawSvgPath(checkPath, {
		x: containerMargin*2,
		y: containerHeight - (rowHeight * 3.8),
		scale: 1.5,
		color: contentGreen,
	})
	page8.drawText(`We'll review your specific situation and challenges`, {
		x: containerMargin * 3,
		y: containerHeight - (rowHeight * 3.9),
		size: fontSizeDefault,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - columnWidth,
		lineHeight: defaultLineHeightL,
		wordBreaks: [" "],
	});
	page8.drawSvgPath(checkPath, {
		x: containerMargin*2,
		y: containerHeight - (rowHeight * 4.1),
		scale: 1.5,
		color: contentGreen,
	})
	page8.drawText(`I'll share what I've seen work (and what doesn't) for teams in your position`, {
		x: containerMargin * 3,
		y: containerHeight - (rowHeight * 4.2),
		size: fontSizeDefault,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - columnWidth,
		lineHeight: defaultLineHeightL,
		wordBreaks: [" "],
	});
	page8.drawSvgPath(checkPath, {
		x: containerMargin*2,
		y: containerHeight - (rowHeight * 4.5),
		scale: 1.5,
		color: contentGreen,
	})
	page8.drawText(`You'll walk away with a clear 30-day action plan, whether you work with me or not`, {
		x: containerMargin * 3,
		y: containerHeight - (rowHeight * 4.6),
		size: fontSizeDefault,
		font,
		color: contentOnSurface,
		maxWidth: containerWidth - columnWidth,
		lineHeight: defaultLineHeightL,
		wordBreaks: [" "],
	});
	page8.drawText(`No pressure, no sales pitch — just honest advice from someone who's been there.`, {
		x: containerMargin * 2,
		y: containerHeight - (rowHeight * 6) + containerMargin + 32,
		size: fontSizeSmall,
		font,
		color: contentOnSurfaceDarker,
		maxWidth: containerWidth - containerMargin*2,
		lineHeight: defaultLineHeightL,
		wordBreaks: [" "],
	});

	/* ---------------------------------------------------------------------------------------------------- */
	/* PAGE 9 - THANK YOU */
	/* ---------------------------------------------------------------------------------------------------- */
	/* Background ----------------------------------------------------------------------------------------- */
	page9.drawRectangle({
		x: containerMargin,
		y: containerMargin,
		width: containerWidth,
		height: height - containerMargin*2,
		borderColor: surfaceColorHighlight,
	});
	page9.drawRectangle({
		x: containerMargin+1,
		y: containerMargin+1,
		width: containerWidth-2,
		height: (height - containerMargin*2)-2,
		color: surfaceColor,
	});
	/* Content -------------------------------------------------------------------------------------------- */
	const logotypePath = 'M21.4218 11V16.25L10.7109 5.75V0.5L21.4218 11Z M0 5.75L10.7109 5.75L10.7109 21.5L0 11V5.75Z M37.4811 16.1187V5.87775H35.2346L31.7943 14.9176L28.3382 5.87775H26.0604V16.1187H27.3642V6.84795L30.8989 16.1187H32.6583L36.1772 6.84795V16.1187H37.4811Z M39.4177 8.41875V16.1187H40.6745V8.41875H39.4177Z M39.2292 5.87775V7.15595H40.8473V5.87775H39.2292Z M45.748 15.4257C43.9414 15.4257 43.3287 14.5942 43.2502 13.5469H42.0877C42.1191 15.1639 43.1402 16.3651 45.7166 16.3651C47.8059 16.3651 48.9056 15.5952 48.9056 14.0243C48.9056 12.7616 48.2458 12.0069 46.4549 11.7451L44.774 11.5141C43.7843 11.3755 43.5173 10.9135 43.5173 10.3745C43.5173 9.61995 44.0671 9.09635 45.4024 9.09635C46.8319 9.09635 47.4446 9.82015 47.5231 10.6209H48.7642C48.6542 9.17335 47.476 8.15695 45.4338 8.15695C43.4387 8.15695 42.2919 9.03475 42.2919 10.4669C42.2919 11.6527 43.046 12.3611 44.4284 12.5459L46.2507 12.8078C47.2404 12.9464 47.6802 13.3467 47.6802 14.086C47.6802 14.9483 47.1304 15.4257 45.748 15.4257Z M50.9295 14.317C50.9295 15.549 51.3222 16.1187 52.8146 16.1187H54.6683V15.1177H52.1862V9.38895H54.7783V8.41875H52.1862V6.70935H51.5107L51.0395 8.31095L49.4214 8.69595V9.38895H50.9295V14.317Z M55.5517 14.086C55.5517 15.549 56.6357 16.3189 58.1438 16.3189C59.966 16.3189 60.7986 15.2409 61.0971 14.317C61.0971 14.8867 61.1285 15.4566 61.2071 16.1187H62.3382C62.2753 15.3642 62.2439 14.7635 62.2439 14.2091V10.5131C62.2439 9.12715 61.2856 8.15695 59.1335 8.15695C56.9656 8.15695 55.7717 9.20415 55.7245 10.8365H56.9813C57.0598 9.83555 57.6411 9.12715 59.1649 9.12715C60.7044 9.12715 61.0971 9.72775 61.0971 10.5131C61.0971 11.0983 60.7515 11.3139 59.9346 11.4525L57.9395 11.7759C56.2272 12.0531 55.5517 12.8385 55.5517 14.086ZM58.3794 15.3487C57.4683 15.3487 56.8242 14.9176 56.8242 14.0398C56.8242 13.2081 57.3112 12.8078 58.3794 12.5921L59.6833 12.3303C60.2802 12.2072 60.7044 12.0839 61.0971 11.8067V12.4689C61.0971 13.9319 60.2488 15.3487 58.3794 15.3487Z M63.5543 12.2533C63.5543 14.5787 64.7482 16.3651 67.4502 16.3651C70.0579 16.3651 70.9691 14.9176 71.1262 13.7471H69.9794C69.7438 14.7173 69.0368 15.4257 67.4973 15.4257C65.9264 15.4257 64.8896 14.6557 64.7953 12.5459H71.1105C71.1419 12.3611 71.1419 12.2072 71.1419 12.0069C71.1419 9.75855 69.8066 8.17235 67.4502 8.17235C64.8424 8.17235 63.5543 9.95875 63.5543 12.2533ZM69.9166 11.6219H64.8267C64.9995 9.80475 65.9735 9.11175 67.4659 9.11175C68.9269 9.11175 69.8537 9.85095 69.9166 11.6219Z M75.4286 12.4073L78.3976 16.1187H80L76.2298 11.6681L79.6544 8.44955V8.41875H78.1149L74.5646 11.7451C74.3132 11.9761 74.0619 12.2533 73.8262 12.5306V5.33875H72.5695V16.1187H73.8262V13.9165L75.4286 12.4073Z';
	page9.drawSvgPath(logotypePath, {
		x: containerWidth/2,
		y: containerHeight/2+32,
		color: contentOnSurface,
	})
	page9.drawText(`Let’s bring clarity to your design.`, {
		x: width/3,
		y: containerHeight - (rowHeight * 6) + containerMargin + 32,
		size: fontSizeDefault,
		font,
		color: contentOnSurface,
		lineHeight: defaultLineHeightL,
	});
	
	const pdfBytes = await pdfDoc.save();
	return pdfBytes;
}
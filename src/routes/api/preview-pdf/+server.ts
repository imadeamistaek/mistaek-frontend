// src/routes/api/preview-pdf/+server.ts
import { generateChecklistPDF } from '$lib/server/pdf';

export async function POST({ request }) {
	const { selectedItems, score } = await request.json() as {
		selectedItems: string[];
		score: number;
	};
	
	const selected = new Set<string>(selectedItems);
	
	const pdfBytes = await generateChecklistPDF(selected, score);
	
	return new Response(pdfBytes, {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': 'inline; filename="preview.pdf"', // or attachment for download
		},
	});
}
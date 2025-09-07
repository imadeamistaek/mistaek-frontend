// Example: in your checklist page or result page component
import { get } from 'svelte/store';
import { selectedItems, totalScore } from '$lib/stores/checklist';

export async function downloadPDF() {
  const selected = get(selectedItems);
  const score = get(totalScore);

  const res = await fetch('/api/preview-pdf', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      selectedItems: Array.from(selected),
      score
    })
  });

  if (!res.ok) {
    console.error('Failed to generate PDF');
    return;
  }

  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank'); // Opens PDF in new tab (inline preview)
  // Or:
  // const link = document.createElement('a');
  // link.href = url;
  // link.download = 'checklist.pdf';
  // link.click();
}
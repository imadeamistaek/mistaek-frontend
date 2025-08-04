import { writable, derived } from 'svelte/store';
import type { ChecklistItem } from '$lib/data/checklist';

export const selectedItems = writable<Set<string>>(new Set());

export const totalScore = derived(selectedItems, ($selectedItems) => $selectedItems.size);

//  -------------------------------------------------- */
// Max Score */
// This is based on the number of questions that exist at the moment on the checklist
//  -------------------------------------------------- */
export const maxScore = 25;
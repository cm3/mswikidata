import { writable } from 'svelte/store';

export const currentEntityId = writable('');
export const currentEntityLabel = writable('');
export const storedLabels = writable({});
export const storedPropertyLabels = writable({});
export const graphData = writable('graph TD\n');
export const languages = writable([]);
export const links = writable([]); // Next 候補
export const backwardLinks = writable([]); // Backward 候補
export const backwardProperties = writable([
    { id: 'P31', label: 'Instance of' },
    { id: 'P279', label: 'Subclass of' }
  ]);
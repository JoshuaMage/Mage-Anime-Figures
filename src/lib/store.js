// store.js
import { writable } from 'svelte/store';

export const sortOption = writable('New to Old');
export const gridCols = writable(3);
export const gridRows = writable(3);
export const itemsPerPage = writable(9);

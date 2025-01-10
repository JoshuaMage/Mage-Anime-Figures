import { writable } from "svelte/store";

// No need for type annotations in JavaScript
export const selectedPriceRange = writable([]);
export const filteredProducts = writable([]);

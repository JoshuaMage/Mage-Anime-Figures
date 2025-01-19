// src/lib/store.ts
import { writable } from 'svelte/store';

export const isCartVisible = writable(false);

export const cartItems = writable([]); // Define cart items as a writable store
export const orderCount = writable(0); // Order count for the badge

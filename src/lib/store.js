// paginationStore.js
import { writable } from 'svelte/store';




//adding cartitem
export const selectedItem = writable(null);
export const cartItems = writable([]); 
export const isCartVisible = writable(false)

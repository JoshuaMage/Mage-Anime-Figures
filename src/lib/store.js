// paginationStore.js
  import { writable } from 'svelte/store';

  // Store to manage cart items
  export const cartItems = writable([]);

  // Store to manage cart visibility
  export const isCartVisible = writable(false);
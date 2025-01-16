// Define the CartItem type
export type CartItem = {
    image: string;
    description: string;
    price: number;
    availability: string;
  };
  
  // Example usage in a Svelte store
  import { writable } from 'svelte/store';
  
  export const cartItems = writable<CartItem[]>([]);
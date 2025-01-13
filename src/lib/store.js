// src/stores/filterStore.js
import { writable, derived } from 'svelte/store';
import { bleachFiguresAnime } from '../Products/BLEACH/index'; 

// Writable store to keep track of selected price ranges
export const filter = writable({
  checkboxes: []
});

// Derived store to filter the data based on selected price ranges
export const filteredData = derived(filter, $filter => {
  let filtered = bleachFiguresAnime.flatMap(figureGroup => {
    // Extract figure objects from each group
    return Object.values(figureGroup);
  });

  if ($filter.checkboxes.length > 0) {
    filtered = filtered.filter(item => {
      const price = item.price;
      return $filter.checkboxes.some(range => {
        switch (range) {
          case '$0 - $25':
            return price <= 25;
          case '$25 - $50':
            return price > 25 && price <= 50;
          case '$50 - $75':
            return price > 50 && price <= 75;
          case '$75 - $100':
            return price > 75 && price <= 100;
          case '$100+':
            return price > 100;
          default:
            return false;
        }
      });
    });
  }

  return filtered;
});



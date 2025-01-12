<script>
	// @ts-nocheck
	import FilterSelection from '../components/filterSelection/+page.svelte';
	import ProductsFigures from '../components/productsFigures/+page.svelte';
	import { bleachFiguresAnime } from '../../Products/BLEACH/index';

	let gridCols = 3;
	let gridRows = 3;
	let itemsPerPage = 9;
	let sortOption = 'New to Old';

	//counting product per availabilty
	let availableCount = 0;
	let preOrderCount = 0;

	//counting priceRange per price
	let countPriceRange1 = 0; // $0 - $25
	let countPriceRange2 = 0; // $25 - $50
	let countPriceRange3 = 0; // $50 - $75
	let countPriceRange4 = 0; // $75 - $100
	let countPriceRange5 = 0; // $100+

	/**
	 * @param {{ detail: string; }} event
	 */
	function handleSortChanged(event) {
		sortOption = event.detail; // Update the sort option when changed
	}

	//counting product per availabilty
	function calculateCounts() {
		availableCount = 0;
		preOrderCount = 0;
		countPriceRange1 = 0;
		countPriceRange2 = 0;
		countPriceRange3 = 0;
		countPriceRange4 = 0;
		countPriceRange5 = 0;

		Object.values(bleachFiguresAnime[0]).forEach((item) => {
			if (item.availability === 'Available') {
				availableCount++;
			} else if (item.availability === 'Pre-Order') {
				preOrderCount++;
			}

			if (item.price <= 25) {
				countPriceRange1++;
			} else if (item.price <= 50) {
				countPriceRange2++;
			} else if (item.price <= 75) {
				countPriceRange3++;
			} else if (item.price <= 100) {
				countPriceRange4++;
			} else {
				countPriceRange5++;
			}
		});
	}

	calculateCounts();
</script>

<div
	class="min-w-screen flex min-h-screen flex-col overflow-x-hidden bg-slate-950 text-center text-slate-50"
>
	<div class="mx-1 pb-10">
		<h1 class="sm:text-2xl md:text-6xl font-bold italic tracking-widest uppercase text-orange">bleach</h1>
		<p class="sm:mt-2 md:mt-5 sm:text-[10px] md:text-xl tracking-wider">
			Step into the world of <strong class="uppercase">Bleach anime figures!</strong>
			With our exclusive collection of high-quality figures, <br /> designed to bring your favorite
			characters to life. Whether you're a long-time fan or just starting your journey into the
			Bleach universe, our collection has something <br />special for everyone. Each figure is
			meticulously crafted with incredible detail, capturing the essence of iconic characters like
			Ichigo, Rukia, and more. <br /> These high-quality pieces are the perfect addition to any anime
			collection.
		</p>
	</div>

	<FilterSelection
		bind:gridCols
		bind:gridRows
		bind:itemsPerPage
		{sortOption}
		on:sortChanged={handleSortChanged}
		showSelectionAnimeBrand={false}
		{availableCount}
		{preOrderCount}
		{countPriceRange1}
		{countPriceRange2}
		{countPriceRange3}
		{countPriceRange4}
		{countPriceRange5}
	>
		<ProductsFigures data={bleachFiguresAnime} {itemsPerPage} {gridCols} {gridRows} {sortOption} />
	</FilterSelection>
</div>

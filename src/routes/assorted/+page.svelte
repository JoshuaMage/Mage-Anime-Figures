<script>
	import { onMount } from 'svelte';
	import FilterSelection from '../components/filterSelection/+page.svelte';
	import ProductsFigures from '../components/productsFigures/+page.svelte';
	import { allFigures } from '../../Products/allFigures';

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

	//toggle All page

	/**
	 * @param {{ detail: string; }} event
	 */
	function handleSortChanged(event) {
		sortOption = event.detail; // Update the sort option when changed
	}

	onMount(() => {
		calculateCounts();
	});

	function calculateCounts() {
		availableCount = 0;
		preOrderCount = 0;
		countPriceRange1 = 0;
		countPriceRange2 = 0;
		countPriceRange3 = 0;
		countPriceRange4 = 0;
		countPriceRange5 = 0;

		Object.values(allFigures[0]).forEach((item) => {
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


</script>

<div
	class="min-w-screen flex min-h-screen flex-col overflow-x-hidden bg-slate-950 text-center text-slate-50"
>
	<div class="mx-1 pb-10">
		<h1 class="font-bold uppercase italic tracking-widest text-orange sm:text-2xl md:text-6xl">
			Assorted
		</h1>
		<p class="tracking-wider sm:mt-2 sm:text-[10px] md:mt-5 md:text-xl">
			Shop <strong>Assorted</strong> arrivals from your favorite anime brands including, BlueLock,
			<br />
			Bleach, OnePiece, Naruto and other incoming New anime!
			<strong> Mage Premium Member </strong>get EARLY ACCESS to select new Product drops
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
		<ProductsFigures data={allFigures} {itemsPerPage} {gridCols} {gridRows} {sortOption} />
	</FilterSelection>
</div>

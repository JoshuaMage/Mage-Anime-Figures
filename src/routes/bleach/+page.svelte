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

		Object.values(bleachFiguresAnime[0]).forEach((item) => {
			if (item.availability === 'Available') {
				availableCount++;
			} else if (item.availability === 'Pre-Order') {
				preOrderCount++;
			}
		});
	}
	calculateCounts();
</script>

<div
	class="min-w-screen flex min-h-screen flex-col overflow-x-hidden bg-slate-950 text-center text-slate-50"
>
	<div class="mt-7 py-16">
		<h1 class="text-6xl font-bold uppercase italic tracking-widest text-orange">bleach</h1>
		<p class="mt-5 text-xl tracking-wider">
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
	>
		<ProductsFigures data={bleachFiguresAnime} {itemsPerPage} {gridCols} {gridRows} {sortOption} />
	</FilterSelection>
</div>

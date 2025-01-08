<script>
	import FilterSelection from '../components/filterSelection/+page.svelte';
	import ProductsFigures from '../components/productsFigures/+page.svelte';
	import { newFiguresAnime } from '../../Products/new/newProduct';

	let gridCols = 3;
	let gridRows = 3;
	let itemsPerPage = 9;

	let sortOption = 'New to Old';

	/**
	 * @param {{ detail: string; }} event
	 */
	function handleSortChanged(event) {
		sortOption = event.detail; // Update the sort option when changed
	}
</script>

<div
	class="min-w-screen flex min-h-screen flex-col overflow-x-hidden bg-slate-950 text-center text-slate-50"
>
	<div class="mt-7 py-16">
		<h1 class="text-6xl font-bold italic tracking-widest text-orange">NEW</h1>
		<p class="mt-5 text-xl tracking-wider">
			Shop <strong>NEW</strong> arrivals from your favorite anime brands including, BlueLock, <br />
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
	>
		<ProductsFigures data={newFiguresAnime} {itemsPerPage} {gridCols} {gridRows} {sortOption} />
	</FilterSelection>
</div>

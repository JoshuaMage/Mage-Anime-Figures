<script>
	import FilterSelection from '../components/filterSelection/+page.svelte';
	import ProductsFigures from '../components/productsFigures/+page.svelte';
	import { onepieceFiguresAnime } from '../../Products/one-piece/index';

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

		Object.values(onepieceFiguresAnime[0]).forEach((item) => {
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
		<h1 class="text-6xl font-bold uppercase italic tracking-widest text-orange">One-piece</h1>
		<p class="mt-5 text-xl tracking-wider">
			Set sail on a grand adventure with our premium <strong class="uppercase"
				>One Piece anime figures!</strong
			>
			Whether you're a loyal fan of the Straw Hat Pirates or just love collecting unique, <br />
			high-quality pieces, our collection has something special for everyone. Each figure is meticulously
			crafted with incredible detail,<br /> showcasing your favorite characters in their iconic poses.
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
		<ProductsFigures
			data={onepieceFiguresAnime}
			{itemsPerPage}
			{gridCols}
			{gridRows}
			{sortOption}
		/>
	</FilterSelection>
</div>

<script>
	import FilterSelection from '../components/filterSelection/+page.svelte';
	import ProductsFigures from '../components/productsFigures/+page.svelte';
	import { narutoFiguresAnime } from '../../Products/naruto/index';

	let gridCols = 3;
	let gridRows = 3;
	let itemsPerPage = 9;
</script>

<div
	class="min-w-screen flex min-h-screen flex-col overflow-x-hidden bg-slate-950 text-center text-slate-50"
>
	<div class=" mt-7 py-16">
		<h1 class="text-6xl font-bold uppercase italic tracking-widest text-orange">naruto</h1>
		<p class="mt-5 text-xl tracking-wider">
			Step into the world of <strong class="uppercase">Naruto anime figures!</strong>
			with our exclusive collection of high-quality anime figures, designed to bring your favorite characters
			to life <br />
			high-quality pieces, our collection has something special for everyone. Each figure is meticulously
			crafted with incredible detail,<br /> Whether you're a long-time fan or a newcomer to the series,
			these figures are the perfect addition to any collection.
		</p>
	</div>
	<FilterSelection bind:gridCols bind:gridRows bind:itemsPerPage>
		<ProductsFigures data={narutoFiguresAnime} {itemsPerPage} {gridCols} {gridRows} />
	</FilterSelection>
</div>

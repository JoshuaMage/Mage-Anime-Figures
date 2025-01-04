<script>
	// @ts-nocheck
	import { newFiguresAnime } from '../../../newProducts/newFigures';
	import LeftiCon from '../../../svg/leftiCon.svelte';
	import RightIcon from '../../../svg/rightIcon.svelte';

	let currentIndexes = {};
	let currentPage = 0;
	const itemsPerPage = 9;
	const totalPages = Math.ceil(Object.keys(newFiguresAnime[0]).length / itemsPerPage);

	Object.keys(newFiguresAnime[0]).forEach((name) => {
		currentIndexes[name] = 0;
	});

	function showNextImage(name) {
		const images = newFiguresAnime[0][name].image;

		if (currentIndexes[name] < images.length - 1) {
			currentIndexes[name]++;
		} else {
			currentIndexes[name] = 0;
		}
	}

	function showPreviousImage(name) {
		const images = newFiguresAnime[0][name].image;

		if (currentIndexes[name] > 0) {
			currentIndexes[name]--;
		} else {
			currentIndexes[name] = images.length - 1;
		}
	}

	function nextPage() {
		if (currentPage < totalPages - 1) {
			currentPage++;
		}
	}

	function previousPage() {
		if (currentPage > 0) {
			currentPage--;
		}
	}
</script>

<div class="container my-5 grid grid-cols-3 grid-rows-3">
	{#each Object.entries(newFiguresAnime[0]).slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage) as [name, item]}
		<div>
			<div class="relative">
				<img
					src={item.image[currentIndexes[name]]}
					alt={`${name} image ${currentIndexes[name] + 1}`}
					class="mt-5 h-[400px] w-[100%] object-fill px-1"
				/>
				<button
					onclick={() => showPreviousImage(name)}
					class="absolute bottom-44 left-4 rounded-full hover:px-1"><LeftiCon /></button
				>
				<button onclick={() => showNextImage(name)} class="absolute bottom-44 right-4 hover:px-1"
					><RightIcon /></button
				>
			</div>

			<div class="relative flex">
				<div class="flex-1">
					<h6 class="text-start text-xs">
						<span
							class={`${item.availability === 'Pre-Order' ? 'text-green-400' : 'text-red-400'} text-5xl`}
						>
							.
						</span>
						{item.availability}
					</h6>
					<p class="break-words pr-14 text-start text-xl font-bold italic">{item.description}</p>
					<h2 class="ita mt-2 text-start text-xl font-bold">${item.price}</h2>
				</div>

				<div class="absolute right-6 top-0 mt-5">
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<button class="rounded-full bg-blue-900 px-2 py-2 text-white hover:bg-white"
						><svg
							fill="#000000"
							width="25px"
							height="25px"
							viewBox="0 0 24 24"
							id="cart-alt-1"
							data-name="Flat Line"
							xmlns="http://www.w3.org/2000/svg"
							class="icon flat-line"
							><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
								id="SVGRepo_tracerCarrier"
								stroke-linecap="round"
								stroke-linejoin="round"
							></g><g id="SVGRepo_iconCarrier"
								><polygon
									id="secondary"
									points="21 6 18.2 13 10 13 7.2 6 21 6"
									style="fill: #2ca9bc; stroke-width: 2;"
								></polygon><path
									id="primary-upstroke"
									d="M11,20.5h.1m5.9,0h.1"
									style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2.5;"
								></path><path
									id="primary"
									d="M3,3H5.32a1,1,0,0,1,.93.63L10,13,8.72,15.55A1,1,0,0,0,9.62,17H19"
									style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"
								></path><polyline
									id="primary-2"
									data-name="primary"
									points="7.2 6 20.8 6 21 6 18.2 13 10 13"
									style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"
								></polyline></g
							></svg
						></button
					>
				</div>
			</div>
		</div>
	{/each}
</div>

<div class="pagination-controls">
	<button onclick={previousPage} disabled={currentPage === 0}>Previous</button>
	<span>Page {currentPage + 1} of {totalPages}</span>
	<button onclick={nextPage} disabled={currentPage === totalPages - 1}>Next</button>
</div>
<script>
	// @ts-nocheck
	import LeftiCon from '../../../svg/leftiCon.svelte';
	import RightIcon from '../../../svg/rightIcon.svelte';
	import PaginationLeft from '../../../svg/paginationLeft.svelte';
	import PaginationRight from '../../../svg/paginationRight.svelte';

	export let data = [];
	export let itemsPerPage = 9;
	export let gridCols = 3;
	export let gridRows = 3;
	export let sortOption = '';

	let currentIndexes = {};
	let fadingImage = null;
	let currentPage = 0;
	let sortedData = [...data];

	
	if (typeof window !== 'undefined') {
		const storedIndexes = localStorage.getItem('currentIndexes');
		if (storedIndexes) {
			currentIndexes = JSON.parse(storedIndexes);
		} else {
			currentIndexes = {};
		}
	}

	$: totalPages = Math.ceil(sortedData.length / itemsPerPage);
	$: displayedData = sortedData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);


	Object.keys(data[0] || {}).forEach((name) => {
		if (currentIndexes[name] === undefined) {
			currentIndexes[name] = 0;
		}
	});

	// Save currentIndexes to local storage
	$: if (typeof window !== 'undefined') {
		localStorage.setItem('currentIndexes', JSON.stringify(currentIndexes));
	}

	function showNextImage(name) {
		triggerFade(name);
		setTimeout(() => {
			const images = data[0][name].image;

			if (currentIndexes[name] < images.length - 1) {
				currentIndexes[name]++;
			} else {
				currentIndexes[name] = 0;
			}
		}, 200);
	}

	function showPreviousImage(name) {
		triggerFade(name);
		setTimeout(() => {
			const images = data[0][name].image;

			if (currentIndexes[name] > 0) {
				currentIndexes[name]--;
			} else {
				currentIndexes[name] = images.length - 1;
			}
		}, 200);
	}

	function triggerFade(name) {
		fadingImage = name;
		setTimeout(() => {
			fadingImage = null;
		}, 200); // Match the duration of the fade animation
	}

	function nextPage() {
		if (currentPage < totalPages - 1) {
			currentPage++;
			scrollToTop();
		}
	}

	function previousPage() {
		if (currentPage > 0) {
			currentPage--;
			scrollToTop();
		}
	}

	function scrollToTop() {
		if (typeof window !== 'undefined') {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}
	}

	//Filter Selection
	function sortByNewToOld(items) {
		return items.sort((a, b) => b[1].id - a[1].id);
	}

	function sortByOldToNew(items) {
		return items.sort((a, b) => a[1].id - b[1].id);
	}

	function sortByRecommended(items) {
		return items.sort((a, b) => b[1].price - a[1].price);
	}

	function sortByPriceLowToHigh(items) {
		return items.sort((a, b) => a[1].price - b[1].price);
	}

	function sortByPriceHighToLow(items) {
		return items.sort((a, b) => b[1].price - a[1].price);
	}

	function sortByNameAZ(items) {
		return items.sort((a, b) => a[1].description.localeCompare(b[1].description));
	}

	function sortByNameZA(items) {
		return items.sort((a, b) => b[1].description.localeCompare(a[1].description));
	}

	function getSortedData(data, sortOption) {
		const items = Object.entries(data[0]);

		if (sortOption === 'New to Old') {
			return sortByNewToOld(items);
		} else if (sortOption === 'Old to New') {
			return sortByOldToNew(items);
		} else if (sortOption === 'Recommended') {
			return sortByRecommended(items);
		} else if (sortOption === 'low to high') {
			return sortByPriceLowToHigh(items);
		} else if (sortOption === 'high to low') {
			return sortByPriceHighToLow(items);
		} else if (sortOption === 'Name A-Z') {
			return sortByNameAZ(items);
		} else if (sortOption === 'Name Z-A') {
			return sortByNameZA(items);
		} else {
			return items;
		}
	}

	$: sortedData = getSortedData(data, sortOption);
</script>

<div class="mx-auto sm:flex sm:flex-col md:grid md:grid-rows-[90%_10%]">
	<div class={`grid md:my-5 grid-cols-${gridCols} grid-rows-${gridRows} md:p-5 `}>
		{#each displayedData as [name, item]}
			<div class="md:mb-5 grid rounded-2xl bg-black md:mr-8 md:grid-rows-[35rem] ">
				<div class="relative m-auto mt-4 h-full w-full pb-3">
					<img
						src={item.image[currentIndexes[name]]}
						alt={`${name} image ${currentIndexes[name] + 1}`}
						class={`rounded-xl object-fill px-2 sm:h-32 md:h-full w-full ${fadingImage === name ? 'animate-fade' : ''}`}
						loading="lazy"
					/>
					<button
						onclick={() => showPreviousImage(name)}
						class="absolute bottom-[50%] sm:right-[70%] md:right-[90%] rounded-full"><LeftiCon /></button
					>
					<button onclick={() => showNextImage(name)} class="absolute bottom-[50%] sm:left-[70%] md:left-[90%]"
						><RightIcon /></button
					>
				</div>

				<div class="relative flex justify-between md:items-center md:justify-center bg-transparent  md:px-2">
					<div class="grow sm:px-2 md:px-0">
						<h6 class="text-start sm:text-[7px]  md:text-xs">
							<span
								class={`${item.availability === 'Available' ? 'text-green-400' : 'text-red-400'} sm:text-[15px] md:text-5xl`}
							>
								.
							</span>
							{item.availability}
						</h6>
						<p class="break-words pr-14 text-start text-xl font-bold italic sm:hidden md:block">
							{item.description}
						</p>
						<h2 class="italic md:mt-2 text-start font-bold sm:text-[8px] md:text-xl">${item.price}</h2>
					</div>

					<div class="px-2">
						<!-- svelte-ignore a11y_consider_explicit_label -->
						<button class="rounded-full bg-blue-900 text-white hover:bg-white sm:p-1 md:p-2">
							<svg
								fill="#000000"
								viewBox="0 0 24 24"
								id="cart-alt-1"
								data-name="Flat Line"
								xmlns="http://www.w3.org/2000/svg"
								class="icon flat-line 4 sm:w-4 md:w-7"
							>
								<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
								<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
								<g id="SVGRepo_iconCarrier">
									<polygon
										id="secondary"
										points="21 6 18.2 13 10 13 7.2 6 21 6"
										style="fill: #2ca9bc; stroke-width: 2;"
									></polygon>
									<path
										id="primary-upstroke"
										d="M11,20.5h.1m5.9,0h.1"
										style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2.5;"
									></path>
									<path
										id="primary"
										d="M3,3H5.32a1,1,0,0,1,.93.63L10,13,8.72,15.55A1,1,0,0,0,9.62,17H19"
										style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"
									></path>
									<polyline
										id="primary-2"
										data-name="primary"
										points="7.2 6 20.8 6 21 6 18.2 13 10 13"
										style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"
									></polyline>
								</g>
							</svg>
						</button>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div class="my-3 flex md:h-[10rem] content-center justify-center text-center">
		<button onclick={previousPage} disabled={currentPage === 0}><PaginationLeft /></button>
		<p class="mx-10 content-center ms:text-lg">Page {currentPage + 1} of {totalPages}</p>
		<button onclick={nextPage} disabled={currentPage === totalPages - 1}><PaginationRight /></button
		>
	</div>
</div>

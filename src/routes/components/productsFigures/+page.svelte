<script>
	// @ts-nocheck
	
	import PaginationLeft from '../../../svg/paginationLeft.svelte';
	import PaginationRight from '../../../svg/paginationRight.svelte';
	import Cart from '../../../svg/cart.svelte';
	import { cartItems } from '$lib/store';

	export let data = [];
	export let itemsPerPage = 9;
	export let gridCols = 3;
	export let gridRows = 3;
	export let sortOption = '';


	let currentIndexes = {};
	let fadingImage = null;
	let currentPage = 0;
	let sortedData = [...data];

	//hovering product description
	let descriptionHovering = false;
	//showing selected item
	let selectedItem = null;

	function changeImage(index) {
		currentIndexes[selectedItem.name] = index;
	}

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

	//Addtocart items
	function addToCart(item) {
        cartItems.update((items) => [...items, item]);
    }

	$: sortedData = getSortedData(data, sortOption);
	$: imageSizeClass = gridCols === 3 ? 'md:grid-rows-[30rem]' : 'md:grid-rows-[25rem]';
</script>

<div class="mx-auto sm:flex sm:flex-col md:grid md:grid-rows-[90%_10%]">
	<div
		class="grid md:my-5 md:p-5"
		style="grid-template-columns: repeat({gridCols}, minmax(0, 1fr)); grid-template-rows: repeat({gridRows}, minmax(0, 1fr));"
	>
		{#each displayedData as [name, item]}
			<div
				class={`md:grid-rows-[30rem], grid rounded-2xl bg-black md:mb-5 md:mr-8 ${imageSizeClass}`}
			>
				<div class="group relative m-auto mt-4 h-full w-full pb-3">
					<img
						src={item.image[currentIndexes[name]]}
						alt={`${name} image ${currentIndexes[name] + 1}`}
						class={`w-full rounded-xl object-fill px-2 sm:h-32 md:h-full ${fadingImage === name ? 'animate-fade' : ''}`}
						loading="lazy"
						onmouseenter={() => (descriptionHovering = true)}
						onmouseleave={() => (descriptionHovering = false)}
					/>
					<button
						class="absolute bottom-14 left-1/2 -translate-x-1/2 transform rounded-full bg-[#3926df] px-10 py-3 text-sm font-black tracking-wide opacity-0 transition-opacity duration-300 hover:bg-[#312691] group-hover:opacity-100"
						onclick={() => (selectedItem = item)}>Quick View</button
					>
					{#if gridCols === 3}
						<button
							onclick={() => showPreviousImage(name)}
							class="absolute bottom-1/2 rounded-full bg-orange opacity-50 hover:opacity-100 sm:right-[70%] sm:size-5 md:right-[85%] md:size-9"
							>&#11164;</button
						>
						<button
							onclick={() => showNextImage(name)}
							class="absolute bottom-1/2 rounded-full bg-orange opacity-50 hover:opacity-100 sm:left-[70%] sm:size-5 md:left-[85%] md:size-9"
							>&#11166;</button
						>
					{/if}
				</div>

				{#if gridCols === 3}
					<div
						class="relative flex justify-between bg-transparent md:items-center md:justify-center md:px-2"
					>
						<div class="grow sm:px-2 md:px-0">
							<h6 class="text-start sm:text-[7px] md:text-xs">
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
							<h2 class="text-start font-bold italic sm:text-[8px] md:mt-2 md:text-xl">
								${item.price}
							</h2>
						</div>

						<div class="px-2">
							<button>
								<Cart />
							</button>
						</div>
					</div>
				{/if}
			</div>
		{/each}
	</div>

	{#if selectedItem}
		<div
			class="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-opacity-100"
		>
			<div
				class="relative grid h-[40rem] w-[70rem] grid-cols-5 rounded-lg bg-gray-950 p-8 text-white hover:border-2 hover:border-white hover:shadow-2xl hover:shadow-white"
			>
				<button
					class="absolute right-2 top-2 px-2 text-xl font-bold"
					onclick={() => (selectedItem = null)}
				>
					&#10005;
				</button>

				<div class="mr-4 flex items-center justify-center">
					<section class="flex size-20 flex-col items-center justify-center">
						{#each selectedItem.image as image, index}
							<button
								type="button"
								class="mb-2 flex cursor-pointer flex-col items-center rounded-md hover:opacity-80 focus:outline-none"
								onclick={() => changeImage(index)}
								onkeydown={(e) => e.key === 'Enter' && changeImage(index)}
							>
								<img
									src={image}
									alt={`Image ${index + 1}`}
									class="h-[7rem] w-full rounded-md border border-white"
								/>
							</button>
						{/each}
					</section>
				</div>

				<!-- Main image section -->
				<div class="col-span-2 flex grow flex-col items-center justify-center">
					<img
						src={selectedItem.image[currentIndexes[selectedItem.name]]}
						alt="Selected Item"
						class="mb-4 h-[30rem] w-full rounded-md"
					/>
					<button
						class="mt-4 rounded-full border border-white bg-black px-6 py-3 text-sm text-white active:border-2"
						>View Product Details</button
					>
				</div>

				<!-- Item details section -->
				<div class="col-span-2 mt-5 flex flex-col justify-start px-6">
					<h2 class=" mb-4 text-start text-3xl font-bold tracking-wider">
						{selectedItem.description}
					</h2>
					<p class="mb-4 text-start text-2xl font-bold">${selectedItem.price}</p>
					<h6 class="mb-8 text-start sm:text-[7px] md:text-sm">
						<span
							class={`${selectedItem.availability === 'Available' ? 'text-green-400' : 'text-red-400'} sm:text-[15px] md:text-[80px]`}
						>
							.
						</span>
						{selectedItem.availability}
					</h6>
					<button
						class="rounded-full bg-blue-500 px-10 py-4 text-white opacity-100 active:opacity-70"
						onclick={() => addToCart(selectedItem)}>Add to Cart</button
					>
					<section class="mt-5 flex gap-6 text-xs">
						<button class="hover:underline">Return Policy</button>
						<button class="hover:underline">Shipping Policy</button>
					</section>

					<section class="mt-8 flex flex-col gap-2 text-start text-xs">
						<p><span>&#9888</span> Product Warning/Cautions</p>
						<p>
							<span>&#9888</span> <strong>WARNING:</strong> CHOKING HAZARD - Small Parts. Not for children
							under 5 years.
						</p>
					</section>
					<h2 class="absolute bottom-0 right-0 m-5 font-bold">Mage Family <span>&#9827;</span></h2>
				</div>
			</div>
		</div>
	{/if}

	<div class="my-3 flex content-center justify-center text-center md:h-[10rem]">
		<button onclick={previousPage} disabled={currentPage === 0} class="hover:font-black"
			>&#11164;</button
		>
		<p class="ms:text-lg mx-10 content-center">Page {currentPage + 1} of {totalPages}</p>
		<button onclick={nextPage} disabled={currentPage === totalPages - 1} class="hover:font-black"
			>&#11166;</button
		>
	</div>
</div>

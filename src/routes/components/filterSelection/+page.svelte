<script>
	import { createEventDispatcher } from 'svelte';
	import FilterIcon from '../../../svg/filterIcon.svelte';
	import DropdownIcon from '../../../svg/dropdownIcon.svelte';
	import FilterSizeImage3 from '../../../svg/filterSizeImage3.svelte';
	import FilterSizeImage4 from '../../../svg/filterSizeImage4.svelte';
	import ArrowUpIcon from '../../../svg/arrowUpIcon.svelte';

	export let gridCols = 3;
	export let gridRows = 3;
	export let itemsPerPage = 9;
	// svelte-ignore export_let_unused
	export let sortOption = '';
	export let currentPage = 0;
	export let showSelectionAnimeBrand = true;

	//count the Product per availability
	export let availableCount = 0;
	export let preOrderCount = 0;

	const dispatch = createEventDispatcher();
	let filterItem = false;
	let inStock = true;
	let selectAnime = true;
	let selectPrice = true;
	let sideSelection = true;
	let selectedSort = 'New to Old';

	//store for input sorting

	function handleFilter() {
		setTimeout(() => {
			filterItem = !filterItem;
		}, 200);
	}

	function handleSelection() {
		sideSelection = !sideSelection;
	}

	function handleStock() {
		inStock = !inStock;
	}

	function handleSelectANime() {
		selectAnime = !selectAnime;
	}

	function handlePrice() {
		selectPrice = !selectPrice;
	}

	function setGrid3x3() {
		gridCols = 3;
		gridRows = 3;
		itemsPerPage = 9;
	}

	function setGrid4x4() {
		gridCols = 4;
		gridRows = 3;
		itemsPerPage = 12;
	}

	/**
	 * @param {string} sort
	 */
	function handleSortSelection(sort) {
		selectedSort = sort;
		dispatch('sortChanged', sort);
		dispatch('resetImages');
		currentPage = 0;
		scrollToTop();
		filterItem = false;
	}

	function scrollToTop() {
		if (typeof window !== 'undefined') {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}
	}
</script>

<div>
	<div class=" flex content-center items-center justify-center gap-10">
		<div class="mx-14 flex w-[120rem] justify-between">
			<div class="flex gap-20">
				<button class="flex gap-2" onclick={handleSelection}
					>Hide Filters
					<FilterIcon />
				</button>
				<h2 class="flex justify-start">Number of items filter</h2>
			</div>

			<div class="flex justify-end gap-20">
				<div class="relative">
					<button class="flex gap-2" onclick={handleFilter}>
						Sort By <span>({selectedSort})</span>
						<DropdownIcon />
					</button>

					{#if filterItem}
						<ul
							class="border-md absolute left-8 z-50 mt-2 w-[10rem] rounded-lg border border-x-white bg-black py-3 text-start text-white"
						>
							<li class=" hover:bg-blue-500 hover:text-white">
								<button onclick={() => handleSortSelection('New to Old')}>New to Old </button>
							</li>

							<li class=" hover:bg-blue-500 hover:text-white">
								<button onclick={() => handleSortSelection('Old to New')}>Old to New </button>
							</li>

							<li class=" hover:bg-blue-500 hover:text-white">
								<button onclick={() => handleSortSelection('Recommended')}>Recommended</button>
							</li>

							<li class=" hover:bg-blue-500 hover:text-white">
								<button onclick={() => handleSortSelection('Name A-Z')}>Name A-Z</button>
							</li>

							<li class=" hover:bg-blue-500 hover:text-white">
								<button onclick={() => handleSortSelection('Name Z-A')}>Name Z-A</button>
							</li>

							<li class=" hover:bg-blue-500 hover:text-white">
								<button onclick={() => handleSortSelection('low to high')}
									>Price(low to high)</button
								>
							</li>

							<li class=" hover:bg-blue-500 hover:text-white">
								<button onclick={() => handleSortSelection('high to low')}
									>Price(Hign to Low)</button
								>
							</li>
						</ul>
					{/if}
				</div>
				<div class="flex justify-end gap-3">
					<button class="hover:fill-orange" onclick={setGrid3x3}><FilterSizeImage3 /></button>
					<button class="hover:fill-orange" onclick={setGrid4x4}><FilterSizeImage4 /></button>
				</div>
			</div>
		</div>
	</div>

	<div class="mx-14 flex content-center items-center justify-center">
		<div class="flex w-[120rem] justify-center">
			{#if sideSelection}
				<div class="basis-[10%]">
					<div class="mt-10 w-full">
						<section class="flex justify-between">
							<h2>In-Stock</h2>
							<button onclick={handleStock}>
								{#if inStock}
									<ArrowUpIcon />
								{:else}
									<DropdownIcon />
								{/if}
							</button>
						</section>
						{#if inStock}
							<section class="mt-3 flex gap-1 delay-1000">
								<input type="Checkbox" />
								<h4>Pre-Order</h4>
								<p>({preOrderCount})</p>
							</section>
							<section class="flex gap-1 delay-1000">
								<input type="Checkbox" />
								<h4>Available</h4>
								<p>({availableCount})</p>
							</section>
						{/if}
					</div>
					<hr class="mt-3 w-[100%]" />

					{#if showSelectionAnimeBrand}
						<div class="mt-10 w-full">
							<section class="flex justify-between">
								<h2>Selection Anime</h2>
								<button onclick={handleSelectANime}>
									{#if selectAnime}
										<ArrowUpIcon />
									{:else}
										<DropdownIcon />
									{/if}
								</button>
							</section>
							{#if selectAnime}
								<section class="mt-2 flex gap-1">
									<input type="Checkbox" />
									<h4>One-Piece</h4>
								</section>
								<section class="flex gap-1">
									<input type="Checkbox" />
									<h4>Naruto</h4>
								</section>
								<section class="flex gap-1">
									<input type="Checkbox" />
									<h4>Bleach</h4>
								</section>
								<section class="flex gap-1">
									<input type="Checkbox" />
									<h4>Assorted</h4>
								</section>
							{/if}
						</div>
						<hr class="mt-3 w-[100%]" />
					{/if}

					<div class="mt-10 w-full">
						<section class="flex justify-between">
							<h2>Price</h2>
							<button onclick={handlePrice}>
								{#if selectPrice}
									<ArrowUpIcon />
								{:else}
									<DropdownIcon />
								{/if}
							</button>
						</section>
						{#if selectPrice}
							<section class="flex gap-1">
								<input type="checkbox" />

								<h4>$0 - $25</h4>
							</section>
							<section class="flex gap-1">
								<input type="checkbox" />
								<h4>$25 - $50</h4>
							</section>
							<section class="flex gap-1">
								<input type="checkbox" />
								<h4>$50 - $75</h4>
							</section>
							<section class="flex gap-1">
								<input type="checkbox" />
								<h4>$75 - $100</h4>
							</section>
							<section class="flex gap-1">
								<input type="checkbox" />
								<h4>$100+</h4>
							</section>
						{/if}
					</div>
					<hr class="mt-3 w-[100%]" />
				</div>
			{/if}

			<div class="basis-[90%]">
				<slot></slot>
			</div>
		</div>
	</div>
</div>

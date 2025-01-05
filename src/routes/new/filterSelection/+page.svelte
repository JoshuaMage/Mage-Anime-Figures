<script>
    import FilterIcon from '../../../svg/filterIcon.svelte';
	import DropdownIcon from '../../../svg/dropdownIcon.svelte';
	import FilterSizeImage3 from '../../../svg/filterSizeImage3.svelte';
	import FilterSizeImage4 from '../../../svg/filterSizeImage4.svelte';
	import ArrowUpIcon from '../../../svg/arrowUpIcon.svelte';
	

	let filterItem = false;
	let inStock = true;
	let selectAnime = true;
	let selectPrice = true;
	let sideSelection = true;

	function handleFilter() {
		filterItem = !filterItem;
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
</script>

<div
	
>
	

	<div class="flex content-center items-center justify-center gap-10">
		<div class="mx-10 flex w-1920 justify-between">
			<div class="flex gap-20">
				<button class="flex gap-2" onclick={handleSelection}
					>Hide Filters
					<FilterIcon />
				</button>
				<h2 class="flex justify-start">Number of items filter</h2>
			</div>

			<div class="flex justify-end gap-20">
				<section>
					<button class="flex" onclick={handleFilter}
						>Sort By New (New to Old) <DropdownIcon /></button
					>
					{#if filterItem}
						<ul
							class="border-md absolute mt-2 rounded-lg border border-x-white bg-black py-3 text-start text-white"
						>
							<li class="pr-20 hover:bg-blue-500 hover:text-white">
								<button>New(New to Old) </button>
							</li>

							<li class="pr-20 hover:bg-blue-500 hover:text-white">
								<button>Recommended</button>
							</li>
							<li class="pr-20 hover:bg-blue-500 hover:text-white">
								<button>Name A-Z</button>
							</li>
							<li class="pr-20 hover:bg-blue-500 hover:text-white">
								<button>Name Z-A</button>
							</li>
							<li class="pr-20 hover:bg-blue-500 hover:text-white">
								<button>Price(low to high)</button>
							</li>
							<li class="pr-20 hover:bg-blue-500 hover:text-white">
								<button>Price(Hign to Low)</button>
							</li>
						</ul>
					{/if}
				</section>
				<div class="flex justify-end">
					<button class="hover:fill-orange"><FilterSizeImage3 /></button>
					<button class="hover:fill-orange"><FilterSizeImage4 /></button>
				</div>
			</div>
		</div>
	</div>

	<div class="mx-2 flex content-center items-center justify-center">
		<div class="flex w-1920 justify-center">
			{#if sideSelection}
				<div class="basis-[10%]">
					<div class="w-full mt-10">
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
							</section>
							<section class="flex gap-1 delay-1000">
								<input type="Checkbox" />
								<h4>Shipping Now</h4>
							</section>
						{/if}
					</div>
					<hr class="mt-3 w-[100%]" />

					<div class="w-full mt-10">
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

					<div class="w-full mt-10">
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
								<input type="Checkbox" />
								<h4>$0 - $25</h4>
							</section>
							<section class="flex gap-1">
								<input type="Checkbox" />
								<h4>$25 - $50</h4>
							</section>
							<section class="flex gap-1">
								<input type="Checkbox" />
								<h4>$50 - $75</h4>
							</section>
							<section class="flex gap-1">
								<input type="Checkbox" />
								<h4>$75 - $100</h4>
							</section>
							<section class="flex gap-1">
								<input type="Checkbox" />
								<h4>$100+</h4>
							</section>
						{/if}
					</div>
					<hr class="mt-3 w-[100%]" />
				</div>
			{/if}

		
		</div>
	</div>
</div>

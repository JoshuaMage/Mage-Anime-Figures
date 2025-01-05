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
		window.scrollTo({
			top:0,
			behavior: 'smooth' 
		})
	}
</script>

<div class="container my-5 grid grid-cols-3 grid-rows-3 p-5 ">
	{#each Object.entries(newFiguresAnime[0]).slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage) as [name, item]}
		<div class="mb-10 mr-8 grid grid-rows-2 bg-black rounded-2xl" style="grid-template-rows: 80% 20% ">
			<div class="h-full relative mx-7 mt-4 pb-3 ">
				<img
					src={item.image[currentIndexes[name]]}
					alt={`${name} image ${currentIndexes[name] + 1}`}
					class=" h-[500px] w-[100%] object-fill rounded-xl"
				/>
				<button
					onclick={() => showPreviousImage(name)}
					class="absolute bottom-[50%] right-[87%] rounded-full"><LeftiCon /></button
				>
				<button onclick={() => showNextImage(name)} class="absolute bottom-[50%] left-[87%]"
					><RightIcon /></button
				>
			</div>

			<div class="relative flex items-center justify-center bg-transparent  ">
				<div>
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

				<div>
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

<div class="my-3 flex h-[5rem] content-center justify-center text-center">
	<button onclick={previousPage} disabled={currentPage === 0}
		><svg
			width="50px"
			height="50px"
			viewBox="0 0 32 32"
			xmlns="http://www.w3.org/2000/svg"
			fill="#000000"
			><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			></g><g id="SVGRepo_iconCarrier">
				<defs>
					<style>
						.cls-1 {
							fill: #8c9eff;
						}
						.cls-2 {
							fill: #5f7cf9;
						}
					</style>
				</defs> <title></title>
				<g id="Left">
					<path
						class="cls-1"
						d="M20.48,10.13a1,1,0,0,0-1,0l-8,5a1,1,0,0,0,0,1.7l8,5A1,1,0,0,0,20,22a.91.91,0,0,0,.48-.13A1,1,0,0,0,21,21V11A1,1,0,0,0,20.48,10.13Z"
					></path>
					<path
						class="cls-2"
						d="M11,16h0a1,1,0,0,0,.47.85l8,5A1,1,0,0,0,20,22a.91.91,0,0,0,.48-.13A1,1,0,0,0,21,21V16Z"
					></path>
				</g>
			</g></svg
		></button
	>
	<p class="mx-10 content-center text-lg">Page {currentPage + 1} of {totalPages}</p>
	<button onclick={nextPage} disabled={currentPage === totalPages - 1}
		><svg
			width="50px"
			height="50px"
			viewBox="0 0 32 32"
			xmlns="http://www.w3.org/2000/svg"
			fill="#000000"
			><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			></g><g id="SVGRepo_iconCarrier">
				<defs>
					<style>
						.cls-1 {
							fill: #8c9eff;
						}
						.cls-2 {
							fill: #5f7cf9;
						}
					</style>
				</defs> <title></title>
				<g id="Right">
					<path
						class="cls-1"
						d="M20.53,15.15l-8-5A1,1,0,0,0,11,11V21a1,1,0,0,0,.52.87A.91.91,0,0,0,12,22a1,1,0,0,0,.53-.15l8-5a1,1,0,0,0,0-1.7Z"
					></path>
					<path
						class="cls-2"
						d="M21,16H11v5a1,1,0,0,0,.52.87A.91.91,0,0,0,12,22a1,1,0,0,0,.53-.15l8-5A1,1,0,0,0,21,16Z"
					></path>
				</g>
			</g></svg
		></button
	>
</div>

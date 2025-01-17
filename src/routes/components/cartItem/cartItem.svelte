<script>
	import { isCartVisible, cartItems } from '$lib/store';
	let count = $state(0);
	let doubled = $derived(count + 1);
</script>

<div>
	<script>
		import { isCartVisible, cartItems } from '$lib/store';

		function increment(item) {
			// Update the count in the store reactively
			item.count += 1;
			cartItems.update((items) => items); // Trigger reactivity in the store
		}

		function decrement(item) {
			// Update the count in the store reactively
			item.count -= 1;
			cartItems.update((items) => items); // Trigger reactivity in the store
		}
	</script>

	{#if $isCartVisible}
		<div
			class="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-70 font-[Roboto] text-white"
		>
			<div class="w-3/12 bg-gray-950 p-5">
				{#if $cartItems.length > 0}
					<h2 class="mb-10 text-xl font-bold">User Cart ({$cartItems.length})</h2>

					<ul class="h-screen overflow-y-auto">
						{#each $cartItems as item}
							<li class="mb-5 flex flex-col justify-between rounded-md bg-gray-800 py-5">
								<section class="mb-2 grid grid-cols-2">
									<img src={item.image[0]} alt={item.description} class="w-full h-[8rem] px-4" />
									<section class="flex flex-col">
										<p class="mb-1 text-xs">
											<span
												class={`${item.availability === 'Available' ? 'text-green-400' : 'text-red-400'} sm:text-[15px] md:text-[30px]`}
											>
												.
											</span>{item.availability}
										</p>
										<p class="text-wra text-startp text-[.9rem] font-bold">
											{item.description}
										</p>
									</section>
								</section>
								<hr class="border-t-2 border-gray-700" />
								<section class="flex flex-col gap-1">
									<section class="mt-5 grid grid-cols-4 text-center text-[10px] font-bold">
										<p>PRICE</p>
										<p>QUANTITY</p>
										<p>TOTAL</p>
									</section>
									<section class="grid grid-cols-4 text-center text-[17px] font-bold">
										<p>${item.price}</p>
										<section class="flex justify-around gap-2 rounded-full bg-black px-3 font-bold">
											<button
												onclick={() => count--}
												disabled={count <= 0}
												class={count <= 0 ? 'cursor-not-allowed' : ''}>-</button
											>
											<p>{doubled}</p>
											<button onclick={() => count++}>+</button>
										</section>
										<p>${doubled * item.price}</p>
										<!-- Calculate total for this item -->
										<button>🗑️</button>
									</section>
								</section>
							</li>
						{/each}
					</ul>
				{:else}
					<p>Your cart is empty!</p>
				{/if}
				<button onclick={() => isCartVisible.set(false)}>
					<span class="absolute right-7 top-0 mt-2 rounded-full text-xl">&#10060;</span>
				</button>
			</div>
		</div>
	{/if}
</div>

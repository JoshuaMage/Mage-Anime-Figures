<script>
	import { isCartVisible, cartItems } from '$lib/store';
	import { derived } from 'svelte/store';


	// Initialize item count
	function initializeItemCount(items) {
		return items.map((item) => {
			if (item.count === undefined || item.count === null) {
				item.count = 0;
			}
			return item;
		});
	}
	cartItems.update(initializeItemCount);

	// Increment item count
	function increment(item) {
		cartItems.update((items) => {
			return items.map((cartItem) => {
				if (cartItem.id === item.id) {
					cartItem.count = (cartItem.count || 0) + 1;
				}
				return cartItem;
			});
		});
	}

	// Decrement item count
	function decrement(item) {
		cartItems.update((items) => {
			return items.map((cartItem) => {
				if (cartItem.id === item.id && cartItem.count > 0) {
					cartItem.count = Math.max(0, (cartItem.count || 0) - 1);
				}
				return cartItem;
			});
		});
	}

	// Remove item from cart
	function removeItem(item) {
		cartItems.update((items) => {
			return items.filter((cartItem) => cartItem.id !== item.id);
		});
	}

	// Toggle delete confirmation
	function toggleDeleteButton(item) {
		cartItems.update((items) => {
			return items.map((cartItem) => {
				if (cartItem.id === item.id) {
					cartItem.showDeleteConfirmation = !cartItem.showDeleteConfirmation;
				}
				return cartItem;
			});
		});
	}

	// Derived store to calculate total price
	const totalPrice = derived(cartItems, ($cartItems) =>
		$cartItems.reduce((total, item) => total + item.count * item.price, 0)
	);
</script>

<div>
	{#if $isCartVisible}
		<div class="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-70 font-[Roboto] text-white">
			<div class="w-[25rem] bg-gray-950 relative">
				{#if $cartItems.length > 0}
					<h2 class="mb-10 text-xl font-bold">
						<strong class="mr-3 text-2xl font-bold">My Cart</strong> ({$cartItems.length}) items
					</h2>

					<ul class="flex h-full flex-col justify-between overflow-y-auto pb-24 w-full max-h-[calc(100vh-10rem)]">
						{#each $cartItems as item (item.id)}
							<li class="mb-5 rounded-md bg-gray-800 py-5 w-full">
								<section class="mb-2 grid grid-cols-2">
									<img
										src={item.image[0]}
										alt={item.description}
										class="h-[10rem] w-full rounded-lg px-4"
									/>
									<section class="flex flex-col">
										<p class="mb-1 text-xs">
											<span
												class={`${item.availability === 'Available' ? 'text-green-400' : 'text-red-400'} sm:text-[15px] md:text-[40px]`}
											>
												.
											</span>{item.availability}
										</p>
										<p class="text-wra text-startp font-bold">
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
												onclick={() => decrement(item)}
												disabled={item.count <= 0}
												class={item.count <= 0 ? 'cursor-not-allowed' : ''}>-</button>
											<p class="text-white">{item.count}</p>
											<button onclick={() => increment(item)}>+</button>
										</section>
										<p>${Math.round(item.count * item.price)}</p>
										<button onclick={() => toggleDeleteButton(item)}>🗑️</button>

										{#if item.showDeleteConfirmation}
											<section
												class="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform rounded-lg border border-white bg-black bg-transparent px-20 py-10 text-white shadow-lg "
												
											>
												<p class="mb-4 text-2xl font-bold">
													Do you want to remove <br /> this product from your cart?
												</p>
												<div class="flex justify-center space-x-4">
													<button
														class="rounded border border-white bg-transparent px-10 py-2 font-bold text-white hover:border-2"
														onclick={() => toggleDeleteButton(item)}>No</button>
													<button
														class="rounded border-2 border-orange bg-orange px-10 py-2 font-bold text-white hover:opacity-90"
														onclick={() => removeItem(item)}>Yes</button>
												</div>
											</section>
										{/if}
									</section>
								</section>
							</li>
						{/each}
					</ul>
				{:else}
					<p class="text-2xl font-bold">Your cart is empty!</p>
				{/if}

				<!-- Cart Summary and Confirmation -->
				<div class="absolute bottom-0 h-40 content-center bg-black px-5 py-5 w-full">
					<section class="mb-5 flex justify-between px-3">
						<p class="font-bold">Estimated Total:</p>
						<p>${Math.round($totalPrice)}</p>
					</section>
					<section class="flex justify-between px-2">
						<button class="w-40 rounded-md border active:border-2 border-white py-2">View Cart</button>
						<button class="w-40 rounded-md border border-black bg-blue-950 active:opacity-90 py-2">Checkout</button>
					</section>
				</div>

				<button onclick={() => isCartVisible.set(false)}>
					<span class="absolute right-7 top-0 mt-2 rounded-full text-xl">&#10060;</span>
				</button>
			</div>
		</div>
	{/if}
</div>

<style>
	ul::-webkit-scrollbar {
		width: 8px; /* Width of the scrollbar */
	}

	ul::-webkit-scrollbar-track {
		background: #2d3748; /* Background color of the scrollbar track */
	}

	ul::-webkit-scrollbar-thumb {
		background-color: #4a5568; /* Color of the scrollbar thumb */
		border-radius: 10px; /* Rounded corners for the scrollbar thumb */
		border: 2px solid #2d3748; /* Border around the scrollbar thumb */
	}

	ul::-webkit-scrollbar-thumb:hover {
		background-color: #718096; /* Color of the scrollbar thumb on hover */
	}

	
</style>
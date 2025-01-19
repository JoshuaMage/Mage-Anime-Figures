<script>
	import { isCartVisible, cartItems } from '$lib/store';

	// Initialize item count
	// @ts-ignore
	function initializeItemCount(items) {
		return items.map((/** @type {{ count: number | null | undefined; }} */ item) => {
			if (item.count === undefined || item.count === null) {
				item.count = 0;
			}
			return item;
		});
	}
	cartItems.update(initializeItemCount);

	// Increment item count
	// @ts-ignore
	function increment(item) {
		cartItems.update((items) => {
			return items.map((cartItem) => {
				// @ts-ignore
				if (cartItem.id === item.id) {
					// @ts-ignore
					cartItem.count = (cartItem.count || 0) + 1;
				}
				return cartItem;
			});
		});
	}

	// Decrement item count
	// @ts-ignore
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
	// @ts-ignore
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
</script>

<div>
	{#if $isCartVisible}
		<div class="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-70 font-[Roboto] text-white">
			<div class="w-[25rem] bg-gray-950 relative"> <!-- Parent container with fixed width -->
				{#if $cartItems.length > 0}
					<h2 class="mb-10 text-xl font-bold">
						<strong class="mr-3 text-2xl font-bold">My Cart</strong> ({$cartItems.length}) items
					</h2>

					<ul class="flex h-full flex-col justify-between overflow-y-auto pb-24 w-full">
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
												class={`${item.availability === 'Available' ? 'text-green-400' : 'text-red-400'} sm:text-[15px] md:text-[30px]`}
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
											<p>{item.count}</p>
											<button onclick={() => increment(item)}>+</button>
										</section>
										<p>${Math.round(item.count * item.price)}</p>
										<button onclick={() => toggleDeleteButton(item)}>🗑️</button>

										{#if item.showDeleteConfirmation}
											<section
												class="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform rounded-lg border border-white bg-black bg-transparent px-20 py-10 text-white shadow-lg"
												role="alertdialog"
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

				<!-- Cart Summary and Confirmation (Aligning to the same width as items) -->
				<div class="absolute bottom-0 h-40 content-center bg-black px-10 py-5 w-full">
					<section class="mb-5 flex justify-between px-3">
						<p class="font-bold">Estimated Total</p>
						<p>Total price</p>
					</section>
					<section class="flex justify-between px-3">
						<button class="w-40 rounded-md border border-white py-2">View Cart</button>
						<button class="w-40 rounded-md border border-white py-2">Checkout</button>
					</section>
				</div>

				<button onclick={() => isCartVisible.set(false)}>
					<span class="absolute right-7 top-0 mt-2 rounded-full text-xl">&#10060;</span>
				</button>
			</div>
		</div>
	{/if}
</div>


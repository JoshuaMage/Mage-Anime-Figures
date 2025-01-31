<script lang="ts">
	import { getAuth, signOut, type User } from 'firebase/auth';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { app } from '$lib/firebaseConfig';
	import '../app.css';
	import Footer from './components/footer.svelte';
	import CartItem from './components/cartItem/cartItem.svelte';

	import { isCartVisible, orderCount } from '$lib/store';

	function toggleCartItem() {
		isCartVisible.set(true);
	}

	let { children } = $props();
	let toggleArrow = $state(false);
	let figureList = $state(false);
	let user = writable<User | null>(null);

	function handleList() {
		figureList = !figureList;
	}

	function handleArrow() {
		toggleArrow = !toggleArrow;
	}

	const auth = getAuth(app);
	const logout = () => {
		signOut(auth)
			.then(() => {
				user.set(null);
				goto('/signIn'); // Redirect to SignIn page after logout
			})
			.catch((error) => {
				console.log('Logout error:', error);
			});
	};

	onMount(() => {
		auth.onAuthStateChanged((currentUser) => {
			user.set(currentUser); // Update user state when auth state changes
		});
	});
</script>

<div class="flex flex-col overflow-x-hidden bg-slate-950 text-slate-50 md:m-auto md:px-2">
	<!-- Your header content here -->

	<div class="relative rounded bg-opacity-80 shadow-lg sm:h-[14rem] lg:h-[15rem]">
		<div class="w-screen py-10">
			<div class="items-center justify-items-center sm:flex sm:flex-col md:grid md:grid-cols-4">
				<div>
					<h1><a href="/" class="text-xl sm:text-[25px] lg:text-4xl lg:font-bold">Mage</a></h1>
				</div>

				<div
					class="relative col-start-2 col-end-4 flex justify-center sm:mt-5 sm:text-[14px] md:mt-0 lg:text-xl"
				>
					<nav class="flex sm:gap-10 md:w-full lg:gap-16">
						<a href="/new" class="lg:font-bold">New</a>
						<button onclick={handleList}>
							<h2 class="lg:font-bold">Anime Figure list <span>&#11167;</span></h2>
							{#if figureList}
								<div
									class="absolute flex flex-col gap-2 bg-black px-1 py-3 text-start sm:w-24 sm:text-[12px] md:w-52 lg:text-xl"
								>
									<a
										href="/onepiece"
										class="rounded-md px-2 hover:bg-white hover:font-semibold hover:text-black"
										>One-Piece</a
									>
									<a
										href="/naruto"
										class="rounded-md px-2 hover:bg-white hover:font-semibold hover:text-black"
										>Naruto</a
									>
									<a
										href="/bleach"
										class="rounded-md px-2 hover:bg-white hover:font-semibold hover:text-black"
										>Bleach</a
									>
									<a
										href="/assorted"
										class="rounded-md px-2 hover:bg-white hover:font-semibold hover:text-black"
										>Assorted</a
									>
								</div>
							{/if}
						</button>
						<a href="/about" class="lg:font-bold">About Us</a>
					</nav>
				</div>

				<div class="flex justify-center sm:mt-3 md:gap-2">
					<input
						type="text"
						name="searchFigure"
						id="searchFigure"
						class="h-6 rounded-lg text-center text-black sm:w-[30%] md:w-[50%]"
					/>
					<section class="flex sm:ml-4 sm:gap-5 md:gap-8 lg:ml-0">
						{#if $user}
							<button class="flex gap-1 active:underline lg:font-bold" onclick={logout}>
								Log Out
							</button>
						{:else}
							<a href="/signIn" class="flex gap-1 active:underline lg:font-bold">
								<span>
									<img
										width="24"
										height="24"
										src="https://img.icons8.com/forma-bold/24/FFFFFF/user.png"
										alt="user"
									/>
								</span>
								Sign In
							</a>
						{/if}

						<!-- Cart Button -->
						<button onclick={toggleCartItem}>
							<img
								width="24"
								height="24"
								src="https://img.icons8.com/ios-filled/50/FFFFFF/shopping-bag.png"
								alt="shopping-bag"
							/>
							<!-- Cart Count Badge -->
							{#if $orderCount > 0}
								<p
									class="absolute top-12 ml-5 h-5 w-5 rounded-full bg-orange text-center text-sm text-white"
								>
									{$orderCount}
								</p>
							{/if}
						</button>
					</section>
				</div>
			</div>
		</div>
	</div>
</div>

<main>
	{@render children()}
</main>

<div>
	<Footer />
</div>

<!-- Render CartItem only if cart is visible -->
{#if $isCartVisible}
	<CartItem />
{/if}

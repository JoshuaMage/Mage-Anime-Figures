<script lang="ts">
	import '../app.css';
	import Footer from './components/footer.svelte';
	let { children } = $props();

	let toggleArrow = $state(false);
	let figureList = $state(false);




	function handleList() {
		figureList = !figureList;
	}
	function handleArrow() {
		toggleArrow = !toggleArrow;
	}
	
	

</script>

<div class="flex flex-col overflow-x-hidden bg-slate-950 text-slate-50 md:m-auto md:px-2">
	<div
		class=" flex content-center justify-center sm:gap-5 sm:text-[10px] md:text-lg lg:gap-20 lg:py-2"
	>
		<button onclick={handleArrow} class="hover:lg:font-bold"> &#11164 </button>
		{#if toggleArrow}
			<p>Mage Anime figures - We sniff your collection before sending them to you</p>
		{:else}
			<p>Get FREE shipping on orders over $75!</p>
		{/if}
		<button onclick={handleArrow} class="hover:lg:font-bold"> &#11166; </button>
	</div>

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

				<div class="flex justify-center sm:mt-3 md:gap-1">
					<input
						type="text"
						name="searchFigure"
						id="searchFigure"
						class="h-6 rounded-lg text-center text-black sm:w-[30%] md:w-[50%]"
					/>
					<section class="flex sm:ml-4 sm:gap-5 md:gap-1 lg:ml-0">
						<a href="/signIn" class="flex gap-1 lg:font-bold">
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
				
						<button class="font-bold" >Log-out</button>
					

						<a href="/cart">
							<img
								width="24"
								height="24"
								src="https://img.icons8.com/ios-filled/50/FFFFFF/shopping-bag.png"
								alt="shopping-bag"
							/>
						</a>
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

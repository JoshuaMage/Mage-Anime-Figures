<script>
	import '../app.css';
	import Footer from './components/footer.svelte';
	let { children } = $props();

	let toggleArrow =  $state(false);
	let figureList = $state(false);

	function handleList() {
		figureList = !figureList;
	}
	function handleArrow() {
		toggleArrow = !toggleArrow;
	}

	

</script>


<div class=" flex flex-col overflow-x-hidden bg-slate-950 text-slate-50 ">
	<div class="flex content-center justify-center gap-20 py-2 container">
		<button onclick={handleArrow} class="hover:font-bold"> &#11164 </button>
		{#if toggleArrow}
			<p>Mage Anime figures - We sniff your collection before sending them to you</p>
		{:else}
			<p>Get FREE shipping on orders over $75!</p>
		{/if}
		<button onclick={handleArrow} class="hover:font-bold"> &#11166; </button>
	</div>

	<div class=" relative z-10 rounded bg-opacity-80 p-5 shadow-lg">
		<div class=" w-screen py-10">
			<div class="grid grid-cols-4 items-center justify-items-center">
				<div>
					<h1><a href="/" class="text-xl font-bold">Mage</a></h1>
				</div>

				<div class=" relative col-start-2 col-end-4 flex justify-center">
					<nav class="flex gap-16">
						<a href="/new" class="font-bold">New</a>
						<button onclick={handleList}>
							<h2 class="font-bold">Anime Figure list <span>&#11167;</span></h2>
							{#if figureList}
								<div
									class="absolute flex w-[200px] flex-col gap-2 bg-black px-1 py-3 text-start"
								>
									<a
										href="/anime/onepiece"
										class="rounded-md px-2 hover:bg-white hover:font-semibold hover:text-black"
										>One-Piece</a
									>
									<a
										href="/anime/naruto"
										class="rounded-md px-2 hover:bg-white hover:font-semibold hover:text-black"
										>Naruto</a
									>
									<a
										href="/anime/bleach"
										class="rounded-md px-2 hover:bg-white hover:font-semibold hover:text-black"
										>Bleach</a
									>
									<a
										href="/anime/assorted"
										class="rounded-md px-2 hover:bg-white hover:font-semibold hover:text-black"
										>Assorted</a
									>
								</div>
							{/if}
						</button>
						<a href="/about" class="font-bold">About Us</a>
					</nav>
				</div>

				<div class=" flex justify-center gap-5">
					<input
						type="text"
						name="searchFigure"
						id="searchFigure"
						class="h-6 rounded-lg text-center text-black"
					/>
					<a href="/signIn" class="flex gap-1 font-bold">
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
					<a href="/cart">
						<img
							width="24"
							height="24"
							src="https://img.icons8.com/ios-filled/50/FFFFFF/shopping-bag.png"
							alt="shopping-bag"
						/>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>


<main >
{@render children()}
</main>


 <div>
<Footer />
</div>

<script>
	import Naruto from '../image/narutoMain.jpg';
	import Bleach from '../image/bleach.jpg';
	import Onepiece from '../image/onepiece.jpg';
	import ImageLoop from './infiniteLoop/imageLoop.svelte';

</script>

	<main class="min-w-screen min-h-screen overflow-x-hidden bg-slate-950 text-slate-50 ">
		<div class="flex flex-col content-center justify-center text-center ">
			<div class="flex h-[650px] w-screen items-center justify-center overflow-hidden">
				<div>
					<img src={Naruto} alt="naruto" class=" h-full w-[1920px] translate-y-60 object-cover" />
				</div>
			</div>

			<div class="my-28">
				<h4 class="font-Roboto text-3xl">OUR BRANDS</h4>
				<h2 class="text-orange my-2 text-5xl font-bold italic tracking-widest">
					The Ultimate fan Destination
				</h2>
				<h3 class="font-Roboto text-2xl">
					For most exclusive action figures, collectibles and <br /> more! Select a fan favorite brand
					and shop now.
				</h3>
			</div>

			<div class=" my-5 flex w-full justify-center">
				<ImageLoop />
			</div>

			<div class="my-10 flex h-[650px] w-screen items-center justify-center overflow-hidden">
				<div>
					<img
						src={Bleach}
						alt="kuraski"
						class="h-full w-[1920px] -translate-y-40 scale-x-[-1] transform object-cover"
					/>
				</div>
			</div>

			<div class="my-28">
				<h4 class="font-Roboto text-3xl">MAGE ANIME FIGURES</h4>
				<h2 class="text-orange my-2 text-5xl font-bold italic tracking-widest">
					One-Piece Collector
				</h2>
				<h3 class="font-Roboto text-2xl">
					Heads up, <strong class="text-4xl">One-Piece</strong> fans! All new One-piece <br /> Limeted
					Edition Figure are available!
				</h3>

				<button
					class="hover:bg-orange hover:shadow-orange mt-5 rounded-md border border-white px-4 py-2 text-xl font-semibold hover:font-bold hover:shadow-lg"
					><a href="">Collect Them All</a></button
				>
			</div>

			<div class="h-500 mt-10 flex w-screen items-center justify-center overflow-hidden">
				<img src={Onepiece} alt="kuraski" class="w-1920 h-full object-cover" />
			</div>

			<div class="flex content-center justify-center">
				<div class="w-1920 mb-5 bg-blue-950 py-20">
					<h2 class="text-orange my-3 text-5xl font-bold italic tracking-widest">
						MAGE <span class="font-semibold">PREMIUM</span>
					</h2>

					<h3 class="text-xl font-semibold tracking-wide">
						Exclusive Member Only Events & Content!
					</h3>
					<p class="text-xl font-semibold">Free Shipping to all products</p>

					<section class="mt-8">
						<a
							href=""
							class="hover:bg-orange hover:shadow-orange mx-4 mt-5 rounded-md border border-white px-4 py-2 text-xl font-semibold hover:font-bold hover:shadow-lg"
							>SIGN UP NOW</a
						>
						<a
							href=""
							class="hover:font-medium hover:underline hover:decoration-white hover:underline-offset-4"
							>Terms & Conditions</a
						>
					</section>
				</div>
			</div>
		</div>
	</main>


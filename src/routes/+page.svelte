<script>
	import Naruto from '../image/narutoMain.jpg';
	import Bleach from '../image/bleach.jpg';
	import Onepiece from '../image/onepiece.jpg';
	import ImageLoop from './infiniteLoop/imageLoop.svelte';
</script>

<main class="flex flex-col items-center justify-center bg-slate-950 text-center text-slate-50 overflow-x-hidden">
	<div class="content-center justify-center">
		<img src={Naruto} alt="naruto" class=" w-desktop object-cover sm:h-[13rem] md:h-[35rem]" />
	</div>

	<div class="sm:my-5 md:my-28">
		<h4 class="font-Roboto sm:text-lg md:text-3xl">OUR BRANDS</h4>
		<h2 class="my-2 font-bold italic tracking-widest text-orange sm:text-xl md:text-5xl">
			The Ultimate fan Destination
		</h2>
		<h3 class="font-Roboto sm:text-xs md:text-2xl">
			For most exclusive action figures, collectibles and <br /> more! Select a fan favorite brand and
			shop now.
		</h3>
	</div>

	<div class=" my-5 flex w-full justify-center">
		<ImageLoop />
	</div>

	<div class=" flex w-screen items-center justify-center">
		<div>
			<img
				src={Bleach}
				alt="kuraski"
				class="w-desktop scale-x-[-1] transform object-cover sm:h-[13rem] md:h-[35rem]"
			/>
		</div>
	</div>

	<div class="sm:my-5 md:my-28">
		<h4 class="font-Roboto sm:text-lg md:text-3xl">MAGE ANIME FIGURES</h4>
		<h2 class="my-2 font-bold italic tracking-widest text-orange sm:text-xl md:text-5xl">
			One-Piece Collector
		</h2>
		<h3 class="font-Roboto sm:text-xs md:text-2xl">
			Heads up, <strong class="md:text-4xl">One-Piece</strong> fans! All new One-piece <br /> Limeted
			Edition Figure are available!
		</h3>

		<button
			class="rounded-md border border-white py-2 font-semibold hover:bg-orange hover:font-bold hover:shadow-lg hover:shadow-orange sm:mt-2 sm:px-2 sm:text-xs md:mt-5 md:px-4 md:text-xl"
			><a href="">Collect Them All</a></button
		>
	</div>

	<img src={Onepiece} alt="kuraski" class=" w-desktop object-cover sm:h-[13rem] md:h-[35rem]" />

	<div class="flex content-center justify-center">
		<div class=" w-desktop bg-blue-950 sm:py-10 md:py-32">
			<h2 class="pb-5 font-bold italic tracking-widest text-orange sm:text-2xl md:text-8xl">
				MAGE <span class="font-semibold">PREMIUM</span>
			</h2>

			<h3 class="font-semibold tracking-wide md:text-2xl">
				Exclusive Member Only Events & Content!
			</h3>
			<p class="font-semibold md:text-2xl">Free Shipping to all products</p>

			<section class="flex justify-center text-center sm:mt-3 sm:gap-5 md:mt-8 md:gap-10">
				<a
					href=""
					class=" rounded-md border border-white py-2 font-semibold hover:bg-orange hover:font-bold hover:shadow-lg hover:shadow-orange sm:px-2 sm:text-xs md:px-4 md:text-2xl"
					>SIGN UP NOW</a
				>
				<a
					href=""
					class="hover:font-medium hover:underline hover:decoration-white hover:underline-offset-4 md:text-2xl"
					>Terms & Conditions</a
				>
			</section>
		</div>
	</div>
</main>

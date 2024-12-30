<script>
  import Naruto from "../image/narutoMain.jpg";
  import Bleach from "../image/bleach.jpg";
  import Onepiece from "../image/onepiece.jpg";
  import ImageLoop from "./infiniteLoop/imageLoop.svelte";
  import Layout from "./+layout.svelte";
  import Footer from "./components/footer.svelte";
  let toggleArrow = false;

  function handleArrow() {
    toggleArrow = !toggleArrow;
  }
</script>

<main
  class="bg-slate-950 min-h-screen min-w-screen text-slate-50 overflow-x-hidden"
>
  <div class="flex flex-col justify-center text-center content-center">
    <div class="flex flex-col">
      <div class="flex justify-center content-center gap-20 py-2">
        <button onclick={handleArrow} class="hover:font-bold"> &#11164 </button>
        {#if toggleArrow}
          <p>
            Mage Anime figures - We sniff your collection before sending them to
            you
          </p>
        {:else}
          <p>Get FREE shipping on orders over $75!</p>
        {/if}
        <button onclick={handleArrow} class="hover:font-bold">
          &#11166;
        </button>
      </div>

      <div class=" relative z-10 bg-opacity-80 p-5 rounded shadow-lg">
        <Layout />
      </div>
    </div>

    <div
      class="flex justify-center items-center h-500 w-screen overflow-hidden mt-5"
    >
      <img
        src={Naruto}
        alt="naruto"
        class="h-full object-cover w-1920 translate-y-60"
      />
    </div>

    <div class="my-28">
      <h4 class="text-3xl font-Roboto">OUR BRANDS</h4>
      <h2 class="text-5xl font-bold my-2 text-orange tracking-widest italic">
        The Ultimate fan Destination
      </h2>
      <h3 class="text-2xl font-Roboto">
        For most exclusive action figures, collectibles and <br /> more! Select a
        fan favorite brand and shop now.
      </h3>
    </div>

    <div class=" flex justify-center my-5 w-full">
      <ImageLoop />
    </div>

    <div
      class="flex justify-center items-center h-500 w-screen overflow-hidden my-10"
    >
      <img
        src={Bleach}
        alt="kuraski"
        class="h-full object-cover w-1920 -translate-y-40 transform scale-x-[-1]"
      />
    </div>

    <div class="my-28">
      <h4 class="text-3xl font-Roboto">MAGE ANIME FIGURES</h4>
      <h2 class="text-5xl font-bold my-2 text-orange tracking-widest italic">
        One-Piece Collector
      </h2>
      <h3 class="text-2xl font-Roboto">
        Heads up, <strong class="text-4xl">One-Piece</strong> fans! All new
        One-piece <br /> Limeted Edition Figure are available!
      </h3>

      <button
        class="border border-white rounded-md px-4 py-2 mt-5 text-xl font-semibold hover:font-bold hover:bg-orange hover:shadow-lg hover:shadow-orange"
        ><a href="">Collect Them All</a></button
      >
    </div>

    <div
      class="flex justify-center items-center h-500 w-screen overflow-hidden mt-10"
    >
      <img src={Onepiece} alt="kuraski" class="h-full object-cover w-1920" />
    </div>

    <div class="flex justify-center content-center">
      <div class="bg-blue-950 w-1920 py-20 mb-5">
        <h2 class="text-orange font-bold text-5xl tracking-widest italic my-3">
          MAGE <span class="font-semibold">PREMIUM</span>
        </h2>

        <h3 class="text-xl font-semibold tracking-wide">
          Exclusive Member Only Events & Content!
        </h3>
        <p class="font-semibold text-xl">Free Shipping to all products</p>

        <section class="mt-8">
          <a
            href=""
            class="border border-white rounded-md px-4 py-2 mt-5 text-xl font-semibold hover:font-bold hover:bg-orange hover:shadow-lg hover:shadow-orange mx-4"
            >SIGN UP NOW</a
          >
          <a
            href=""
            class="hover:underline hover:underline-offset-4 hover:decoration-white hover:font-medium"
            >Terms & Conditions</a
          >
        </section>
      </div>
    </div>

    <div>
      <Footer />
    </div>
    
  </div>
</main>

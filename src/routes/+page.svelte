<script>
  import naruto from "../image/narutoMain.jpg";
  import luffy from "../image/luffyMain.jpg";
  import ImageLoop from "./infiniteLoop/imageLoop.svelte";
  import Layout from "./+layout.svelte";
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

      <div class="justify-center content-center bg-black">
        <Layout />
      </div>
    </div>

    <div class="flex flex-col justify-center gap-10">
      <div
        class="flex justify-center items-center h-500 w-full overflow-hidden"
      >
        <img src={naruto} alt="naruto" class="h-full w-full object-cover" />
      </div>
      <div
        class="flex justify-center items-center h-500 w-full overflow-hidden"
      >
        <img src={luffy} alt="luffy" class="h-full w-full object-cover" />
      </div>
      <div class="gap-y-16">
        <h4 class="text-3xl font-Roboto">OUR BRANDS</h4>
        <h2 class="text-5xl font-bold my-2 text-orange tracking-widest">The Ultimate fan Destination</h2>
        <h3 class="text-2xl font-Roboto">
          For most exclusive action figures, collectibles, games, and <br /> more!
          Select a fan favorite brand and shop now.
        </h3>
      </div>
    </div>

    <ImageLoop />
  </div>
</main>

<script>
    import Layout from "../+layout.svelte";
</script>

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
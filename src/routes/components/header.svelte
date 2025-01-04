<script>


    let toggleArrow = false;
  
  function handleArrow() {
    toggleArrow = !toggleArrow;
  }
  </script>
  
  <div class="flex flex-col ccontainer">
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
        <button onclick={handleArrow} class="hover:font-bold"> &#11166; </button>
      </div>
  
  
    </div>
  </div>
  
<script>
  let figureList = false;

  function handleList() {
    figureList = !figureList;
  }
</script>

<div class=" w-screen py-10">
  <div class="grid grid-cols-4 items-center justify-items-center">
    <div>
      <h1><a href="/" class="font-bold text-xl">Mage</a></h1>
    </div>

    <div class=" col-start-2 col-end-4 flex justify-center relative">
      <nav class="flex gap-16">
        <a href="/new" class="font-bold">New</a>
        <button on:click={handleList}>
          <h2 class="font-bold">Anime Figure list <span>&#11167;</span></h2>
          {#if figureList}
            <div class="absolute  flex flex-col w-[200px] bg-black text-start py-3 gap-2 px-1 ">
              <a
                href="/anime/onepiece"
                class="hover:bg-white hover:text-black hover:font-semibold px-2 rounded-md "
                >One-Piece</a
              >
              <a
                href="/anime/naruto"
                class="hover:bg-white hover:text-black hover:font-semibold px-2 rounded-md"
                >Naruto</a
              >
              <a
                href="/anime/bleach"
                class="hover:bg-white hover:text-black hover:font-semibold px-2 rounded-md"
                >Bleach</a
              >
              <a
                href="/anime/assorted"
                class="hover:bg-white hover:text-black hover:font-semibold px-2 rounded-md"
                >Assorted</a
              >
            </div>
          {/if}
        </button>
        <a href="/about" class="font-bold">About Us</a>
      </nav>
    </div>

    <div class=" flex gap-5 justify-center">
      <input
        type="text"
        name="searchFigure"
        id="searchFigure"
        class="h-6 rounded-lg text-black text-center"
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

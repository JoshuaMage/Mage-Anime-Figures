<script>
    export let isFilterIconClicked = false;

    // This will handle toggling the state when the checkbox is clicked
    function handleToggle() {
        isFilterIconClicked = !isFilterIconClicked;
    }
</script>


<input type="checkbox" id="checkbox" bind:checked={isFilterIconClicked} onchange={handleToggle}>
<label for="checkbox" class={`isFilterIconClicked ? 'active' : '' toggle`}>
    <div class="bars" id="bar1"></div>
    <div class="bars" id="bar2"></div>
    <div class="bars" id="bar3"></div>
</label>



	<style>
		#checkbox {
  display: none;
}

.toggle {
  position: relative;
  width: 25px;
  height: 25px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition-duration: .5s;
}

.bars {
  width: 100%;
  height: 4px;
  background-color: white;
  border-radius: 4px;
}

#bar2 {
  transition-duration: .8s;
}

#bar1,#bar3 {
  width: 70%;
}

#checkbox:checked + .toggle .bars {
  position: absolute;
  transition-duration: .5s;
}

#checkbox:checked + .toggle #bar2 {
  transform: scaleX(0);
  transition-duration: .5s;
}

#checkbox:checked + .toggle #bar1 {
  width: 100%;
  transform: rotate(45deg);
  transition-duration: .5s;
}

#checkbox:checked + .toggle #bar3 {
  width: 100%;
  transform: rotate(-45deg);
  transition-duration: .5s;
}

#checkbox:checked + .toggle {
  transition-duration: .5s;
  transform: rotate(180deg);
}
	</style>
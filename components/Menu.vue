<template>
  <section>
    <div class="w-[11rem] h-screen bg-[#464646] flex flex-col text-center">
      <h1 class="text-center text-[2rem] text-red-600/90 font-extrabold mt-2">WITCHER</h1>
      <h3 class="rotatetext mt-[4.4rem] rotate-180 text-white text-[3.5rem] mx-auto font-thin ml-auto">
        The best until we do better.
      </h3>
      <div class="grid grid-cols-3 mt-[4.4rem] mx-auto gap-3">
        <a href="https://github.com/WitcherDevs">
          <Icon name="mdi:github-box" size="48" color="white" />
        </a>
        <a href="https://www.youtube.com/@witcherdevs">
          <Icon name="uil:youtube" size="48" color="red" />
        </a>
        <a href="mailto=contact@witcherdev.net">
          <Icon name="mdi:email" size="48" color="white" />
        </a>
      </div>
      <h6 class="mt-auto mb-2 text-white w-24 mx-auto">Web design by
        <span class="text-red-600/90 font-bold">Witcher</span>
      </h6>
    </div>
  </section>
</template>

<style>
.rotatetext {
  text-orientation: mixed;
  writing-mode: vertical-rl;
}
</style>
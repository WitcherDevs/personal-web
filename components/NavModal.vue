<script setup lang="ts">

</script>

<template>
  <div class="bg-[#222222]/80 fixed inset-0 z-50" @click.self="$emit('closeModal')">
    <div
      class="fixed inset-0 w-[24rem] h-[40rem] text-2xl text-center my-auto bg-[#3b3b3b] gap-4 rounded-lg mx-auto flex flex-col items-center justify-start overflow-auto">
      <NuxtLink class="flex flex-row justify-between text-center items-center w-[20rem] mt-6" to="/"
        exact-active-class="activemodal" @click.self="$emit('closeModal')">
        <Icon name="material-symbols:home" size="36" class="m-1" />
        <h1 class="text-2xl">Home</h1>
        <div></div>
        <!-- <Icon :name="valoMDOption ? 'material-symbols:keyboard-arrow-down' : 'ic:outline-keyboard-arrow-up'" /> -->
      </NuxtLink>
      <NuxtLink class="flex flex-row justify-between text-center items-center w-[20rem] mt-4" to="/references"
        exact-active-class="activemodal" @click.self="$emit('closeModal')">
        <Icon name="material-symbols:database" size="36" class="m-1" />
        <h1 class="text-2xl">References</h1>
        <div></div>
        <!-- <Icon :name="valoMDOption ? 'material-symbols:keyboard-arrow-down' : 'ic:outline-keyboard-arrow-up'" /> -->
      </NuxtLink>
      <NuxtLink class="flex flex-row justify-between text-center items-center w-[20rem] mt-4" to="/technologies"
        exact-active-class="activemodal" @click.self="$emit('closeModal')">
        <Icon
          name="streamline:interface-text-formatting-text-to-speech-1-speech-automated-translate-language-voice-technology"
          size="36" class="m-1" />
        <h1 class="text-2xl">Technologies</h1>
        <div></div>
        <!-- <Icon :name="valoMDOption ? 'material-symbols:keyboard-arrow-down' : 'ic:outline-keyboard-arrow-up'" /> -->
      </NuxtLink>
      <div class="grid grid-cols-3 mt-[2rem] mx-auto gap-20">
        <a target="_blank" href="https://github.com/WitcherDevs">
          <Icon name="mdi:github-box" size="48" color="white" />
        </a>
        <a target="_blank" href="https://www.youtube.com/@witcherdevs">
          <Icon name="uil:youtube" size="48" color="red" />
        </a>
        <a href="mailto:contact@witcherdev.net">
          <Icon name="mdi:email" size="48" color="white" />
        </a>
      </div>
      <h6 class="mt-[2rem] text-white w-26 mx-auto">Web design by
        <span class="text-red-600/90 font-extrabold uppercase">Witcher</span>
      </h6>
    </div>
  </div>
</template>

<style>
.activemodal {
  @apply bg-[#5c5c5c] rounded-lg shadow-md shadow-[#3f3f3f];
}
</style>
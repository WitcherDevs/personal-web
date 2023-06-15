<script setup lang="ts">
const responsiveModal = ref<Boolean>(false);
</script>

<template>
  <div v-show="responsiveModal">
    <NavModal @closeModal="() => (responsiveModal = false)" />
  </div>
  <nav class="flex flex-row justify-end text-white w-full md:px-16 text-3xl gap-16 mt-[0.8rem] relative">
    <div class="flex md:hidden mr-2">
      <Icon name="material-symbols:menu-rounded" size="48" @click="responsiveModal = true" />
    </div>
    <NuxtLink exact-active-class="active" to="/" class="px-2 py-1 h-12 hover:text-red-500 hidden md:flex">
      Home
    </NuxtLink>
    <NuxtLink exact-active-class="active" to="/technologies" class="px-2 py-1 h-12 hover:text-red-500 hidden md:flex">
      Technologies
    </NuxtLink>
    <NuxtLink exact-active-class="active" to="/references" class="px-2 py-1 h-12 hover:text-red-500 hidden md:flex">
      References
    </NuxtLink>
  </nav>
</template>

<style>
.active {
  @apply bg-red-600/90 rounded-lg shadow-md shadow-[#3f3f3f];
}
</style>
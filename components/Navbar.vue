<script setup lang="ts">

const responsiveModal = ref<Boolean>(false);


</script>

<template>
  <div>
    <nav class="flex justify-between items-center flex-row px-6 mt-6 md:px-24 md:mt-10">
      <NuxtLink to="/">
        <img src="~/assets/icon.png" alt="icon" class="w-[46px] md:w-[70px] icon-transform">
      </NuxtLink>
      <div>
        <button @click="responsiveModal = !responsiveModal" class="flex md:hidden">
          <Icon name="mdi:menu" size="42" />
        </button>
      </div>
      <div class="text-2xl hidden md:flex gap-10 font-bold">
        <NuxtLink to="/projects" class="hover:text-red-800" exact-active-class="text-red-700">Projects</NuxtLink>
        <NuxtLink to="/technologies" class="hover:text-red-800" exact-active-class="text-red-700">Technologies</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-red-800" exact-active-class="text-red-700">Contact</NuxtLink>
      </div>
    </nav>
    <XyzTransition xyz="small-100% origin-top">
      <div v-show="responsiveModal">
        <NavModal @closeModal="() => (responsiveModal = false)" />
      </div>
    </XyzTransition>
  </div>
</template>

<style>
.icon-transform {
  transition: transform 0.3s ease-in-out;
}

.icon-transform:hover {
  transform: rotate(-10deg)
}
</style>
<template>
  <nav class="flex flex-row justify-end text-white w-[102rem] text-3xl gap-16 mt-[0.8rem]">
    <NuxtLink exact-active-class="active" to="/" class="px-2 py-1 h-12 hover:text-red-500">
      Home
    </NuxtLink>
    <NuxtLink exact-active-class="active" to="/about" class="px-2 py-1 h-12 hover:text-red-500">
      About
    </NuxtLink>
    <NuxtLink exact-active-class="active" to="/references" class="px-2 py-1 h-12 hover:text-red-500">
      References
    </NuxtLink>
  </nav>
</template>

<style>
.active {
  @apply bg-red-600/90 rounded-lg;
}
</style>
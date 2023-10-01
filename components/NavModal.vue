<template>
  <div @click.self="$emit('closeModal')" class="bg-neutral-800/80 fixed inset-0 z-50">
    <div
      class="fixed inset-0 w-[22rem] h-[35rem] text-2xl text-center my-auto bg-neutral-800 gap-4 rounded-lg mx-auto flex flex-col items-center justify-start overflow-auto">
      <NuxtLink @click.self="$emit('closeModal')" to="/projects"
        class="flex flex-row justify-between text-center items-center w-[20rem] mt-6">
        <Icon name="material-symbols:folder-copy-rounded" size="26" />
        <h1 class="text-base">Projects</h1>
        <Icon name="material-symbols:arrow-forward-ios" size="20" />
      </NuxtLink>
      <NuxtLink @click.self="$emit('closeModal')" to="/technologies"
        class="flex flex-row justify-between text-center items-center w-[20rem] mt-4">
        <Icon name="ic:baseline-computer" size="26" />
        <h1 class="text-base">Technologies</h1>
        <Icon name="material-symbols:arrow-forward-ios" size="20" />
      </NuxtLink>
      <NuxtLink @click.self="$emit('closeModal')" to="/contact"
        class="flex flex-row justify-between text-center items-center w-[20rem] mt-4">
        <Icon name="ri:customer-service-2-fill" size="26" />
        <h1 class="text-base">Contact</h1>
        <Icon name="material-symbols:arrow-forward-ios" size="20" />
      </NuxtLink>
      <div class="flex gap-8 mt-12">
        <a href="https://discord.com/users/299955838368612353" class="hover:text-red-700">
          <Icon name="mdi:discord" size="32" />
        </a>
        <a href="https://github.com/WitcherDevs" class="hover:text-red-700">
          <Icon name="mdi:github-box" size="32" />
        </a>
        <a href="https://www.youtube.com/@WitcherDevs" class="hover:text-red-700">
          <Icon name="uil:youtube" size="32" />
        </a>
      </div>
      <h3 class="text-base mt-2">Developed by
        <span class="text-red-700 font-bold">Witcher</span>
      </h3>
    </div>
  </div>
</template>
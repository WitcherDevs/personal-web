<script setup lang="ts">
const platforms = ref([{
  name: "Discord",
  icon: "mingcute:discord-fill",
  value: "witcherdev"
}, {
  name: "E-Mail",
  icon: "ic:baseline-email",
  value: "contact@witcherdev.net"
}, {
  name: "Discord Server",
  icon: "mingcute:discord-fill",
  value: "discord.gg/serendia"
}])
</script>

<template>
  <main class="flex justify-center items-center h-[180vh] md:h-[82vh]">
    <div class="grid grid-cols-1 md:mt-0 md:grid-cols-3 gap-32">
      <div v-for="(item) in  platforms " class="bg-neutral-800 h-[25rem] w-[24rem] flex rounded-lg flex-col items-center">
        <Icon :name="item.icon" size="100" class="mt-12" />
        <h2 class="text-4xl font-bold mt-8">{{ item.name }}</h2>
        <h4 class="mt-4 text-lg">⤷ {{ item.value }}</h4>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
const projects = ref([{
  name: "Serendia Squad Frontend",
  description: "I developed the frontend of the Serendia Squad site as a volunteer and we are still developing and working to make it better. The purpose of the site is for people to share code/information and benefit from the shared code/information.",
  link: "https://serendiasquad.net",
}, {
  name: "Discord Verified Bot",
  description: "I developed a bot designed entirely on requests that can be used by members using Discord and it was approved by Discord, but I closed the bot for materialistic reasons. Before it was closed, it had about 150 servers and 500 thousand users.",
  link: "",
}, {
  name: "Algorand Module",
  description: "I developed a module that can be used to interact with the Algorand blockchain in NodeJS projects. I developed this module to make it easier for developers to interact with the Algorand blockchain, but it is still under development and has many shortcomings.",
  link: "https://github.com/WitcherDevs/algorandjs",
}, {
  name: "Discord Bot Dashboard",
  description: "I developed a dashboard that can be used to manage a Discord bot. I developed this dashboard to make it easier for developers to manage Discord bots, but I left the project unfinished because I was busy. I used VueJS,TailwindCSS and ExpressJS in this project.",
  link: "https://github.com/WitcherDevs/discord-bot-dashboard"
}])

const getNumberBoolean = (number: number) => {
  return number % 2 == 0
}
</script>

<template>
  <main class="flex justify-center items-start h-[82vh]">
    <div class="mt-[4rem] md:mt-[6rem] h-[38.5rem] overflow-y-auto px-2">
      <div v-for="(item, i) in projects" class="flex flex-col gap-4">
        <div v-if="getNumberBoolean(i)" class="flex items-start gap-6 mt-5">
          <Icon name="ph:code" size="100" />
          <div class="flex gap-1 flex-col">
            <a class="text-2xl md:text-3xl font-bold" :href="item.link" target="_blank" v-if="item.link.length">{{
              item.name }}</a>
            <h2 class="text-2xl md:text-3xl font-bold" v-else>{{ item.name }}</h2>
            <h3 class="w-[20rem] md:w-[60rem] md:text-lg">{{ item.description }}</h3>
          </div>
        </div>
        <div v-else class="flex items-start gap-6 mt-5">
          <div class="flex gap-1 flex-col">
            <a class="text-2xl md:text-3xl font-bold" :href="item.link" target="_blank" v-if="item.link.length">{{
              item.name }}</a>
            <h2 class="text-2xl md:text-3xl font-bold" v-else>{{ item.name }}</h2>
            <h3 class=" w-[20rem] md:w-[60rem] md:text-lg">{{ item.description }}</h3>
          </div>
          <Icon name="ph:code" size="100" />
        </div>
        <div class="bg-white h-[0.01rem] w-full" v-if="i !== projects.length - 1" />
      </div>
    </div>
  </main>
</template>

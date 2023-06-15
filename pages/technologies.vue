<script setup lang="ts">
const technologies = [
  "logos:vue",
  "logos:nuxt",
  "logos:tailwindcss",
  "logos:typescript-icon",
  "logos:javascript",
  "logos:nodejs-icon",
  "skill-icons:expressjs-light",
  "logos:postgresql",
  "logos:git-icon",
  "logos:github-icon",
  "logos:visual-studio-code",
  "vscode-icons:file-type-light-prettier",
  "logos:eslint",
  "skill-icons:svelte",
  "devicon:windows11-wordmark",
  "skill-icons:mongodb",
  "skill-icons:postman",
  "devicon-plain:fastify-wordmark",
];
</script>

<template>
  <section class="mt-20 flex flex-col ml-20">
    <h1 class="text-5xl font-extrabold italic tracking-wider">THE WITCHER</h1>
    <h3 class="text-3xl font-mono mt-1 tracking-widest">Technologies I Use</h3>
    <div class="mt-[10rem] flex flex-row">
      <div class="grid grid-cols-6 gap-12 bg-white/20 h-[30rem] rounded-lg">
        <Icon v-for="(item) in technologies" :name="item" size="90" class="m-4" />
      </div>
      <div class="grid grid-cols-2 grid-flow-row ml-28 gap-[10rem]">
        <span class="bg-[#171717]/60 w-44 h-44 rounded-full backdrop-blur-3" />
        <span class="bg-[#171717]/60 w-44 h-44 rounded-full backdrop-blur-3" />
        <span class="bg-[#171717]/60 w-44 h-44 rounded-full backdrop-blur-3" />
      </div>
    </div>
  </section>
</template>

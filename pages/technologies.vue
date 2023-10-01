<script setup lang="ts">
const technologies = ref(["devicon:vuejs", "skill-icons:expressjs-dark", "logos:nodejs-icon", "vscode-icons:file-type-typescript-official", "logos:nuxt-icon", "simple-icons:fastify", "skill-icons:mongodb", "skill-icons:postgresql-dark", "skill-icons:svelte", "logos:javascript", "logos:prettier", "devicon:eslint", "skill-icons:tailwindcss-dark", "devicon:html5", "skill-icons:postman", "devicon:csharp", "skill-icons:python-dark", "logos:visual-studio-code", "logos:brave", "skill-icons:docker", "vscode-icons:file-type-git", "skill-icons:github-dark", "devicon:windows11-wordmark", "logos:npm-icon"])
</script>

<template>
  <main class="flex justify-center md:items-start mx-auto md:mx-0 h-[140vh] md:h-[82vh]">
    <div class="grid grid-cols-3 md:grid-cols-8 gap-12 md:gap-5 w-full md:gap-y-20 md:px-[22rem] mt-12 md:mt-[10rem]">
      <div v-for="(item) in technologies">
        <Icon :name="item" size="64" />
      </div>
    </div>
  </main>
</template>
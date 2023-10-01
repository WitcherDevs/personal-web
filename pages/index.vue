<template>
  <main class="flex justify-center items-center h-[82vh]">
    <div class="flex flex-col md:flex-row items-center mt-24 md:mt-0 gap-[5rem]">
      <div
        class="bg-gray-200 w-44 h-44 md:w-56 flex items-center justify-center md:h-56 ronuded-xl rounded-lg transformx">
        <div class="bg-red-800 flex w-44 h-44 md:w-56 md:h-56 items-center justify-center transformxx rounded-xl">
          <img src="/photo.png" alt="photo" class="w-36 md:w-52 rounded-full fixed transformxxx">
        </div>
      </div>
      <div class="flex md:text-start text-center flex-col gap-2">
        <h1 class="text-4xl md:text-5xl font-bold">About Me</h1>
        <h3 class="w-[22rem] md:w-[48rem] text-lg">My name is <span class="font-bold">Çağrı</span> I am 17 years old and I
          have been
          interested in software for 3
          years. I am known as Witcher. I have knowledge in many programming languages. I am constantly developing new
          projects and improving myself to achieve my goals. I learn current <NuxtLink to="/technologies"
            class="font-bold hover:text-gray-300">technologies
          </NuxtLink> and develop <NuxtLink to="/projects" class="font-bold hover:text-gray-300">projects</NuxtLink>. You
          can
          contact me to work with me.</h3>
        <NuxtLink to="/contact" class="flex justify-end gap-4 mt-6 mb-1 md:mt-10">
          <button class="bg-red-800 w-28 h-10 rounded-lg text-base font-bold hover:bg-red-900 hover:text-gray-300">Contact
            Me</button>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<style>
.transformx {
  transform: rotate(-50deg)
}

.transformxx {
  transform: rotate(-20deg)
}

.transformxxx {
  transform: rotate(70deg)
}
</style>
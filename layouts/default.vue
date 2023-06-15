<template>
  <div>
    <div class="flex flex-row">
      <Menu class="hidden md:flex" />
      <div class="flex flex-col w-full">
        <Navbar class="hidden md:flex" />
        <slot />
      </div>
    </div>
  </div>
</template>
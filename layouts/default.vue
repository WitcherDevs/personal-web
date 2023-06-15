<template>
  <div>
    <div class="flex flex-row">
      <Menu />
      <div class="flex flex-col w-full">
        <Navbar />
        <slot />
      </div>
    </div>
  </div>
</template>
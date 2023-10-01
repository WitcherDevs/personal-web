import "@animxyz/core";

import VueAnimXYZ from "@animxyz/vue3";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueAnimXYZ);
});

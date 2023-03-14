import { ref } from "vue";
import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layouts", () => {
  const isShowSidebar = ref(false);

  function toogleSidebar() {
    isShowSidebar.value = !isShowSidebar.value;
  }

  return { isShowSidebar, toogleSidebar };
});

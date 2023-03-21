import { ref } from "vue";
import { defineStore } from "pinia";
import { useHeaderMenu, useSideMenu } from "~~/composables/menu";

export const useSectionStore = defineStore("section", () => {
  const section = ref<string>("tv");
  const isShowSidebar = ref<boolean>(false);
  const { headerMenu, setHeaderMenu } = useHeaderMenu();
  const { sideMenu, setSideMenu } = useSideMenu();

  setHeaderMenu(section.value);
  setSideMenu();

  watch(section, () => {
    setHeaderMenu(section.value);
  });

  const toogleSidebar = (): void => {
    isShowSidebar.value = !isShowSidebar.value;
  };

  const setSection = (payload: string): void => {
    section.value = payload;
  };

  return {
    section,
    sideMenu,
    headerMenu,
    isShowSidebar,
    toogleSidebar,
    setSection,
  };
});

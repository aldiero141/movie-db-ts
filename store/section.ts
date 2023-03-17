import { ref } from "vue";
import { defineStore } from "pinia";
import { IMenu } from "@/models/menu";

export const useSectionStore = defineStore("section", () => {
  const section = ref<string>("");
  const headerMenu = ref<IMenu[]>([]);
  const sideMenu = ref<IMenu[]>([]);
  const isShowSidebar = ref<boolean>(false);

  headerMenu.value = [
    {
      name: "Now Playing",
      to: "now_playing",
    },
    {
      name: "Popular",
      to: "popular",
    },
    {
      name: "Top Rated",
      to: "top_rated",
    },
    {
      name: "Upcoming",
      to: "upcoming",
    },
  ];

  sideMenu.value = [
    {
      name: "Menu 1",
      to: "Menu 1",
    },
    {
      name: "Menu 2",
      to: "Menu 2",
    },
    {
      name: "Menu 3",
      to: "Menu 3",
    },
  ];

  const toogleSidebar = (): void => {
    isShowSidebar.value = !isShowSidebar.value;
  };

  const addMenu = (payload: IMenu, type: string) => {
    if (type == "sidebar") sideMenu.value.push(payload);
    if (type == "header") headerMenu.value.push(payload);
  };

  const deleteMenu = (type: string, index: number) => {
    if (type == "sidebar") sideMenu.value.splice(index, 1);
    if (type == "header") headerMenu.value.splice(index, 1);
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
    addMenu,
    deleteMenu,
  };
});

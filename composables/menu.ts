import { ref } from "vue";
import { IMenu } from "@/models/menu";

export function useHeaderMenu() {
  const headerMenu = ref<IMenu[]>([]);
  const setHeaderMenu = (payload: string) => {
    if (payload == "feedback") {
      headerMenu.value = [];
    }
    if (payload == "movie") {
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
    }
    if (payload == "tv") {
      headerMenu.value = [
        {
          name: "On The Air",
          to: "on_the_air",
        },
        {
          name: "Popular",
          to: "popular",
        },
        {
          name: "Top Rated",
          to: "top_rated",
        },
      ];
    }
  };
  const addMenu = (payload: IMenu, type: string) => {
    headerMenu.value.push(payload);
  };

  const deleteMenu = (type: string, index: number) => {
    headerMenu.value.splice(index, 1);
  };

  return { headerMenu, setHeaderMenu, addMenu, deleteMenu };
}

export function useSideMenu() {
  const sideMenu = ref<IMenu[]>([]);
  const setSideMenu = () => {
    sideMenu.value = [
      {
        name: "Movie",
        to: "movie",
      },
      {
        name: "TV",
        to: "tv",
      },
    ];
  };
  const addMenu = (payload: IMenu, type: string) => {
    sideMenu.value.push(payload);
  };

  const deleteMenu = (type: string, index: number) => {
    sideMenu.value.splice(index, 1);
  };
  return { sideMenu, setSideMenu, addMenu, deleteMenu };
}

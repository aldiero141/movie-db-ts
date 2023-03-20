import { ref } from "vue";
import { IMenu } from "@/models/menu";

export function useHeaderMenu() {
  const headerMenu = ref<IMenu[]>([]);
  const setHeaderMenu = (payload: string) => {
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
          name: "Latest",
          to: "latest",
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
      {
        name: "Feedback",
        to: "feedback",
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

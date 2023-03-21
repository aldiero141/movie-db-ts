import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { IData } from "../models/api";
import { IShows } from "../models/tv";

export const useShowsStore = defineStore("shows", () => {
  const shows = ref();
  const filter = ref<string>("on_the_air");
  const config = useRuntimeConfig();
  const api_key: string = config.API_KEY;
  const api_base_url: string = config.API_BASE_URL;

  const getShows = async (payload: string) => {
    const url = computed<string>(() => `${api_base_url}/tv/${payload}`);
    const { data } = await useFetch<IData<IShows>>(url, {
      params: {
        api_key: api_key,
      },
    });
    shows.value = data.value;
  };

  const getFilteredShows = async (payload: string) => {
    const url = computed<string>(() => `${api_base_url}/search/tv`);
    const { data } = await useFetch<IData<IShows>>(url, {
      params: {
        api_key: api_key,
        query: payload,
      },
    });
    shows.value = data.value;
  };

  const setFilter = (payload: string): void => {
    filter.value = payload;
  };

  return {
    shows,
    filter,
    getShows,
    getFilteredShows,
    setFilter,
  };
});

import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { IData } from "../models/api";
import { IShows } from "../models/tv";

export const useShowsStore = defineStore("shows", () => {
  const search = ref<string>("");
  const filter = ref<string>("popular");
  const config = useRuntimeConfig();
  const api_key: string = config.API_KEY;
  const api_base_url: string = config.API_BASE_URL;

  const url = computed<string>(() =>
    search.value == ""
      ? `${api_base_url}/tv/${filter.value}`
      : `${api_base_url}/search/tv`
  );

  const searchQuery = computed<string>(() => search.value);
  const { data: shows } = useFetch<IData<IShows>>(url, {
    params: {
      api_key: api_key,
      query: searchQuery,
    },
  });

  const getShows = computed(() => shows.value);
  const setSearch = (payload: string): void => {
    search.value = payload;
  };
  const setFilter = (payload: string): void => {
    filter.value = payload;
  };

  return {
    url,
    filter,
    shows,
    search,
    getShows,
    setSearch,
    setFilter,
  };
});

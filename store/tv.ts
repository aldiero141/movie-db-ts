import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { IData } from "../models/api";
import { IShows } from "../models/tv";

export const useShowsStore = defineStore("shows", () => {
  const shows = ref();
  const filter = ref<string>("on_the_air");
  const page = ref(1);
  const query = ref("");
  const loading = ref();
  const config = useRuntimeConfig();
  const api_key: string = config.API_KEY;
  const api_base_url: string = config.API_BASE_URL;

  // const getShows = async (payload: string) => {
  //   const url = computed<string>(() => `${api_base_url}/tv/${payload}`);
  //   const { data } = await useFetch<IData<IShows>>(url, {
  //     params: {
  //       api_key: api_key,
  //     },
  //   });
  //   shows.value = data.value;
  // };

  const getShows = async () => {
    loading.value = true;
    $fetch(`/tv/${filter.value}`, {
      method: "GET",
      baseURL: `${api_base_url}`,
      params: {
        api_key: api_key,
        page: page.value,
      },
    }).then(function (res) {
      shows.value = res;
      setTimeout(() => {
        loading.value = false;
      }, 500);
    }),
      {
        watch: [filter, page],
      };

    //
  };

  // const toPage = async (page: number, filter: string) => {
  //   const url = computed<string>(() => `${api_base_url}/tv/${filter}`);
  //   const { data } = await useFetch<IData<IShows>>(url, {
  //     params: {
  //       api_key: api_key,
  //       page: page,
  //     },
  //   });
  //   shows.value = data.value;
  // };

  const getFilteredShows = async (payload: string) => {
    loading.value = true;
    const url = computed<string>(() => `${api_base_url}/search/tv`);
    const { data } = await useFetch<IData<IShows>>(url, {
      params: {
        api_key: api_key,
        query: payload,
      },
    });
    shows.value = data.value;
    setTimeout(() => {
      loading.value = false;
    }, 500);
  };

  const setFilter = (payload: string): void => {
    filter.value = payload;
  };
  const setPage = (payload: number): void => {
    page.value = payload;
  };

  return {
    shows,
    filter,
    loading,
    page,
    query,
    getShows,
    getFilteredShows,
    setFilter,
    setPage,
    // toPage,
  };
});

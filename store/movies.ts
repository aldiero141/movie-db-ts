import { ref } from "vue";
import { defineStore } from "pinia";
import { IData } from "../models/api";
import { IMovie } from "../models/movies";

export const useMoviesStore = defineStore("movies", () => {
  const movies = ref();
  const filter = ref<string>("now_playing");
  const page = ref(1);
  const query = ref("");
  const loading = ref();
  const config = useRuntimeConfig();
  const api_key: string = config.API_KEY;
  const api_base_url: string = config.API_BASE_URL;

  // const getMovies = async (payload: string) => {
  //   const url = computed<string>(() => `${api_base_url}/movie/${payload}`);
  //   const { data } = await useFetch<IData<IMovie>>(url, {
  //     params: {
  //       api_key: api_key,
  //     },
  //   });
  //   movies.value = data.value;
  // };

  const getMovies = async () => {
    loading.value = true;
    $fetch(`/movie/${filter.value}`, {
      method: "GET",
      baseURL: `${api_base_url}`,
      params: {
        api_key: api_key,
        page: page.value,
      },
    }).then(function (res) {
      movies.value = res;
      setTimeout(() => {
        loading.value = false;
      }, 500);
    }),
      {
        watch: [filter, page],
      };
  };

  // const toPage = async (page: number, filter: string) => {
  //   const url = computed<string>(() => `${api_base_url}/movie/${filter}`);
  //   const { data } = await useFetch<IData<IMovie>>(url, {
  //     params: {
  //       api_key: api_key,
  //       page: page,
  //     },
  //   });
  //   movies.value = data.value;
  // };

  const getFilteredMovies = async (payload: string) => {
    loading.value = true;
    const { data } = await useLazyFetch<IData<IMovie>>(
      `${api_base_url}/search/movie`,
      {
        params: {
          api_key: api_key,
          query: payload,
        },
      }
    );
    movies.value = data.value;
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
    filter,
    movies,
    loading,
    page,
    query,
    getMovies,
    getFilteredMovies,
    setFilter,
    setPage,
    // toPage,
  };
});

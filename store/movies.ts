import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { IData } from "../models/api";
import { IMovie } from "../models/movies";

export const useMoviesStore = defineStore("movies", () => {
  const movies = ref();
  const filter = ref<string>("now_playing");
  const config = useRuntimeConfig();
  const api_key: string = config.API_KEY;
  const api_base_url: string = config.API_BASE_URL;

  const getMovies = async (payload: string) => {
    const url = computed<string>(() => `${api_base_url}/movie/${payload}`);
    const { data } = await useFetch<IData<IMovie>>(url, {
      params: {
        api_key: api_key,
      },
    });
    movies.value = data.value;
  };

  const getFilteredMovies = async (payload: string) => {
    const url = computed<string>(() => `${api_base_url}/search/movie`);
    const { data } = await useFetch<IData<IMovie>>(url, {
      params: {
        api_key: api_key,
        query: payload,
      },
    });
    movies.value = data.value;
  };

  const setFilter = (payload: string): void => {
    filter.value = payload;
  };

  return {
    filter,
    movies,
    getMovies,
    getFilteredMovies,
    setFilter,
  };
});

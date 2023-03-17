import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { IData, IMovie } from "../models/movies";

export const useMoviesStore = defineStore("movies", () => {
  const search = ref("");
  const config = useRuntimeConfig();
  const api_key: string = config.API_KEY;
  const api_base_url: string = config.API_BASE_URL;

  const url = computed<string>(() =>
    search.value == ""
      ? `${api_base_url}/movie/popular`
      : `${api_base_url}/search/movie`
  );

  const searchQuery = computed<string>(() => search.value);
  const { data: movies } = useFetch<IData<IMovie>>(url, {
    params: {
      api_key: api_key,
      query: searchQuery,
    },
  });

  const getMovies = computed(() => movies.value);
  const setSearch = (payload: string): void => {
    search.value = payload;
  };

  return {
    movies,
    search,
    getMovies,
    setSearch,
  };
});

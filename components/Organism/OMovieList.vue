<template>
  <div class="flex flex-col mx-[2em] gap-8 pb-12 px-8">
    <atoms-a-label class="text-3xl text-center">
      {{ $snakeToTitleCase(filter) }}</atoms-a-label
    >

    <molecules-m-searchbar
      v-model="search"
      :placeholder="'Search Movie...'"
      @on:enter="searchMovie(search)"
      @on:buttonClick="searchMovie(search)"
    />

    <molecules-m-pagination
      :current-page="movies.page"
      :total-pages="movies.total_pages"
      @on-page="toPage($event, filter)"
      @prev-page="toPage($event, filter)"
      @next-page="toPage($event, filter)"
    />

    <div
      class="grid grid-cols-1 gap-y-10 md:grid-cols-4 sm:grid-cols-2 w-full content-center place-items-center"
    >
      <molecules-m-item-card
        v-for="movie in movies?.results"
        :title="movie.title"
        :poster="
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : ''
        "
        :rating="movie.vote_average"
        :vote_count="movie.vote_count"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useMoviesStore } from "@/store/movies";
import { ref } from "vue";

const { $snakeToTitleCase } = useNuxtApp();
const search = ref("");
const store = useMoviesStore();
const { movies, filter } = storeToRefs(store);

await store.getMovies(filter.value);
watch(filter, (newValue, oldValue) => {
  if (newValue != oldValue) store.getMovies(filter.value);
});

const toPage = async (page: number, filter: string) => {
  await store.toPage(page, filter);
};

const searchMovie = (value: string) => {
  store.getFilteredMovies(value);
};
</script>

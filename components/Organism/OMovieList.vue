<template>
  <div class="flex flex-col mx-[2em] gap-8 pb-12 px-8">
    <molecules-m-breadcrumbs
      :section="'Movie'"
      :filter="$snakeToTitleCase(filter)"
    />

    <molecules-m-searchbar
      v-model="search"
      :placeholder="'Search Movie...'"
      @on:enter="searchMovie(search)"
      @on:buttonClick="searchMovie(search)"
    />

    <molecules-m-pagination
      :current-page="movies?.page"
      :total-pages="movies?.total_pages"
      @on-page="toPage($event)"
      @prev-page="toPage($event)"
      @next-page="toPage($event)"
    />

    <template v-if="loading">
      <div class="flex flex-col w-full h-[40vh] justify-center items-center">
        <atoms-a-loading />
      </div>
    </template>

    <template v-if="!loading">
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
    </template>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useMoviesStore } from "@/store/movies";
import { ref } from "vue";

const { $snakeToTitleCase } = useNuxtApp();
const search = ref("");
const store = useMoviesStore();
const { movies, filter, loading, page, query } = storeToRefs(store);

await store.getMovies();

watch([filter, page, query], async () => {
  await store.getMovies();
});

const toPage = (arg: number) => {
  store.setPage(arg);
};

const searchMovie = (arg: string) => {
  store.setQuery(arg);
};
</script>

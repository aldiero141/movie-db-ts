<template>
  <div class="flex flex-col mx-[2em] gap-8 pb-12 px-8">
    <ALabel class="text-3xl text-center">
      {{ $snakeToTitleCase(filter) }}</ALabel
    >
    <MSearchbar
      v-model="search"
      :placeholder="'Search Movie...'"
      @on:enter="searchMovie(search)"
      @on:buttonClick="searchMovie(search)"
    />
    <div
      class="grid grid-cols-1 gap-y-10 md:grid-cols-4 sm:grid-cols-2 w-full content-center place-items-center"
    >
      <MItemCard
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
    {{ search }}
  </div>
</template>

<script setup lang="ts">
import ALabel from "../Atoms/ALabel.vue";
import MSearchbar from "../Molecules/MSearchbar.vue";
import MItemCard from "../Molecules/MItemCard.vue";
import { storeToRefs } from "pinia";
import { useMoviesStore } from "@/store/movies";
import { ref } from "vue";

const { $snakeToTitleCase } = useNuxtApp();
const search = ref("");
const store = useMoviesStore();
const { movies, filter } = storeToRefs(store);
store.getMovies(filter.value);
watch(filter, (newValue, oldValue) => {
  if (newValue != oldValue) store.getMovies(filter.value);
});

const searchMovie = (value: string) => {
  store.getFilteredMovies(value);
};
</script>

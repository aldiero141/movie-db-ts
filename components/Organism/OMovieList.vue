<template>
  <div class="flex flex-col mx-[2em] gap-8 pb-12">
    <MSearchbar v-model="search" />
    <div class="grid grid-cols-1 gap-4 md:grid-cols-4 sm:grid-cols-2 w-screen">
      <MMovieCards
        v-for="movie in movies?.results"
        :title="movie.title"
        :poster="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
        :rating="movie.vote_average"
        :vote_count="movie.vote_count"
      />
    </div>
    {{ search }}
  </div>
</template>

<script setup lang="ts">
import MSearchbar from "../Molecules/MSearchbar.vue";
import MMovieCards from "../Molecules/MMovieCards.vue";
import { storeToRefs } from "pinia";
import { useMoviesStore } from "~~/store/movies";
import { ref } from "vue";

const search = ref("");
const store = useMoviesStore();
const { movies } = storeToRefs(store);

watch(search, (newValue, oldValue) => {
  store.setSearch(newValue);
});
</script>

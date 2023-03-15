<template>
  <div class="flex flex-col mx-[2em] gap-8 pb-12">
    <ACard class="w-full">
      <MSearchbar v-model="search" />
    </ACard>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-4 sm:grid-cols-2">
      <MMovieCards
        v-for="movie in data?.results"
        :title="movie.title"
        :poster="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
        :rating="movie.vote_average"
        :vote_count="movie.vote_count"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ACard from "../Atoms/ACard.vue";
import MSearchbar from "~~/components/Molecules/MSearchbar.vue";
import MMovieCards from "../Molecules/MMovieCards.vue";
import { ref } from "vue";
import { IData, IMovie } from "@/models/movies";

const search = ref("");

const config = useRuntimeConfig();
const api_key: string = config.API_KEY;
const api_base_url: string = config.API_BASE_URL;
// const api_base_image_url: string = config.API_BASE_IMG_URL;
const { data: data } = useFetch<IData<IMovie>>(
  `${api_base_url}/movie/popular`,
  {
    params: {
      api_key: api_key,
    },
  }
);
</script>

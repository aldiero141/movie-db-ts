<template>
  <div class="flex flex-col mx-[2em] gap-8 pb-12 px-8">
    <a-label class="text-3xl text-center">
      {{ $snakeToTitleCase(filter) }}</a-label
    >
    <m-searchbar
      v-model="search"
      :placeholder="'Search shows....'"
      @on:enter="searchShows(search)"
      @on:buttonClick="searchShows(search)"
    />
    <div
      class="grid grid-cols-1 gap-y-10 md:grid-cols-4 sm:grid-cols-2 w-full content-center place-items-center"
    >
      <m-item-card
        v-for="show in shows?.results"
        :title="show.name"
        :poster="`https://image.tmdb.org/t/p/w500/${show.poster_path}`"
        :rating="show.vote_average"
        :vote_count="show.vote_count"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ALabel from "../Atoms/ALabel.vue";
import MSearchbar from "../Molecules/MSearchbar.vue";
import MItemCard from "../Molecules/MItemCard.vue";
import { storeToRefs } from "pinia";
import { useShowsStore } from "@/store/tv";
import { ref } from "vue";

const { $snakeToTitleCase } = useNuxtApp();
const search = ref("");
const store = useShowsStore();
const { shows, filter } = storeToRefs(store);

store.getShows(filter.value);
watch(filter, (newValue, oldValue) => {
  store.getShows(filter.value);
});

const searchShows = (value: string) => {
  console.log(value);
  store.getFilteredShows(value);
};
</script>

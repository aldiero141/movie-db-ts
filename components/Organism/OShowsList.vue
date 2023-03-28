<template>
  <div class="flex flex-col mx-[2em] gap-8 pb-12 px-8">
    <molecules-m-breadcrumbs
      :section="'TV Shows'"
      :filter="$snakeToTitleCase(filter)"
    />

    <molecules-m-searchbar
      v-model="search"
      :placeholder="'Search shows....'"
      @on:enter="searchShows(search)"
      @on:buttonClick="searchShows(search)"
    />

    <molecules-m-pagination
      :current-page="shows.page"
      :total-pages="shows.total_pages"
      @on-page="toPage($event, filter)"
      @prev-page="toPage($event, filter)"
      @next-page="toPage($event, filter)"
    />

    <div
      class="grid grid-cols-1 gap-y-10 md:grid-cols-4 sm:grid-cols-2 w-full content-center place-items-center"
    >
      <molecules-m-item-card
        v-for="show in shows?.results"
        :title="show.name"
        :poster="
          show.poster_path
            ? `https://image.tmdb.org/t/p/w500/${show.poster_path}`
            : ''
        "
        :rating="show.vote_average"
        :vote_count="show.vote_count"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useShowsStore } from "@/store/tv";
import { ref } from "vue";

const { $snakeToTitleCase } = useNuxtApp();
const search = ref("");
const store = useShowsStore();
const { shows, filter } = storeToRefs(store);

store.getShows(filter.value);
watch(filter, (newValue, oldValue) => {
  if (newValue != oldValue) store.getShows(filter.value);
});

const toPage = async (page: number, filter: string) => {
  await store.toPage(page, filter);
};

const searchShows = (value: string) => {
  console.log(value);
  store.getFilteredShows(value);
};
</script>

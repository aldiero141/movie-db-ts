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
      :current-page="shows?.page"
      :total-pages="shows?.total_pages"
      @on-page="toPage($event)"
      @prev-page="toPage($event)"
      @next-page="toPage($event)"
      @to-start="toPage(1)"
      @to-end="toPage(shows?.total_pages)"
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
    </template>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useShowsStore } from "@/store/tv";
import { ref } from "vue";

const { $snakeToTitleCase } = useNuxtApp();
const search = ref("");
const store = useShowsStore();
const { shows, filter, loading, page } = storeToRefs(store);

await store.getShows();
watch([filter, page], async ([newFilter, newPage], [oldFilter, oldPage]) => {
  if (newFilter !== oldFilter) store.setPage(1);
  await store.getShows();
});

const toPage = (arg: number) => {
  store.setPage(arg);
};

const searchShows = async (arg: string) => {
  await store.getFilteredShows(arg);
};
</script>

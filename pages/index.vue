<template>
  <div class="flex flex-col pt-[5em] w-screen">
    <template v-if="section == 'movie'">
      <OMovieList />
    </template>
    <template v-if="section == 'tv'">
      <OShowsList />
    </template>
  </div>
</template>

<script setup lang="ts">
import OMovieList from "~~/components/Organism/OMovieList.vue";
import OShowsList from "~~/components/Organism/OShowsList.vue";
import { useSectionStore } from "~~/store/section";
import { storeToRefs } from "pinia";
const store = useSectionStore();
const { section } = storeToRefs(store);
</script>

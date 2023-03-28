<template>
  <div class="flex flex-col pt-[5em] w-screen">
    <template v-if="section == 'movie'">
      <organism-o-movie-list />
    </template>
    <template v-if="section == 'tv'">
      <organism-o-shows-list />
    </template>
  </div>
</template>

<script setup lang="ts">
import { useSectionStore } from "~~/store/section";
import { storeToRefs } from "pinia";
const store = useSectionStore();
const { section } = storeToRefs(store);
</script>

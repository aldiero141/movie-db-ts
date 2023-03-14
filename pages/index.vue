<template>
  <div class="flex flex-col pt-[5em] w-screen">
    <MovieList />
  </div>
</template>

<script setup lang="ts">
import MovieList from "~~/components/Organism/MovieList.vue";
import { ref } from "vue";
</script>

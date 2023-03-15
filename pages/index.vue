<template>
  <div class="flex flex-col pt-[5em] w-screen">
    <OMovieList />
  </div>
</template>

<script setup lang="ts">
import OMovieList from "~~/components/Organism/OMovieList.vue";
import { ref } from "vue";
</script>

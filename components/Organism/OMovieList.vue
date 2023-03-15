<template>
  <div class="flex flex-col mx-[2em]">
    <ACard>
      <MSearchbar @on:input-change="input = $event" />
    </ACard>
  </div>
</template>

<script setup lang="ts">
import MSearchbar from "~~/components/Molecules/MSearchbar.vue";
import ACard from "../Atoms/ACard.vue";
import { ref } from "vue";
const input = ref("");

// const data = useFetch("/api/movie/popular");
// console.log(data);
</script>

<template>
  <div class="flex flex-col mx-[2em]">
    <Card>
      <Searchbar @on:input-change="input = $event" />
    </Card>
  </div>
</template>

<script setup lang="ts">
import Searchbar from "~~/components/Molecules/Searchbar.vue";
import Card from "../Atoms/Card.vue";
import { ref } from "vue";
const input = ref("");

// const data = useFetch("/api/movie/popular");
// console.log(data);
</script>

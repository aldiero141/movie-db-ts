<template>
  <atoms-a-card
    class="flex flex-col justify-between items-center text-center w-[300px] h-[460px] px-2"
    fit
  >
    <atoms-a-title class="flex flex-col justify-center items-center h-16">{{
      $str_limit(title, 22)
    }}</atoms-a-title>
    <div class="flex flex-col text-center items-center pb-4">
      <div
        v-if="poster == ''"
        class="flex flex-col align-center justify-center w-[240px] h-[360px] p-4 bg-gray-200 mb-4"
      >
        No Image Found
      </div>
      <img
        v-if="poster != ''"
        class="w-[240px] h-[360px] mb-4"
        :src="poster"
        alt="item-poster"
      />
      <atoms-a-ratings :vote_count="vote_count" :rating="rating" />
    </div>
  </atoms-a-card>
</template>

<script setup>
defineProps({
  title: { type: String, default: "" },
  poster: { type: String, default: "" },
  vote_count: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
});

const { $str_limit } = useNuxtApp();
</script>

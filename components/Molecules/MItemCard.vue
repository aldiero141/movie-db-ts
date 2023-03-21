<template>
  <ACard
    class="flex flex-col justify-between items-center text-center w-[20em] h-[28em] px-2"
    fit
  >
    <ATitle class="flex flex-col justify-center items-center h-16">{{
      $str_limit(title, 22)
    }}</ATitle>
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
      <ARatings :vote_count="vote_count" :rating="rating" />
    </div>
  </ACard>
</template>

<script setup>
import ACard from "../Atoms/ACard.vue";
import ATitle from "../Atoms/ATitle.vue";
import ARatings from "../Atoms/ARatings.vue";

defineProps({
  title: { type: String, default: "" },
  poster: { type: String, default: "" },
  vote_count: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
});

const { $str_limit } = useNuxtApp();
</script>

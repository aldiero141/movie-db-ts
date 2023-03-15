<template>
  <ACard
    class="flex flex-col justify-between items-center text-center w-[18em] h-[28em] px-2"
    fit
  >
    <ATitle class="flex flex-col justify-center items-center h-16">{{
      title
    }}</ATitle>
    <div class="flex flex-col text-center items-center">
      <img class="w-60 h-120" :src="poster" alt="movie-poster" />
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
</script>

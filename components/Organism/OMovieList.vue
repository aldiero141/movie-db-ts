<template>
  <div class="flex flex-col mx-[2em]">
    <ACard>
      <MSearchbar v-model="search" />
    </ACard>
    <!-- {{ movie }} -->
  </div>
</template>

<script setup lang="ts">
import MSearchbar from "~~/components/Molecules/MSearchbar.vue";
import ACard from "../Atoms/ACard.vue";
import { ref } from "vue";
import { IResponse, IMovie } from "@/models/movies";

const search = ref("");

const config = useRuntimeConfig();
const api_key: string = config.API_KEY;
const api_base_url: string = config.API_BASE_URL;
const api_base_image_url: string = config.API_BASE_IMG_URL;
// const { data: data } = useFetch(`${api_base_url}/movie/popular`, {
//   params: {
//     api_key: api_key,
//   },
// });
// const movie: IResponse<IMovie> = data.value as IResponse<IMovie>;
</script>

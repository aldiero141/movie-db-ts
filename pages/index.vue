<template>
  <div class="flex flex-row p-[1em] w-screen">
    <div
      class="flex flex-col justify-center items-center w-[60vw] h-[calc(100vh-2em)] bg-blue-800 text-white"
    >
      INSERT LOGO HERE
    </div>
    <div
      class="w-[40vw] h-[calc(100vh-2em)] flex flex-col justify-center items-center"
    >
      <atoms-a-card class="flex flex-col pt-[1em] pb-[1.5em] px-[2em]">
        <organism-o-login v-if="type == 'login'" />
        <organism-o-register v-if="type == 'register'" />
      </atoms-a-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~~/store/auth";
import { storeToRefs } from "pinia";
const store = useAuthStore();
const { type } = storeToRefs(store);
</script>

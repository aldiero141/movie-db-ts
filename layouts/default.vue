<template>
  <div class="flex flex-col w-full h-full">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useSectionStore } from "~~/store/section";
const store = useSectionStore();
</script>

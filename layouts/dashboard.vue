<template>
  <div class="w-full h-full">
    <organism-o-header @on:click-sidebar="store.toogleSidebar" />
    <organism-o-sidebar :is-sidebar-open="store.isShowSidebar" />
    <slot />
    <organism-o-footer />
  </div>
</template>

<script setup lang="ts">
import { useSectionStore } from "~~/store/section";
const store = useSectionStore();
</script>

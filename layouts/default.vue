<template>
  <div class="w-full h-full">
    <OHeader @on:click-sidebar="store.toogleSidebar" />
    <OSidebar :is-sidebar-open="store.isShowSidebar" />
    <slot />
    <OFooter />
  </div>
</template>

<script setup lang="ts">
import OHeader from "../components/Organism/Header.vue";
import OFooter from "~~/components/Organism/Footer.vue";
import OSidebar from "~~/components/Organism/OSidebar.vue";

import { useLayoutStore } from "~~/store/layout";
const store = useLayoutStore();
</script>

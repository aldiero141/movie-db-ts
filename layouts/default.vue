<template>
  <div>
    <Header @on:click-sidebar="store.toogleSidebar" />
    <Sidebar :is-sidebar-open="store.isShowSidebar" />
    <slot />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "../components/Organism/Header.vue";
import Footer from "~~/components/Organism/Footer.vue";
import Sidebar from "~~/components/Organism/Sidebar.vue";

import { useLayoutStore } from "~~/store/layout";
const store = useLayoutStore();
</script>

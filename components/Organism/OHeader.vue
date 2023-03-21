<template>
  <div
    class="fixed flex justify-between inset-x-0 h-14 bg-white border-2 shadow-xl"
  >
    <div class="flex flex-row items-center gap-2 p-2">
      <span
        class="text-black cursor-pointer material-icons"
        @click.stop="toogleSidebar"
        >menu</span
      >
      <ALogo />
    </div>
    <div class="flex flex-row items-center p-2">
      <AButton
        text
        v-for="menu in menus"
        :key="menu.name"
        class="hover:bg-blue-100 h-[3.5em] w-[7em]"
        @on:click="setFIlter(menu.to)"
        >{{ menu.name }}</AButton
      >
      <AAvatar class="border-l" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AButton from "../Atoms/AButton.vue";
import AAvatar from "../Atoms/AAvatar.vue";
import ALogo from "../Atoms/ALogo.vue";
import { useMoviesStore } from "~~/store/movies";
import { useSectionStore } from "~~/store/section";
import { storeToRefs } from "pinia";
import { useShowsStore } from "~~/store/tv";

const sectionStore = useSectionStore();
const { headerMenu: menus } = storeToRefs(sectionStore);

const movieStore = useMoviesStore();
const showStore = useShowsStore();
const emit = defineEmits(["on:clickSidebar"]);

const toogleSidebar = () => {
  emit("on:clickSidebar");
};
const setFIlter = (payload: string) => {
  if (sectionStore.section == "movie") movieStore.setFilter(payload);
  if (sectionStore.section == "tv") showStore.setFilter(payload);
};
</script>

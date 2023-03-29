<template>
  <div
    class="fixed flex justify-between inset-x-0 h-14 bg-white border-2 drop-shadow-md z-10"
  >
    <div class="flex flex-row items-center gap-2 p-2">
      <span
        class="text-black cursor-pointer material-icons"
        @click.stop="toogleSidebar"
        >menu</span
      >
      <atoms-a-logo />
      <atoms-a-label class="ml-4">
        <span class="uppercase">{{ section }}</span>
      </atoms-a-label>
    </div>
    <div class="flex flex-row items-center p-2">
      <atoms-a-button
        text
        v-for="menu in menus"
        :key="menu.name"
        class="hover:bg-blue-100 h-[3.5em] w-[7em]"
        @on:click="setFIlter(menu.to)"
        >{{ menu.name }}</atoms-a-button
      >
      <atoms-a-avatar class="border-l cursor-pointer" @click="show = !show" />
      <atoms-a-card v-if="show" class="fixed top-16 right-2 p-2">
        <atoms-a-button text class="p-4">Profile</atoms-a-button>
        <atoms-a-button danger class="p-4" @on:click="logout"
          >Sign Out</atoms-a-button
        >
      </atoms-a-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMoviesStore } from "~~/store/movies";
import { useSectionStore } from "~~/store/section";
import { storeToRefs } from "pinia";
import { useShowsStore } from "~~/store/tv";
const sectionStore = useSectionStore();
const { section, headerMenu: menus } = storeToRefs(sectionStore);

const show = ref(false);
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

const logout = () => {
  const auth = useCookie("auth");
  auth.value = null;
  navigateTo("/");
};
</script>

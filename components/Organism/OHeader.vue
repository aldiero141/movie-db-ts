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
    <div class="flex flex-row items-center gap-3 p-2">
      <AButton text class="border-l h-[3.5em]" v-for="menu in menus">{{
        menu.name
      }}</AButton>
      <AAvatar />
    </div>
  </div>
</template>

<script setup lang="ts">
import AButton from "../Atoms/AButton.vue";
import AAvatar from "../Atoms/AAvatar.vue";
import ALogo from "../Atoms/ALogo.vue";
import { IMenu } from "@/models/menu";

const menus: IMenu[] = [
  {
    name: "Menu 1",
    to: "Menu 1",
  },
  {
    name: "Menu 2",
    to: "Menu 3",
  },
  {
    name: "Menu 1",
    to: "Menu 4",
  },
];

const emit = defineEmits(["on:clickSidebar"]);

function toogleSidebar() {
  emit("on:clickSidebar");
}
</script>

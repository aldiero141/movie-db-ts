<template>
  <transition name="slide">
    <div
      v-if="props.isSidebarOpen"
      class="fixed flex flex-col justify-between items-center w-[20vh] h-full bg-white border-2 shadow left-0 top-0 mt-14"
      style="z-index: 999"
    >
      <div class="w-full">
        <AButton
          v-for="(menu, index) in menus"
          :key="index"
          text
          class="flex flex-col items-center justify-center w-full py-6 border-b"
        >
          {{ menu.name }}
        </AButton>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { IMenu } from "@/models/menu";
import AButton from "../Atoms/AButton.vue";
const props = defineProps({
  isSidebarOpen: { type: Boolean, default: false },
});

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

function onNavbarRoute() {
  //   router.push({ path: val });
}
function onSidebarRoute() {
  //   router.push({ path: `/dashboard${val}` });
}
</script>

<style scoped>
.slide-enter-active {
  transition: 0.5s;
  left: 0;
}

.slide-leave-active {
  transition: 0.5s;
  left: 0;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-20vw);
}
</style>

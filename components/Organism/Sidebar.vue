<template>
  <transition name="slide">
    <div
      v-if="props.isSidebarOpen"
      class="fixed flex flex-col justify-between items-center w-[20vh] min-h-[95.1vh] bg-yellow-500 left-0 top-0 mt-14"
      style="z-index: 999"
    >
      <div class="w-full">
        <div
          v-for="(menu, index) in side_menu"
          :key="index"
          class="p-2 hover:bg-yellow-600 hover:bg-opacity-50 w-full text-center cursor-pointer text-orange-800"
        >
          {{ menu.name }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
const props = defineProps({
  isSidebarOpen: { type: Boolean, default: false },
});

const nav_menu = [
  { name: "Landing", route: "/landing" },
  { name: "Dasboard", route: "/dashboard" },
  { name: "About", route: "/about" },
];

const side_menu = [
  { name: "Menu 1", route: "/menu_1" },
  { name: "Menu 2", route: "/menu_2" },
  { name: "Menu 3", route: "/menu_3" },
  { name: "Menu 4", route: "/menu_4" },
  { name: "Menu 5", route: "/menu_5" },
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

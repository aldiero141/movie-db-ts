<template>
  <div class="fixed flex flex-row justify-between w-screen h-14 bg-blue-700">
    <div class="flex flex-row items-center gap-2 p-2">
      <Logo />
      <span
        class="text-white cursor-pointer material-icons"
        @click.stop="toogleSidebar"
        >menu</span
      >
    </div>
    <div class="flex flex-row items-center gap-3 p-2">
      <Button text>Menu 1</Button>
      <Button text>Menu 2</Button>
      <Button text>Menu 3</Button>
      <Avatar />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../Atoms/Button.vue";
import Avatar from "../Atoms/Avatar.vue";
import Logo from "../Atoms/Logo.vue";

const emit = defineEmits(["on:clickSidebar"]);

function toogleSidebar() {
  emit("on:clickSidebar");
}
</script>

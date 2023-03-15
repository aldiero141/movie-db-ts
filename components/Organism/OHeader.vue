<template>
  <div class="fixed flex justify-between inset-x-0 h-14 bg-blue-700">
    <div class="flex flex-row items-center gap-2 p-2">
      <ALogo />
      <span
        class="text-white cursor-pointer material-icons"
        @click.stop="toogleSidebar"
        >menu</span
      >
    </div>
    <div class="flex flex-row items-center gap-3 p-2">
      <AButton text>Menu 1</AButton>
      <AButton text>Menu 2</AButton>
      <AButton text>Menu 3</AButton>
      <AAvatar />
    </div>
  </div>
</template>

<script setup lang="ts">
import AButton from "../Atoms/AButton.vue";
import AAvatar from "../Atoms/AAvatar.vue";
import ALogo from "../Atoms/ALogo.vue";

const emit = defineEmits(["on:clickSidebar"]);

function toogleSidebar() {
  emit("on:clickSidebar");
}
</script>

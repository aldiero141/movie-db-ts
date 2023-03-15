<template>
  <div class="flex flex-row p-4 w-full">
    <AInput
      class="mr-2"
      v-model="search"
      :placeholder="'Search Movie...'"
      @keydown="inputModel"
    ></AInput>
    <AButton @on:click="searchButton">Search</AButton>
  </div>
</template>

<script setup lang="ts">
import AInput from "../Atoms/AInput.vue";
import AButton from "../Atoms/AButton.vue";
import { ref } from "vue";

const emit = defineEmits(["on:inputChange", "on:buttonClick"]);
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const search = ref("");
function inputModel(event: Event) {
  emit("on:inputChange", (event.target as HTMLInputElement).value);
}
function searchButton() {
  emit("on:buttonClick");
}
</script>

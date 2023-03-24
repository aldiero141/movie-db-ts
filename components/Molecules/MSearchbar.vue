<template>
  <atoms-a-card class="flex flex-row justify-center p-4 w-full">
    <atoms-a-input
      v-model="search"
      class="mr-2"
      :placeholder="placeholder"
      @input="inputValue"
      @on:enter="$emit('on:enter')"
    ></atoms-a-input>
    <atoms-a-button class="cursor-pointer" rounded @on:click="searchButton"
      >Search</atoms-a-button
    >
  </atoms-a-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits([
  "on:inputChange",
  "on:buttonClick",
  "update:modelValue",
  "on:enter",
]);
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "Search...",
  },
});

const search = ref("");
function inputValue(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
}
function searchButton() {
  emit("on:buttonClick");
}
</script>

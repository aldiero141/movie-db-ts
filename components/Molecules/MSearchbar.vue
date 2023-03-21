<template>
  <ACard class="flex flex-row justify-center p-4 w-full">
    <AInput
      v-model="search"
      class="mr-2"
      :placeholder="placeholder"
      @input="inputValue"
      @on:enter="$emit('on:enter')"
    ></AInput>
    <AButton class="cursor-pointer" rounded @on:click="searchButton"
      >Search</AButton
    >
  </ACard>
</template>

<script setup lang="ts">
import AInput from "../Atoms/AInput.vue";
import AButton from "../Atoms/AButton.vue";
import ACard from "../Atoms/ACard.vue";
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

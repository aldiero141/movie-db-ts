<template>
  <div class="flex flex-row p-4 w-full">
    <AInput
      v-model="search"
      class="mr-2"
      :placeholder="'Search Movie...'"
      @input="inputValue"
    ></AInput>
    <AButton rounded @on:click="searchButton">Search</AButton>
  </div>
</template>

<script setup lang="ts">
import AInput from "../Atoms/AInput.vue";
import AButton from "../Atoms/AButton.vue";
import { ref } from "vue";

const emit = defineEmits([
  "on:inputChange",
  "on:buttonClick",
  "update:modelValue",
]);
defineProps({
  modelValue: {
    type: String,
    default: "",
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

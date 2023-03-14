<template>
  <div class="flex flex-row p-4 w-full">
    <Input
      class="mr-2"
      v-model="search"
      :placeholder="'Search Movie...'"
      @keydown="inputModel"
    ></Input>
    <Button @on:click="searchButton">Search</Button>
  </div>
</template>

<script setup lang="ts">
import Input from "../Atoms/Input.vue";
import Button from "../Atoms/Button.vue";
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

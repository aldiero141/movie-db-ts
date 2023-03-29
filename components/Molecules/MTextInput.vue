<template>
  <div class="mb-2">
    <atoms-a-label>
      {{ label }}
    </atoms-a-label>
    <atoms-a-input
      v-model="input_value"
      :placeholder="placeholder"
      :type="type"
      @input="inputValue"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
defineProps({
  label: { type: String, default: "" },
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue", "on:enter"]);
const input_value = ref("");

function inputValue(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>

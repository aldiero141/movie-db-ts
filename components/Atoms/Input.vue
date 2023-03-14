<template>
  <div class="w-full h-8">
    <input
      class="w-full h-full p-2 border-2 border-gray-200 rounded"
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="inputModel"
      @keydown.enter="$emit('on:enter')"
    />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["update:modelValue", "on:enter"]);
defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
});

function inputModel(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>

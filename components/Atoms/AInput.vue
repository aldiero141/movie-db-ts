<template>
  <div class="w-full h-8">
    <input
      v-model="value"
      class="w-full h-full p-2 border-2 border-gray-200 rounded focus:border-blue-500"
      :type="type"
      :placeholder="placeholder"
      @input="inputValue"
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
  type: {
    type: String,
    default: "text",
  },
});

const value = ref("");

function inputValue(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>

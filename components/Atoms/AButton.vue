<template>
  <button
    class="flex justify-center items-center rounded px-2 hover:bg-opacity-50 h-[2em] min-w-[2em]"
    :class="
      disabled
        ? 'text-white bg-gray-300'
        : text
        ? 'text-white hover:text-blue-300 bg-transparent'
        : outlined
        ? 'text-blue-700 border-2 border-blue-700 bg-white'
        : 'text-white bg-blue-500'
    "
    :disabled="disabled"
    @click="$emit('on:click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  outlined: Boolean,
  text: Boolean,
  danger: Boolean,
  disabled: Boolean,
});

defineEmits(["on:click"]);
</script>

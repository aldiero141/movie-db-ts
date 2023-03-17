<template>
  <button
    class="flex justify-center items-center px-2 hover:bg-opacity-90 h-[2em] min-w-[2em]"
    :class="{
      rounded: rounded,
      'text-white bg-blue-500': !disabled && !text && !outlined,
      'text-white bg-gray-300': disabled,
      'text-black hover:text-gray-600 bg-transparent': text,
      'text-blue-700 border-2 border-blue-700 bg-white': outlined,
    }"
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
  rounded: Boolean,
});

defineEmits(["on:click"]);
</script>

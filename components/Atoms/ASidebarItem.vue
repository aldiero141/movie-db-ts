<template>
  <button
    class="flex items-center px-2 pl-8 hover:bg-opacity-90 h-[2em] min-w-[2em] text-black hover:text-gray-600 bg-transparent"
    :disabled="disabled"
    @click="$emit('on:click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  disabled: Boolean,
});

defineEmits(["on:click"]);
</script>

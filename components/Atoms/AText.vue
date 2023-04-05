<template>
  <p
    :class="{
      'text-gray-700 normal-case': !error,
      'text-red-600 capitalize text-xs': error,
    }"
  >
    <slot />
  </p>
</template>

<script setup lang="ts">
defineProps({
  error: { type: Boolean, default: false },
});
</script>

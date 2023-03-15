<template>
  <div
    class="card rounded border-2 border-gray-50 shadow-lg bg-white"
    :class="{
      'w-fit h-fit': fit,
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  fit: { type: Boolean, default: false },
});
</script>

<template>
  <div
    class="rounded border border-gray-50 shadow bg-white"
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

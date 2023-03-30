<template>
  <atoms-a-card
    class="p-2 rounded"
    :class="{
      'bg-blue-100 text-blue-500': !danger && !warning && !success,
      'bg-red-100 text-red-500': danger,
      'bg-yellow-100 text-yellow-500': warning,
      ' bg-green-100 text-green-500': success,
    }"
    ><slot
  /></atoms-a-card>
</template>

<script setup lang="ts">
defineProps({
  danger: { type: Boolean, default: false },
  warning: { type: Boolean, default: false },
  success: { type: Boolean, default: false },
});
</script>

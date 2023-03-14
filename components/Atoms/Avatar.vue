<template>
  <div class="flex flex-row rounded-full">
    <img
      class="w-10 h-10 rounded-full object-cover"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfVP4MfMhbQ9lUfQGTb0uXVor8_IyuMvXO9UdflUK-aA&s"
      alt="Rounded avatar"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  success: Boolean,
  danger: Boolean,
  disabled: Boolean,
});

defineEmits(["on:click"]);
</script>

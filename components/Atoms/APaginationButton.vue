<template>
  <li>
    <a
      href="#"
      class="block px-3 py-2 leading-tight border-x border-gray-100 hover:text-gray-400 hover:cursor-pointer"
      :class="{
        'bg-blue-500 text-white': active,
        'text-black bg-transparent': !active,
      }"
      @click="$emit('on:click')"
    >
      <slot />
    </a>
  </li>
</template>

<script setup lang="ts">
defineProps({
  active: { type: Boolean, default: false },
});
</script>

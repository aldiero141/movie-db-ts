<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <atoms-a-breadcrumb-item>{{ section }}</atoms-a-breadcrumb-item>
      <span v-if="filter" class="material-icons">chevron_right</span>
      <atoms-a-breadcrumb-item v-if="filter">{{
        filter
      }}</atoms-a-breadcrumb-item>
    </ol>
  </nav>
</template>

<script setup lang="ts">
defineProps({
  section: { type: String, default: "" },
  filter: { type: String, default: "" },
});
</script>

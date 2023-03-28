<template>
  <div class="flex flex-col items-center justify-center">
    <nav aria-label="Page navigation example">
      <ul class="inline-flex rounded-lg border">
        <atoms-a-pagination-button @on:click="$emit('toStart', start)">
          <span class="material-icons"> keyboard_double_arrow_left </span>
        </atoms-a-pagination-button>
        <atoms-a-pagination-button @on:click="$emit('prevPage', prevPage)">
          <span class="material-icons"> chevron_left </span>
        </atoms-a-pagination-button>
        <atoms-a-pagination-button v-if="props.currentPage - 3 > 0">
          ...
        </atoms-a-pagination-button>
        <template v-for="(total, index) in props.totalPages">
          <atoms-a-pagination-button
            v-if="
              index < props.currentPage + 2 && index > props.currentPage - 4
            "
            @on:click="$emit('onPage', index + 1)"
            :active="props.currentPage == index + 1"
          >
            {{ index + 1 }}
          </atoms-a-pagination-button>
        </template>
        <atoms-a-pagination-button
          v-if="props.currentPage + 3 < props.totalPages"
        >
          ...
        </atoms-a-pagination-button>
        <atoms-a-pagination-button @on:click="$emit('nextPage', nextPage)">
          <span class="material-icons"> chevron_right </span>
        </atoms-a-pagination-button>

        <atoms-a-pagination-button @on:click="$emit('toEnd', end)">
          <span class="material-icons"> keyboard_double_arrow_right </span>
        </atoms-a-pagination-button>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
const props = defineProps({
  totalPages: Number,
  currentPage: Number,
});
const emit = defineEmits(["onPage", "nextPage", "prevPage"]);
const maxShown = ref(6);
const nextPage = computed(() => {
  if (props.currentPage == props.totalPages) return;
  return props.currentPage + 1;
});
const prevPage = computed(() => {
  if (props.currentPage < 0) return;
  return props.currentPage - 1;
});
</script>

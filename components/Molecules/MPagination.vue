<template>
  <div class="flex flex-col items-center justify-center">
    <nav aria-label="Page navigation example">
      <ul class="inline-flex items-center -space-x-px rounded-lg border">
        <AtomsAPaginationButton @on:click="$emit('prevPage', prevPage)">
          <span class="sr-only">Previous</span>
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </AtomsAPaginationButton>

        <AtomsAPaginationButton v-if="props.currentPage - 2 > 0">
          ...
        </AtomsAPaginationButton>

        <template v-for="(total, index) in props.totalPages">
          <AtomsAPaginationButton
            v-if="
              index < props.currentPage + 2 && index > props.currentPage - 4
            "
            @on:click="$emit('onPage', index + 1)"
            :active="props.currentPage == index + 1"
          >
            {{ index + 1 }}
          </AtomsAPaginationButton>
        </template>
        <AtomsAPaginationButton v-if="props.currentPage + 2 < props.totalPages">
          ...
        </AtomsAPaginationButton>
        <AtomsAPaginationButton @on:click="$emit('nextPage', nextPage)">
          <span class="sr-only">Next</span>
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </AtomsAPaginationButton>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  totalPages: Number,
  currentPage: Number,
});
const emit = defineEmits(["onPage", "nextPage", "prevPage"]);

const nextPage = computed(() => {
  if (props.currentPage == props.totalPages) return;
  return props.currentPage + 1;
});
const prevPage = computed(() => {
  if (props.currentPage < 0) return;
  return props.currentPage - 1;
});
</script>

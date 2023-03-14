<template>
  <div
    class="fixed flex inset-x-0 bottom-0 h-6 text-sm p-1 justify-end bg-gray-100"
  >
    Aldo Aldiero™ © {{ year }}
  </div>
</template>

<script setup lang="ts">
import moment from "moment";

const year: number = moment().year();
</script>

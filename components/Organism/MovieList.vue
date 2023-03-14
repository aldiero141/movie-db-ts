<template>
  <div class="flex">
    <Card>
      <Searchbar @on:input-change="input = $event" />
    </Card>
  </div>
</template>

<script setup lang="ts">
import Searchbar from "~~/components/Molecules/Searchbar.vue";
import Card from "../Atoms/Card.vue";
import { ref } from "vue";
const input = ref("");
</script>

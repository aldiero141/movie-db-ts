<template>
  <input
    class="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
    type="checkbox"
    true-value="completed"
    false-value="uncompleted"
    v-model="check"
    @change="checked"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["update:modelValue", "on:change"]);
const props = defineProps({
  checkValue: {
    type: String,
    default: "",
  },
});

const check = ref(props.checkValue);

function checked(event: Event) {
  emit("on:change", (event.target as HTMLInputElement).checked);
}
</script>

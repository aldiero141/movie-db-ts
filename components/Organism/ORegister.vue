<template>
  <div class="flex flex-col">
    <molecules-m-text-input v-model="firstname" label="First Name" />
    <molecules-m-text-input
      v-model="lastname"
      label="Last Name"
      type="password"
    />
    <molecules-m-text-input v-model="username" label="Username" />
    <molecules-m-text-input v-model="password" label="Password" />
    <molecules-m-text-input v-model="re_password" label="Retype Password" />
  </div>
  <div class="flex flex-col mt-4 w-full">
    <atoms-a-button class="rounded">Register</atoms-a-button>
    <div class="text-xs">
      Already have an account?
      <a
        class="text-blue-800 cursor-pointer"
        @click.stop="store.setType('login')"
        >Login</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "~~/store/auth";
import { storeToRefs } from "pinia";

defineProps({
  label: { type: String, default: "" },
});

const store = useAuthStore();
const { type } = storeToRefs(store);

const firstname = ref("");
const lastname = ref("");
const username = ref("");
const password = ref("");
const re_password = ref("");
</script>

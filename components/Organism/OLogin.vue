<template>
  <div class="flex flex-col">
    <molecules-m-text-input v-model="username" label="Username" />
    <molecules-m-text-input
      v-model="password"
      label="Password"
      type="password"
    />
  </div>
  <div class="flex flex-col mt-4 w-full">
    <atoms-a-button class="rounded" @on:click="login({ username, password })"
      >Login</atoms-a-button
    >
    <div class="text-xs">
      Don't have an account?
      <a
        class="text-blue-800 cursor-pointer"
        @click.stop="store.setType('register')"
        >Register</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "~~/store/auth";
import { IAuth } from "@/models/auth";
import { storeToRefs } from "pinia";

defineProps({
  label: { type: String, default: "" },
});

const store = useAuthStore();
const { isAuthenticated } = storeToRefs(store);
const username = ref("");
const password = ref("");

const auth = useCookie("auth");
auth.value = null;

const login = (arg: IAuth) => {
  store.setAuth(store.validateAccount(arg));

  if (isAuthenticated.value == true) {
    auth.value = "Nasi Kecap Madura Pak Agus";
    navigateTo("/dashboard");
  }
};
</script>

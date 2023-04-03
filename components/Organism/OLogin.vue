<template>
  <div class="w-[20em]">
    <div class="flex flex-col">
      <molecules-m-notification
        v-if="isShowNotification"
        class="flex flex-row justify-center items-center"
      >
        <span class="material-icons text-sm">notifications</span>
        <span class="ml-2 text-xs">Registration Success!</span>
      </molecules-m-notification>
      <molecules-m-text-input v-model="username" label="Username" />
      <molecules-m-text-input
        v-model="password"
        label="Password"
        type="password"
      />
      <molecules-m-notification
        v-if="isShowWarning"
        class="flex flex-row justify-center items-center"
        danger
      >
        <span class="material-icons text-sm">error</span>
        <span class="ml-2 text-xs">Username or Password is Invalid!</span>
      </molecules-m-notification>
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
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "~~/store/auth";
import { useCrypto } from "~~/composables/crypto";
import { IAuth } from "@/models/auth";
import { storeToRefs } from "pinia";

defineProps({
  label: { type: String, default: "" },
});

const store = useAuthStore();
const { isAuthenticated, isShowNotification, isShowWarning } =
  storeToRefs(store);
const username = ref("");
const password = ref("");

const auth = useCookie("auth");
auth.value = null;

watch(isShowWarning, (new_warning) => {
  setTimeout(() => {
    if (new_warning == true) store.setWarningVisibility(false);
  }, 1000);
});

const login = (arg: IAuth) => {
  const crypto = useCrypto();
  store.setAuth(store.validateAccount(arg));

  if (isAuthenticated.value == false) {
    store.setWarningVisibility(true);
    return;
  }
  if (isAuthenticated.value == true) {
    auth.value = crypto.encryptToken("Nasi-Cumi-Hitam-Madura_Pak-Kris");

    if (isShowNotification.value == true)
      store.setNotificationVisibility(false);
    navigateTo("/dashboard");
  }
};
</script>

<template>
  <div class="w-[20em]">
    <div class="flex flex-col">
      <molecules-m-text-input v-model="firstname" label="First Name" />
      <molecules-m-text-input v-model="lastname" label="Last Name" />
      <molecules-m-text-input v-model="username" label="Username" />
      <molecules-m-text-input
        v-model="password"
        label="Password"
        type="password"
      />
      <molecules-m-text-input
        v-model="re_password"
        label="Retype Password"
        type="password"
      />
    </div>
    <div class="flex flex-col mt-4 w-full">
      <atoms-a-button class="rounded" @on:click="register"
        >Register</atoms-a-button
      >
      <div class="text-xs">
        Already have an account?
        <a
          class="text-blue-800 cursor-pointer"
          @click.stop="authStore.setType('login')"
          >Login</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "~~/store/auth";
import { useProfileStore } from "~~/store/profile";
import { IProfile } from "~~/models/profile";
import { IAuth } from "~~/models/auth";

defineProps({
  label: { type: String, default: "" },
});

const authStore = useAuthStore();
const profileStore = useProfileStore();

const firstname = ref("");
const lastname = ref("");
const username = ref("");
const password = ref("");
const re_password = ref("");

const register = () => {
  if (password.value != re_password.value) {
    alert(`Password Doesn't match`);
    return;
  }
  if (password.value == re_password.value) {
    const new_profile: IProfile = {
      firstname: firstname.value,
      lastname: lastname.value,
      username: username.value,
    };
    const new_account: IAuth = {
      username: username.value,
      password: password.value,
    };

    profileStore.addProfile(new_profile);
    authStore.addAccount(new_account);

    authStore.setNotificationVisibility(true);
    authStore.setType("login");
  }
};
</script>

<template>
  <div class="w-[20em]">
    <div class="flex flex-col">
      <molecules-m-text-input
        v-model="form.firstname"
        label="First Name"
        :error-message="getErrorMessage('firstname')"
      />
      <molecules-m-text-input
        v-model="form.lastname"
        label="Last Name"
        :error-message="getErrorMessage('lastname')"
      />
      <molecules-m-text-input
        v-model="form.username"
        label="Username"
        :error-message="getErrorMessage('username')"
      />
      <molecules-m-text-input
        v-model="form.password"
        label="Password"
        type="password"
        :error-message="getErrorMessage('password')"
      />
      <molecules-m-text-input
        v-model="form.re_password"
        label="Retype Password"
        type="password"
        :error-message="getErrorMessage('re_password')"
      />
    </div>
    <div class="flex flex-col mt-4 w-full">
      <atoms-a-button class="rounded" @on:click="validate"
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
import useVuelidate from "@vuelidate/core";
import { maxLength, minLength, required } from "@vuelidate/validators";

defineProps({
  label: { type: String, default: "" },
});

const authStore = useAuthStore();
const profileStore = useProfileStore();

const form = reactive({
  firstname: "",
  lastname: "",
  username: "",
  password: "",
  re_password: "",
});

const rules = computed(() => {
  return {
    firstname: { required },
    lastname: { required },
    username: { required, minLength: minLength(4), maxLength: maxLength(8) },
    password: { required, minLength: minLength(4), maxLength: maxLength(16) },
    re_password: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(16),
    },
  };
});

const v$ = useVuelidate(rules, form);
const getErrorMessage = (field: any) => {
  const errorMessage = ref("");
  if (v$?.value[field]?.$dirty && v$.value[field]?.$invalid) {
    if (v$.value[field]?.required?.$invalid)
      errorMessage.value = `${field} can't be empty`;
    if (v$.value[field]?.minLength?.$invalid)
      errorMessage.value = `${field} needed to be more than ${v$.value[field]?.minLength.$params.min} character`;
    if (v$.value[field]?.maxLength?.$invalid)
      errorMessage.value = `${field} needed to be less than ${v$.value[field]?.maxLength.$params.max} character`;
  }
  return errorMessage.value;
};

const validate = async () => {
  const isFormCorrect = await v$.value.$validate();
  console.log(isFormCorrect);
  if (isFormCorrect) register();
};

const register = () => {
  if (form.password != form.re_password) {
    alert(`Password Doesn't match`);
    return;
  }
  if (form.password == form.re_password) {
    const new_profile: IProfile = {
      firstname: form.firstname,
      lastname: form.lastname,
      username: form.username,
    };
    const new_account: IAuth = {
      username: form.username,
      password: form.password,
    };

    profileStore.addProfile(new_profile);
    authStore.addAccount(new_account);

    authStore.setNotificationVisibility(true);
    authStore.setType("login");
  }
};
</script>

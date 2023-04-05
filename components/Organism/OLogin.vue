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
      <atoms-a-button class="rounded" @on:click="validate"
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
import { reactive } from "vue";
import { useAuthStore } from "~~/store/auth";
import { useCrypto } from "~~/composables/crypto";
import { storeToRefs } from "pinia";
import useVuelidate from "@vuelidate/core";
import { minLength, maxLength, required } from "@vuelidate/validators";

defineProps({
  label: { type: String, default: "" },
});

// AUTH START ==============================================================================
const store = useAuthStore();
const { isAuthenticated, isShowNotification, isShowWarning } =
  storeToRefs(store);
const auth = useCookie("auth");
auth.value = null;

watch(isShowWarning, (new_warning) => {
  setTimeout(() => {
    if (new_warning == true) store.setWarningVisibility(false);
  }, 1000);
});
// AUTH END ================================================================================

// FORM HANDLING START =====================================================================
const form = reactive({
  username: "",
  password: "",
});

const rules = computed(() => {
  return {
    username: { required, minLength: minLength(4), maxLength: maxLength(8) },
    password: { required, minLength: minLength(4), maxLength: maxLength(16) },
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
  if (isFormCorrect) login();
};

const login = () => {
  const crypto = useCrypto();
  store.setAuth(store.validateAccount(form));

  if (isShowNotification.value) store.setNotificationVisibility(false);
  if (isAuthenticated.value) {
    auth.value = crypto.encryptToken("Nasi-Cumi-Hitam-Madura_Pak-Kris");
    navigateTo("/dashboard");
  } else {
    store.setWarningVisibility(true);
  }
};
// FORM HANDLING END =======================================================================
</script>

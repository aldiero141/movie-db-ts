import { ref } from "vue";
import { defineStore } from "pinia";
import { IAuth } from "@/models/auth";
import { useAuthAccount } from "@/composables/auth";

export const useAuthStore = defineStore("auth", () => {
  const type = ref("login");
  const isAuthenticated = ref<boolean>(false);

  const { account, addAccount, removeAccount, validateAccount } =
    useAuthAccount();

  const setType = (arg: string) => {
    type.value = arg;
  };

  const setAuth = (arg: boolean) => {
    isAuthenticated.value = arg;
  };

  return {
    type,
    setType,
    account,
    addAccount,
    removeAccount,
    validateAccount,
    isAuthenticated,
    setAuth,
  };
});

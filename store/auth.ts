import { ref } from "vue";
import { defineStore } from "pinia";
import { useAuthAccount } from "@/composables/auth";

export const useAuthStore = defineStore("auth", () => {
  const type = ref("login");
  const isAuthenticated = ref<boolean>(false);
  const isShowNotification = ref<boolean>(false);
  const isShowWarning = ref<boolean>(false);

  const { account, addAccount, removeAccount, validateAccount } =
    useAuthAccount();

  const setType = (arg: string) => {
    type.value = arg;
  };

  const setAuth = (arg: boolean) => {
    isAuthenticated.value = arg;
  };
  const setNotificationVisibility = (arg: boolean) => {
    isShowNotification.value = arg;
  };
  const setWarningVisibility = (arg: boolean) => {
    isShowWarning.value = arg;
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
    isShowNotification,
    setNotificationVisibility,
    isShowWarning,
    setWarningVisibility,
  };
});

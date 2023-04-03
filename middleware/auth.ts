import { useAuthAccount } from "@/composables/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthAccount();
  if (auth.isLoggedIn()) {
    return navigateTo("/");
  }
});

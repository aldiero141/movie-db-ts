export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useCookie("auth");
  if (auth.value !== "Nasi Kecap Madura Pak Agus") {
    return navigateTo("/");
  }
});

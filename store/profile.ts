import { ref } from "vue";
import { defineStore } from "pinia";
import { IProfile } from "~~/models/profile";

export const useProfileStore = defineStore("profile", () => {
  const profiles = ref<IProfile[]>([
    { firstname: "admin", lastname: "admin", username: "admin" },
  ]);

  const addProfile = (arg: IProfile) => {
    profiles.value.push(arg);
  };

  const removeProfile = (arg: IProfile) => {
    const result = profiles.value.filter(
      (profile) => profile.username != arg.username
    );
    profiles.value = result;
  };

  return { profiles, addProfile, removeProfile };
});

import { IAuth } from "@/models/auth";

export function useAuthAccount() {
  const account = ref<IAuth[]>([
    {
      username: "admin",
      password: "admin",
    },
  ]);

  const addAccount = (arg: IAuth) => {
    account.value.push(arg);
  };
  const removeAccount = (arg: IAuth) => {
    const result = account.value.filter(
      (account) => account.username != arg.username
    );
    account.value = result;
  };

  const validateAccount = (arg: IAuth): boolean => {
    let result = false;
    account.value.forEach((element) => {
      if (
        element.username == arg.username &&
        element.password == arg.password
      ) {
        result = true;
        return;
      }
    });
    return result;
  };
  return { account, addAccount, removeAccount, validateAccount };
}

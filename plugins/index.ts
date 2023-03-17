export default defineNuxtPlugin(() => {
  return {
    provide: {
      str_limit: (value: string, size: number) => {
        if (!value) return "";
        value = value.toString();

        if (value.length <= size) {
          return value;
        }
        return value.substr(0, size) + "...";
      },
    },
  };
});

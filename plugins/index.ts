export default defineNuxtPlugin(() => {
  return {
    provide: {
      str_limit: (value: string, size: number): string => {
        if (!value) return "";
        value = value.toString();

        if (value.length <= size) {
          return value;
        }
        return value.substr(0, size) + "...";
      },
      snakeToTitleCase: (value: string): string => {
        return value.replace(/^_*(.)|_+(.)/g, (value, c, d) =>
          c ? c.toUpperCase() : " " + d.toUpperCase()
        );
      },
    },
  };
});

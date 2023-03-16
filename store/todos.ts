import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { ITask } from "../models/task";

export const useTodosStore = defineStore("todos", () => {
  const todos = ref<Array<ITask>>([]);
  const isLoading = ref(false);

  const completedTodos = computed(() =>
    todos.value.filter((todo) => todo.status == "completed")
  );
  const uncompletedTodos = computed<ITask[]>(() =>
    todos.value.filter((todo) => todo.status == "uncompleted")
  );

  function sortByStatus(payload: string): void {
    if (payload == "completed")
      todos.value = [...completedTodos.value, ...uncompletedTodos.value];
    if (payload == "uncompleted")
      todos.value = [...uncompletedTodos.value, ...completedTodos.value];
  }

  async function getTodos() {
    return await new Promise((resolve, reject) => {
      isLoading.value = true;
      setTimeout(() => {
        todos.value.push(
          {
            text: "Mandi",
            status: "completed",
            removable: true,
          },

          {
            text: "Makan",
            status: "uncompleted",
            removable: false,
          },
          {
            text: "Bersih Bersih",
            status: "completed",
            removable: true,
          },
          {
            text: "Cuci Baju",
            status: "uncompleted",
            removable: false,
          }
        );
        resolve("init todos!");
        isLoading.value = false;
      }, 1000);
    });
  }

  function addTodo(todo: ITask): void {
    isLoading.value = true;
    setTimeout(() => {
      todos.value.push(todo);
      isLoading.value = false;
    }, 300);
  }

  function removeTodo(index: number): void {
    isLoading.value = true;
    setTimeout(() => {
      todos.value.splice(index, 1);
      isLoading.value = false;
    }, 300);
  }

  function setStatus(index: number, value: unknown): void {
    if (value) {
      todos.value[index].status = "completed";
      todos.value[index].removable = true;
      return;
    }
    if (!value) {
      todos.value[index].status = "uncompleted";
      todos.value[index].removable = false;
      return;
    }
  }

  return {
    todos,
    isLoading,
    getTodos,
    sortByStatus,
    addTodo,
    removeTodo,
    setStatus,
  };
});

import type { ITodo } from "@/types/todo";
import { defineStore } from "pinia";

export const useTodoStore = defineStore({
  id: "todoState",
  state: () => ({
    todos: [] as ITodo[],
  }),
  actions: {
    addTodo(title: string, description?: string) {
      const todo: ITodo = {
        id: Math.floor(Math.random() * 10000),
        title,
        description,
      };
      this.todos = [todo, ...this.todos];
    },

    removeTodo(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
});

import type { ITodo } from "@/types/todo";
import axios from "axios";
import { defineStore } from "pinia";

export const useTodoStore = defineStore({
  id: "todoState",
  state: () => ({
    todos: [] as ITodo[],
  }),
  getters: {
    totalTodos: (state) => state.todos.length,
  },
  actions: {
    addTodo(title: string, description?: string) {
      const todo: ITodo = {
        id: Math.floor(Math.random() * 10000),
        title,
        description,
      };
      this.todos = [todo, ...this.todos];
    },

    async removeTodo(id: number) {
      // example of an async request
      const response = await axios.get(
        "https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain",
      );
      console.log("received data ", response.data);

      // remove todos
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
});

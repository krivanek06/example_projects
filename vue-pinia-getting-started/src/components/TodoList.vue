<template>
  <div>
    <div v-for="todo of storeTodo.todos" :key="todo.id" class="wrapper">
      <div class="header">
        <div class="title">[{{ todo.id }}] {{ todo.title }}</div>
        <div>
          <button type="button" @click="storeTodo.removeTodo(todo.id)">remove</button>
        </div>
      </div>
      <div v-if="todo?.description">{{ todo?.description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTodoStore } from "../stores/todo";

export default defineComponent({
  name: "TodoList",
  setup() {
    const storeTodo = useTodoStore();

    return { storeTodo };
  },
});
</script>

<style>
.wrapper {
  padding: 24px;
  background-color: #cccccc;
  border-radius: 8px;
  border: 1px solid;
  margin-top: 16px;
}
.header {
  display: flex;
  justify-content: space-between;
}

.title {
  font-weight: 600;
  font-size: 18px;
}

button {
  padding: 8px;
  border-radius: 8px;
  color: white;
  background-color: #c92f0c;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
}
</style>

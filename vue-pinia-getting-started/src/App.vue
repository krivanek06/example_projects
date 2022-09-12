<template>
  <aside>
    <TodoForm />
  </aside>

  <section>
    <TodoList />
  </section>
</template>

<script lang="ts">
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "app",
  components: {
    TodoForm,
    TodoList,
  },
});
</script>

<style scoped>
aside {
  margin-top: 32px !important;
}
aside,
section {
  width: 80%;
  margin: auto;
}
</style>

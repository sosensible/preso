---
title: Modernizing State Management
layout: two-cols
---

# State Management

* In Component
* Nested Component State
* Encapsulated State

::right::

<img src="http://localhost:4000/pinia-logo.svg" class="effect-grow" style="width: 20%;">

---
hideInToc: true
---

# In Component State

State Management

<img src="/itb-2022/component-state.png" class="drawing-grow">

---
hideInToc: true
---

# Nested Component State

State Management

<img src="/itb-2022/nested-component-state.png" class="drawing-grow">

---
hideInToc: true
---

# Encapsulated State

State Management

<img src="/itb-2022/encapsulated-component-state.png" class="drawing-grow">

---
hideInToc: true
layout: two-cols
---

# Stateful Code

stores/counter.js

```ts {*|1,3|4,6,8,10-11|12-33|34-41|*} {maxHeight:'100'}
import { defineStore } from 'pinia'

export const useTodos = defineStore('todos', {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // type will be automatically inferred to number
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      return state.todos.filter((todo) => 
        todo.isFinished)
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => 
        !todo.isFinished)
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === 'finished') {
        // call other getters with autocompletion ✨
        return this.finishedTodos
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos
      }
      return this.todos
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addTodo(text) {
      // you can directly mutate the state
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    },
  },
})
```

::right::

# &nbsp;

vue component

```html {*|2,7|16-18|*} {maxHeight: '100'}
<script>
import { useTodos  } from '@/stores/todos'

export default {
  setup() {
    // stateful component data
    const todos = useTodos();
    // method functions
    // etc.
  },
}
</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.item }}
    </li>
  </ul>
</template>
```

<style>
.slidev-code-wrapper {
  height: 400px;
  padding-right: 6px;
}
</style>

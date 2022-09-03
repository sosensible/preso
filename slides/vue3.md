---
title: Modernizing Vue Code
layout: two-cols
---

# Vue 3

* Composition (or Options) API
* TypeScript or Modern JS
* Multiple Apps

::right::

<img src="http://localhost:4000/vue-logo.png" class="effect-grow">

<!--
* [Nuxt](https://nuxtjs.org/) ![Nuxt Logo](/assets/img/nuxt-colored-logo.png)
* <img src="/assets/img/quasar-logo.svg" scale="50%" />[Quasar](https://quasar.dev/)
* [Veutify](https://vuetifyjs.com/en/)[logo]
-->

---
hideInToc: true
---

# Composition or Options API

<img src="itb-2022/api-prefs.png" class="main-img">

---
hideInToc: true 
layout: two-cols
---

# Composition API

```html {*} {maxHeight:'100'}
<script setup>
import { ref, onMounted } from 'vue'

// component scoped reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

_Using Setup Annotation_

:: right ::

# Options API

```html {*} {maxHeight:'100'}
<script>
export default {
  // component scoped reactive state
  data() {
    return {
      count: 0
    }
  },

// functions that mutate state and trigger updates
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

<style>
.slidev-code-wrapper {
  height: 440px;
  padding-right: 6px;
}
</style>

---
hideInToc: true 
layout: two-cols
---

# Example Code

```html {*|2,10|4-10} {maxHeight:'100'}
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  count: {
    default: 0,
  },
})

const counter = ref(props.count)
</script>

<template>
  <div 
    flex="~" 
    w="min" 
    border="~ gray-400 opacity-50 rounded-md"
  >
    <button
      border="r gray-400 opacity-50"
      p="2"
      font="mono"
      outline="!none"
      hover:bg="gray-400 opacity-20"
      @click="counter -= 1"
    >
      -
    </button>
    <span m="auto" p="2">{{ counter }}</span>
    <button
      border="l gray-400 opacity-50"
      p="2"
      font="mono"
      outline="!none"
      hover:bg="gray-400 opacity-20"
      @click="counter += 1"
    >
      +
    </button>
  </div>
</template>

```

:: right ::

# Live Demo

Demo
<counter />

<style>
.slidev-code-wrapper {
  height: 440px;
  padding-right: 6px;
}
</style>

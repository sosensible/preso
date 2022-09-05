---
title: Modernizing Vue Code
layout: two-cols
---

# Vue 3

* Composition (or Options) API
* TypeScript or Modern JS
* Multiple Apps
* Built in Components

::right::

<img src="http://localhost:4000/vue-logo.png" class="effect-grow">

<!--
* [Nuxt](https://nuxtjs.org/) ![Nuxt Logo](/assets/img/nuxt-colored-logo.png)
* <img src="/assets/img/quasar-logo.svg" scale="50%" />[Quasar](https://quasar.dev/)
* [Veutify](https://vuetifyjs.com/en/)[logo]
-->

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

```html {*|2,10|4-10|*} {maxHeight:'100'}
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

---
hideInToc: true
---

# Built In Components

* [Transition](https://vuejs.org/guide/built-ins/transition.html#the-transition-component)
* [TransitionGroup](https://vuejs.org/guide/built-ins/transition-group.html#transitiongroup)
* [KeepAlive](https://vuejs.org/guide/built-ins/keep-alive.html#keepalive)
* [Teleport](https://vuejs.org/guide/built-ins/teleport.html#teleport)
* [Suspense](https://vuejs.org/guide/built-ins/suspense.html#suspense)

---
hideInToc: true 
layout: two-cols
---

# Built In Components

* [Transition](https://vuejs.org/guide/built-ins/transition.html#the-transition-component)
* [TransitionGroup](https://vuejs.org/guide/built-ins/transition-group.html#transitiongroup)
* [KeepAlive](https://vuejs.org/guide/built-ins/keep-alive.html#keepalive)
* [Teleport](https://vuejs.org/guide/built-ins/teleport.html#teleport)
* [Suspense](https://vuejs.org/guide/built-ins/suspense.html#suspense)

::right::

# &lt;Transition&gt;
&nbsp;

This component can be used to apply enter and leave animations on elements or components passed to it via its default slot. The enter or leave can be triggered by one of the following:

* Conditional rendering via v-if
* Conditional display via v-show
* Dynamic components toggling via the &lt;component&gt; special element

_[Docs](https://vuejs.org/guide/built-ins/transition.html#the-transition-component)_

---
hideInToc: true 
layout: two-cols
---

# Built In Components

* [Transition](https://vuejs.org/guide/built-ins/transition.html#the-transition-component)
* [TransitionGroup](https://vuejs.org/guide/built-ins/transition-group.html#transitiongroup)
* [KeepAlive](https://vuejs.org/guide/built-ins/keep-alive.html#keepalive)
* [Teleport](https://vuejs.org/guide/built-ins/teleport.html#teleport)
* [Suspense](https://vuejs.org/guide/built-ins/suspense.html#suspense)

::right::


# &lt;TransitionGroup&gt;
&nbsp;

This is a built-in component designed for animating the insertion, removal, and order change of elements or components that are rendered in a list.

```html
<TransitionGroup name="list" tag="ul">
  <li v-for="item in items" :key="item">
    {{ item }}
  </li>
</TransitionGroup>
```

_[Docs](https://vuejs.org/guide/built-ins/transition-group.html#enter-leave-transitions)_

---
hideInToc: true 
layout: two-cols
---

# Built In Components

* [Transition](https://vuejs.org/guide/built-ins/transition.html#the-transition-component)
* [TransitionGroup](https://vuejs.org/guide/built-ins/transition-group.html#transitiongroup)
* [KeepAlive](https://vuejs.org/guide/built-ins/keep-alive.html#keepalive)
* [Teleport](https://vuejs.org/guide/built-ins/teleport.html#teleport)
* [Suspense](https://vuejs.org/guide/built-ins/suspense.html#suspense)

::right::


# &lt;KeepAlive&gt;
&nbsp;

This is a built-in component that allows us to conditionally cache component instances when dynamically switching between multiple components.

```html
<!-- Inactive components will be cached! -->
<KeepAlive>
  <component :is="activeComponent" />
</KeepAlive>
```

_[Docs](https://vuejs.org/guide/built-ins/keep-alive.html#basic-usage)_

<!--
When components are loaded, instantiated the state is set new each time. This allows the statefulness of the component to be static.
-->

---
hideInToc: true 
layout: two-cols
---

# Built In Components

* [Transition](https://vuejs.org/guide/built-ins/transition.html#the-transition-component)
* [TransitionGroup](https://vuejs.org/guide/built-ins/transition-group.html#transitiongroup)
* [KeepAlive](https://vuejs.org/guide/built-ins/keep-alive.html#keepalive)
* [Teleport](https://vuejs.org/guide/built-ins/teleport.html#teleport)
* [Suspense](https://vuejs.org/guide/built-ins/suspense.html#suspense)

::right::


# &lt;Teleport&gt;
&nbsp;

This is a built-in component that allows us to "teleport" a part of a component's template into a DOM node that exists outside the DOM hierarchy of that component.

```html
<button @click="open = true">Open Modal</button>

<Teleport to="body">
  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
</Teleport>
```

_[Docs](https://vuejs.org/guide/built-ins/teleport.html#basic-usage) : Open Model Example_ 

---
hideInToc: true 
layout: two-cols
---

# Built In Components

* [Transition](https://vuejs.org/guide/built-ins/transition.html#the-transition-component)
* [TransitionGroup](https://vuejs.org/guide/built-ins/transition-group.html#transitiongroup)
* [KeepAlive](https://vuejs.org/guide/built-ins/keep-alive.html#keepalive)
* [Teleport](https://vuejs.org/guide/built-ins/teleport.html#teleport)
* [Suspense](https://vuejs.org/guide/built-ins/suspense.html#suspense)

::right::


# &lt;Suspense&gt;
&nbsp;

This is a built-in component for orchestrating async dependencies in a component tree. It can render a loading state while waiting for multiple nested async dependencies down the component tree to be resolved.

Note: _**Experimental Feature**_

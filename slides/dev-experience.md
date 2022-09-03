---
title: Modernizing the Dev Experience
layout: two-cols
---

# Vite

* 10-100x faster than JavaScript-based bundlers
* Optimized Build
* Lighting Fast HMR (Hot Module Replacement)
* Universal Plugins (Dev and Build)
* Rich Features (TypeScript, JSX, CSS, More )
* API Fully Typed 

Vite improves the dev server start time by first dividing the modules in an application into two categories: dependencies and source code.

Note: _Not just for Vue._

::right::

<img src="http://localhost:4000/vite-logo.svg" class="effect-grow">


---
hideInToc: true
---

# Classic JavaScript bundlers

<img src="/itb-2022/bundle-server.png" class="main-img">

---
hideInToc: true
---

# Vite

<img src="/itb-2022/esm-server.png" class="main-img">

---
hideInToc: true
---

# HMR (Hot Module Replacement)


```js {*|2,9-11}
// auth.js
import { defineStore, acceptHMRUpdate } from 'pinia'

const useAuth = defineStore('auth', {
  // options...
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot))
}
```

_This is a stateful entity example of using HMR for live update during dev._

---
title: Modernizing Unit Testing
layout: two-cols
---

# ViTest

* Vite Powered
* Jest Compatible
* Smart & instant watch mode
* ESM, TypeScript & JSA support

_Not just for Vue._

::right::

<img src="http://localhost:4000/vitest-logo.svg" class="effect-grow">

---
layout: two-cols
hideInToc: true
---

# Test


::right::

# Component

```js {*|1|2,6,18-20|2,7-9,16|4,11} {maxHeight:'100'}
<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{ count: number }>()

const times = ref(2)
const result = computed(() => 
  props.count * times.value
)

defineExpose(props)
</script>

<template>
  <div>
    {{ count }} x {{ times }} = {{ result }}
  </div>
  <button @click="times += 1">
    x1
  </button>
</template>
```

<style>
.slidev-code-wrapper {
  height: 440px;
  padding-right: 6px;
}
</style>

---
layout: two-cols
hideInToc: true
---

# Test

```js {*|2,5|1,7,11|1,7-10|13-14|16,20|18,22|4,23|*} {maxHeight:'100'}
import { mount } from '@vue/test-utils'
import Hello from '../components/Hello.vue'

test('mount component', async () => {
  expect(Hello).toBeTruthy()

  const wrapper = mount(Hello, {
    props: {
      count: 4,
    },
  })

  expect(wrapper.text()).toContain('4 x 2 = 8')
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.get('button').trigger('click')

  expect(wrapper.text()).toContain('4 x 3 = 12')

  await wrapper.get('button').trigger('click')

  expect(wrapper.text()).toContain('4 x 4 = 16')
})
```

::right::

# Component

```js {*} {maxHeight:'100'}
<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{ count: number }>()

const times = ref(2)
const result = computed(() => 
  props.count * times.value
)

defineExpose(props)
</script>

<template>
  <div>
    {{ count }} x {{ times }} = {{ result }}
  </div>
  <button @click="times += 1">
    x1
  </button>
</template>
```

<style>
.slidev-code-wrapper {
  height: 440px;
  padding-right: 6px;
}
</style>

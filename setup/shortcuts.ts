import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'enter',
      fn: () => nav.next(),
      autoRepeat: true,
    },
    {
      key: 'backspace',
      fn: () => nav.prev(),
      autoRepeat: true,
    },
    {
      key: 'home',
      fn: () => nav.goFirst()
    },
    {
      key: 'end',
      fn: () => nav.goLast()
    }
  ]
})
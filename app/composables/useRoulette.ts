export const useRoulette = (items: ComputedRef<any[]>, radius: number = 350) => {
  const activeIndex = ref(0)

  const next = () => {
    if (items.value.length > 0) {
      activeIndex.value = (activeIndex.value + 1) % items.value.length
    }
  }

  const prev = () => {
    if (items.value.length > 0) {
      activeIndex.value =
        (activeIndex.value - 1 + items.value.length) % items.value.length
    }
  }

  const getStyle = (i: number) => {
    return calculateRouletteStyle(i, activeIndex.value, items.value.length, radius)
  }

  useKeyboardNav(next, prev)

  return { activeIndex, next, prev, getStyle }
}

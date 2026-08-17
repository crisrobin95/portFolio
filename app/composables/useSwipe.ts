// composables/useSwipe.ts
export const useSwipe = (
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
  threshold = 50,
) => {
  const touchStartX = ref(0)
  const touchEndX = ref(0)

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.value = e.changedTouches[0]?.screenX ?? 0
  }

  const handleTouchEnd = (e: TouchEvent) => {
    touchEndX.value = e.changedTouches[0]?.screenX ?? 0
    handleGesture()
  }

  const handleGesture = () => {
    const diff = touchEndX.value - touchStartX.value
    if (diff < -threshold) {
      onSwipeLeft()
    }
    if (diff > threshold) {
      onSwipeRight()
    }
  }

  return { handleTouchStart, handleTouchEnd }
}

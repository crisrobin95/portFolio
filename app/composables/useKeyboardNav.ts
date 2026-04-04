export const useKeyboardNav = (onRight: () => void, onLeft: () => void) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') onRight()
    if (event.key === 'ArrowLeft') onLeft()
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeyDown)
  })
  onUnmounted(() => {
    window.addEventListener('keydown', handleKeyDown)
  })
}

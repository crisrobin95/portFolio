export const calculateRouletteStyle = (
  idx: number,
  activeIndex: number,
  total: number,
  radius: number,
) => {
  if (total === 0) return {}

  const angle = (360 / total) * (idx - activeIndex)
  const isActive = idx === activeIndex

  return {
    transform: `
      rotateY(${angle}deg)
      translateZ(${radius}px)
      ${isActive ? 'scale(1.15)' : 'scale(0.85)'}
    `,
    opacity: isActive ? 1 : 0.2,
    zIndex: isActive ? 1 : 0.5,
  }
}

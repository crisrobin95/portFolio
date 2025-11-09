const cvData = ref<any | null>(null)

export function useCvData() {
  const loadData = async () => {
    if (cvData.value === null) {
      try {
        const data = await import('~/locales/cv.json')

        cvData.value = data.default || data
      } catch (error) {
        console.error('Error al cargar el archivo cv.json:', error)
      }
    }
  }

  loadData()

  return {
    cv: readonly(cvData),
    loadData,
  }
}

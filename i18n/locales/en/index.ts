import cv from './cv.json'
import ui from './ui.json'

export default defineI18nLocale(async (locale) => {
  return {
    ...cv,
    ...ui,
  }
})

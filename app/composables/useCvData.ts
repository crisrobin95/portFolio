import type { Root } from '~/types/cv'

export function useCvData() {
  const { tm, locale } = useI18n()
  const cv = computed<Root>(() => tm('cv') as Root)

  return {
    cv,
  }
}

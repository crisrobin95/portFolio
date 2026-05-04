import type { Root } from '~/types/cv'
import type { UiTranslations } from '~/types/ui'

export function useCvData() {
  const { tm, locale } = useI18n()
  const cv = computed<Root>(() => tm('cv') as Root)
  const ui = computed<UiTranslations>(() => tm('ui') as unknown as UiTranslations)
  return {
    cv,
    ui,
  }
}

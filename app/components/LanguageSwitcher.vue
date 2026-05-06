<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const getLangCode = (lang: any) => (typeof lang === 'object' ? lang.code : lang)

const onLanguageChange = async (newLocale: any) => {
  const code = typeof newLocale === 'object' ? newLocale.code : newLocale
  await setLocale(code)
}
</script>

<template>
  <div class="language-switcher">
    <template v-for="lang in locales" :key="getLangCode(lang)">
      <NuxtLink
        :to="switchLocalePath(lang.code)"
        class="lang-btn"
        :class="{ active: getLangCode(lang) === locale }"
        @click.prevent="onLanguageChange(getLangCode(lang))"
      >
        {{ getLangCode(lang).toUpperCase() }}
      </NuxtLink>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.language-switcher {
  @include main.flex($gap: 0.5rem);
  margin-right: 0.5rem;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  padding-right: 0.5rem;

  @include main.responsive(50rem) {
    border-right: none;
    border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.3);
    padding-right: 0;
    padding-bottom: 0.5rem;
    margin-right: 0;
    width: 100%;
    justify-content: center;
  }
}

.lang-btn {
  @include main.flex;
  cursor: pointer;
  border: solid 0.0625rem white;
  padding: 0.3rem 0.6rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  font-size: 0.7rem;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;

  &.active {
    background-color: chartreuse;
    color: black;
    font-weight: bold;
    border-color: chartreuse;
  }

  &:hover:not(.active) {
    background-color: rgba(127, 255, 0, 0.3);
  }
}
</style>

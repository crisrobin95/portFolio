<script setup lang="ts">
import MailIcon from '~/assets/icons/Mail.vue'
import LinkedIn from '~/assets/icons/LinkedIn.vue'
import GitHub from '~/assets/icons/GitHub.vue'
import Phone from '~/assets/icons/Phone.vue'
import Download from '~/assets/icons/Download.vue'
import NavBar from './NavBar.vue'

const { cv, ui } = useCvData()

const iconMap = {
  LinkedIn: LinkedIn,
  GitHub: GitHub,
}

const route = useRoute()

const pageTitle = computed(() => {
  const name = route.name ? String(route.name).split('___')[0] : ''

  const routeKeys: Record<string, string | undefined> = {
    index: ui.value?.nav?.about,
    experiencia: ui.value?.nav?.experience,
    habilidades: ui.value?.nav?.skills,
    projects: ui.value?.nav?.projects,
  }
  if (name && routeKeys[name]) {
    return routeKeys[name]
  }

  return name || route.path
})
</script>
<template>
  <header v-if="cv" class="header">
    <div class="header__conteiner">
      <NavBar class="header__navbar" />
      <NuxtLink :to="$localePath('index')" class="header__label">
        {{ cv.basics.label }}
      </NuxtLink>
    </div>
    <h1 class="header__title">{{ pageTitle }}</h1>

    <nav class="header__nav" aria-label="Social and contact">
      <LanguageSwitcher />

      <a
        :href="'https://cv-digital-green.vercel.app/'"
        class="header__link"
        :title="ui.static.download_cv"
        :aria-label="'Ir a descargar mi cv'"
      >
        <Download />
      </a>

      <a
        :href="`mailto:${cv.basics.email}`"
        class="header__link"
        :title="ui.static.send_email"
        :aria-label="ui.static.send_email"
      >
        <MailIcon />
      </a>

      <a
        :href="`tel:${cv.basics.phone}`"
        class="header__link"
        :title="ui.static.call_me"
        :aria-label="'Llamar a mi número personal'"
      >
        <Phone />
      </a>

      <template v-for="profile in cv.basics.profiles" :key="profile.network">
        <a
          :href="profile.url"
          class="header__link"
          :aria-label="'Visitar mi perfil de ' + profile.network"
          target="_blank"
        >
          <component :is="iconMap[profile.network as keyof typeof iconMap]" />
        </a>
      </template>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  @include main.flex($justify: space-between, $gap: 0.5rem);
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  border-bottom: solid white 0.2rem;
  &__conteiner {
    flex: 1;
    @include main.flex($justify: flex-start, $gap: 1rem);
  }

  &__title {
    flex: 0 1 auto;
    width: auto;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.8rem;
  }

  &__label {
    @include main.flex();
    background-color: unset;
    border: unset;
    font-size: 1.5rem;
    color: inherit;
    text-decoration: none;
    &:hover {
      padding: 0.12rem;
      border-radius: 1rem;
      background-color: rgba(128, 255, 0, 0.636);
    }
  }

  &__nav {
    @include main.flex($justify: flex-end, $gap: 1rem);
    flex: 1;
    @include main.responsive(50rem) {
      padding: 1rem;
    }
  }

  &__link {
    @include main.flex;
    cursor: pointer;
    border: solid 0.0625rem white;
    padding: 0.5rem;
    background-color: rgba(85, 65, 133, 0.863);
    border-radius: 3rem;
    transition: background-color 0.2s ease;

    * {
      width: 0.9rem;
      height: 0.9rem;
    }

    &:hover {
      background-color: rgba(128, 255, 0, 0.636);
    }
  }

  @include main.responsive(50rem) {
    @include main.flex(column, $wrap: wrap, $gap: 0.1rem);
  }
}
</style>

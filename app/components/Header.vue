<script setup lang="ts">
import MailIcon from '~/assets/icons/Mail.vue'
import LinkedIn from '~/assets/icons/LinkedIn.vue'
import GitHub from '~/assets/icons/GitHub.vue'
import Phone from '~/assets/icons/Phone.vue'
import Download from '~/assets/icons/Download.vue'

const { cv } = useCvData()

const iconMap = {
  LinkedIn: LinkedIn,
  GitHub: GitHub,
}

const route = useRoute()

const routeLabels: Record<string, string> = {
  index: 'Sobre mí',
  experiencia: 'Experiencia',
  habilidades: 'Habilidades',
}

const pageTitle = computed(() => {
  const name = route.name ? String(route.name) : ''
  if (name && routeLabels[name]) {
    return routeLabels[name]
  }
  return name || route.path
})
</script>
<template>
  <div v-if="cv" class="header">
    <NuxtLink to="/" class="label">
      {{ cv.basics.label }}
    </NuxtLink>
    <h2 class="title">{{ pageTitle }}</h2>
    <nav class="pie-cabecera">
      <a
        :href="'https://cv-digital-green.vercel.app/'"
        title="Descargar"
        :aria-label="'Ir a descargar mi cv'"
        ><Download
      /></a>
      <a
        :href="`mailto:${cv.basics.email}`"
        title="Envia email"
        :aria-label="'Enviar email'"
        ><MailIcon
      /></a>
      <a :href="`tel:${cv.basics.phone}`" :aria-label="'Llamar a mi número personal'"
        ><Phone />
      </a>
      <template v-for="profile in cv.basics.profiles" :key="profile.network">
        <a
          :href="profile.url"
          :aria-label="'Visitar mi perfil de ' + profile.network"
          target="_blank"
        >
          <component :is="iconMap[profile.network as keyof typeof iconMap]" />
        </a>
      </template>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.header {
  @include main.flex($justify: space-between, $gap: 0.5rem);
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  border-bottom: solid white 0.2rem;
  h2 {
    font-weight: bold;
  }
  @include main.responsive(50rem) {
    @include main.flex(column, $wrap: wrap, $gap: 1rem);
  }
}
.label {
  @include main.flex();
  width: fit-content;
  background-color: unset;
  border: unset;
  font-size: 1.5rem;
}
.pie-cabecera {
  @include main.flex($gap: 1rem);
}
a {
  @include main.flex;
  cursor: pointer;
  border: solid 0.0625rem white;
  padding: 0.5rem;
  background-color: rgba(85, 65, 133, 0.863);
  border-radius: 3rem;

  * {
    width: 0.9rem;
    height: 0.9rem;
  }

  &:hover {
    background-color: chartreuse;
    border: solid white 0.2rem;
  }
}
</style>

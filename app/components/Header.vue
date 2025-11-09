<script setup lang="ts">
import MailIcon from '../assets/icons/Mail.vue'
import LinkedIn from '../assets/icons/LinkedIn.vue'
import GitHub from '~/assets/icons/GitHub.vue'
import Phone from '~/assets/icons/Phone.vue'
import Download from '~/assets/icons/Download.vue'

const { cv } = useCvData()

const iconMap = {
  LinkedIn: LinkedIn,
  GitHub: GitHub,
}
</script>
<template>
  <div v-if="cv" class="header">
    <h1 class="title">{{ cv.basics.name }}</h1>
    <h2>{{ cv.basics.label }}</h2>
    <footer class="pie-cabecera">
      <a :href="'https://cv-digital-green.vercel.app/'" title="Descargar"><Download /></a>
      <a :href="`mailto:${cv.basics.email}`" title="Envia email"><MailIcon /></a>
      <a :href="`tel:${cv.basics.phone}`"><Phone /> </a>
      <template v-for="profile in cv.basics.profiles" :key="profile.network">
        <a :href="profile.url" target="_blank">
          <component :is="iconMap[profile.network as keyof typeof iconMap]" />
        </a>
      </template>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.header {
  @include main.flex($justify: space-between, $gap: 1rem);
  width: 100%;
  padding: 1rem;
  text-align: center;
  border-bottom: solid white 0.2rem;
  h1 {
    font-size: 1.5rem;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 100;
  }
  @include main.responsive(50rem) {
    @include main.flex(column, $wrap: wrap, $gap: 1rem);
  }
}

.pie-cabecera {
  @include main.flex($gap: 1rem);
}
a {
  @include main.flex;
  border: solid 0.0625rem white;
  padding: 0.5rem;
  background-color: rgba(85, 65, 133, 0.863);
  border-radius: 3rem;

  * {
    width: 0.9rem;
    height: 0.9rem;
  }
}
</style>

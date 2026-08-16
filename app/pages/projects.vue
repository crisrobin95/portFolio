<script setup lang="ts">
const { cv, ui } = useCvData()

useHead({
  title: `${ui.value?.nav?.projects || 'Proyectos'}`,
  meta: [
    {
      name: 'description',
      content: () =>
        cv.value?.basics?.summary ||
        ui.value?.seo?.default_description ||
        'Sección de proyectos',
    },
    {
      property: 'og:title',
      content: () => `Proyectos de ${cv.value?.basics?.name || 'Cristhian'}`,
    },
  ],
})
</script>

<template>
  <main class="projects-page">
    <NuxtImg
      src="/fondo-proyects.webp"
      alt="Fondo decorativo de la sección de proyectos"
      class="projects-page__bg"
      loading="lazy"
    />

    <aside class="projects-page__nav projects-page__nav--prev">
      <NuxtLink :to="$localePath('experiencia')">
        <BaseButtonNav :label="ui.nav.experience" />
      </NuxtLink>
    </aside>

    <section class="projects-page__content">
      <ProjectsGrid />
    </section>

    <aside class="projects-page__nav projects-page__nav--next">
      <NuxtLink :to="$localePath('contacto')">
        <BaseButtonNav :label="ui.nav.contact" />
      </NuxtLink>
    </aside>
  </main>
</template>

<style lang="scss" scoped>
.projects-page {
  position: relative;
  width: 100%;
  min-height: 80vh;
  padding: 1rem;
  @include main.flex($justify: center);
  z-index: 1;

  &__bg {
    // @include main.backgroundImage();
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
  }

  &__content {
    @include main.flex();
    width: 100%;
    z-index: 2;
  }

  &__nav {
    position: fixed;
    bottom: 5rem;
    z-index: 999;
    @include main.flex();

    &--prev {
      left: 0.2%;
      @include main.responsive(50rem) {
        left: 2rem;
      }
    }

    &--next {
      right: 1%;
      @include main.responsive(50rem) {
        right: 2rem;
      }
    }
  }
}
</style>

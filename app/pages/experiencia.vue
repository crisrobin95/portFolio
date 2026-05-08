<script setup lang="ts">
const localePath = useLocalePath()
const { ui } = useCvData()

useHead({
  title: 'Experiencia',
  meta: [
    {
      name: 'description',
      content: 'Trayectoria profesional y detalles de mi experiencia laboral.',
    },
  ],
})
</script>

<template>
  <main class="experience-page">
    <NuxtImg
      src="/fondo-experiencia.webp"
      alt="Fondo decorativo de la sección experiencia"
      class="experience-page__bg"
      loading="lazy"
    />

    <aside class="experience-page__nav experience-page__nav--prev">
      <NuxtLink :to="$localePath('habilidades')">
        <BaseButtonNav :label="ui.nav.skills" />
      </NuxtLink>
    </aside>

    <section class="experience-page__content">
      <ExperienceTimeline />
    </section>

    <aside class="experience-page__nav experience-page__nav--next">
      <NuxtLink :to="$localePath('proyectos')">
        <BaseButtonNav label="Proyectos" />
      </NuxtLink>
    </aside>
  </main>
</template>

<style lang="scss" scoped>
.experience-page {
  width: 100%;
  min-height: 80vh;
  @include main.flex();
  box-sizing: border-box;
  z-index: 1;
  @include main.responsive(50rem) {
    @include main.flex(column);
  }

  &__bg {
    position: absolute;
    width: 99%;
    max-width: 120rem;
    height: 80dvh;
    opacity: 0.8;
    object-fit: cover;
    z-index: -1;
  }

  &__content {
    @include main.flex();
    width: 100%;
  }

  &__nav {
    margin: 1rem;
    z-index: 999;
    @include main.flex();
    @include main.responsive(50rem) {
      position: initial;
    }
    &--prev {
      @include main.responsive(50rem) {
        left: 2rem;
      }
    }
    &--next {
      @include main.responsive(50rem) {
        right: 2rem;
      }
    }
  }
  @include main.responsive(50rem) {
    @include main.flex(column);
  }
}
</style>

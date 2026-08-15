<script setup lang="ts">
const { ui } = useCvData()

useHead({
  title: `${ui.value?.nav?.experience}`,
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
      <NuxtLink :to="$localePath('projects')">
        <BaseButtonNav label="Proyectos" />
      </NuxtLink>
    </aside>
  </main>
</template>

<style lang="scss" scoped>
.experience-page {
  @include main.flex();
  width: 100%;
  min-height: 80dvh;
  box-sizing: border-box;
  z-index: 1;
  @include main.responsive(50rem) {
    @include main.flex(column);
  }

  &__bg {
    @include main.backgroundImage();
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

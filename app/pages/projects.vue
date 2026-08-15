<script setup lang="ts">
const { cv, ui } = useCvData()
useHead({
  title: `${ui.value?.nav?.projects}`,

  meta: [
    {
      name: 'description',
      content: () => cv.value?.basics?.summary || `${ui.value?.seo?.default_description}`,
    },
    {
      property: 'og:title',
      content: () => `Porfolio de ${cv.value?.basics?.name || 'Cristhian'}`,
    },
  ],
})
</script>

<template>
  <main class="proyect-page">
    <NuxtImg
      src="/fondo-proyects.webp"
      alt="Fondo decorativo de la sección experiencia"
      class="proyect-page__bg"
      loading="lazy"
    />
    <aside class="proyect-page__nav proyect-page__nav--prev">
      <NuxtLink :to="$localePath('experiencia')">
        <BaseButtonNav :label="ui.nav.experience" />
      </NuxtLink>
    </aside>
    <section class="proyect-page__content" />
    <aside class="proyect-page__nav proyect-page__nav--next">
      <NuxtLink :to="$localePath('contact')">
        <BaseButtonNav :label="ui.nav.contact" />
      </NuxtLink>
    </aside>
  </main>
</template>

<style lang="scss" scoped>
.proyect-page {
  padding: 1rem;
  width: 100%;
  min-height: 80vh;
  @include main.flex($justify: space-between, $gap: 1rem);
  z-index: 1;
  &__bg {
    @include main.backgroundImage();
  }
  &__content {
    @include main.flex();
    width: 100%;
    height: 100%;
  }
}
</style>

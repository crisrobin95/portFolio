<script setup lang="ts">
const { cv, ui } = useCvData()

useHead({
  title: `${ui.value?.page?.home}`,
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: '/fondo-about.webp',
      fetchpriority: 'high',
    },
  ],
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
  <main class="home-page">
    <NuxtImg
      src="/fondo-about.webp"
      loading="eager"
      fetchpriority="high"
      preload
      alt="Imagen de fondo para la sección Acerca de mí"
      class="home-page__bg"
    />
    <About class="home-page__about" />
    <aside class="home-page__actions">
      <NuxtLink :to="$localePath('habilidades')">
        <BaseButtonNav :label="ui?.nav?.skills" />
      </NuxtLink>
    </aside>
  </main>
</template>

<style lang="scss" scoped>
.home-page {
  @include main.flex($gap: 0rem);
  min-height: 80dvh;
  max-width: 120rem;
  width: 100%;
  z-index: 1;
  @include main.responsive(50rem) {
    @include main.flex(column);
  }
  &__bg {
    @include main.backgroundImage();
  }

  &__actions {
    margin-right: 1rem;
    @include main.responsive(50rem) {
      position: initial;
      @include main.flex(column, $wrap: wrap, $gap: 1rem);
    }
  }
}
</style>

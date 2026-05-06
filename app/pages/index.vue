<script setup lang="ts">
const { cv, ui } = useCvData()
const localePath = useLocalePath()

useHead({
  title: () =>
    cv.value?.basics?.name
      ? `${cv.value.basics.name} | ${ui.value?.page?.home}`
      : 'Cargando...',
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
  <div class="home-page">
    <NuxtImg
      src="/fondo-about.jpg"
      alt="Imagen de fondo para la sección Acerca de mí"
      class="home-page__background-img"
    />
    <About class="home-page__about" />
    <aside class="home-page__actions">
      <NuxtLink :to="$localePath('habilidades')">
        <BaseButtonNav :label="ui?.nav?.skills" />
      </NuxtLink>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  @include main.flex(column, $gap: 1rem);
  position: relative;
  max-width: 120rem;
  width: 100%;
  &__background-img {
    position: absolute;
    width: 99%;
    height: 80dvh;
    opacity: 80%;
  }

  &__actions {
    position: absolute;
    right: 1.5rem;
    z-index: 999;
    @include main.responsive(50rem) {
      position: initial;
      @include main.flex(column, $wrap: wrap, $gap: 1rem);
    }
  }
}
</style>

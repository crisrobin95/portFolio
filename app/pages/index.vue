<script setup lang="ts">
const { cv } = useCvData()
useHead({
  title: () =>
    cv.value?.basics?.name ? `${cv.value.basics.name} | Inicio` : 'Cargando...',
  meta: [
    {
      name: 'description',
      content: () => cv.value?.basics?.summary || 'Bienvenid@ a mi porfolio profesional.',
    },
    {
      property: 'og:title',
      content: () => `Porfolio de ${cv.value?.basics?.name || 'Cristhian'}`,
    },
  ],
})
</script>
<template>
  <div class="contenedor-index">
    <About />
    <aside class="actions">
      <NuxtLink to="/habilidades">
        <BottonNext label="Habilidades" />
      </NuxtLink>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.contenedor-index {
  @include main.flex(column, $gap: 1rem);
  position: relative;
  max-width: 120rem;
  width: 100%;
}
.actions {
  position: absolute;
  right: 1.5rem;
  z-index: 999;
  @include main.responsive(50rem) {
    position: initial;
    @include main.flex(column, $wrap: wrap, $gap: 1rem);
  }
}
@include main.responsive();
</style>

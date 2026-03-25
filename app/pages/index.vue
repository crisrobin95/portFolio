<script setup lang="ts">
const { cv } = useCvData()
useHead({
  title: 'Inicio',
  meta: [
    {
      name: 'description',
      content:
        'Bienvenid@ a mi portfolio profesional. Conoce mis habilidades y proyectos',
    },
    {
      property: 'og:title',
      content: 'Porfolio de ' + (cv.value?.basics.name || 'Usuario'),
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

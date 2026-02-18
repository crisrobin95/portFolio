<script setup>
useHead({
  title: 'Inicio',
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
.contenedor-index{
  max-width: 120rem;
  
}
.actions {
  position: fixed;
  right: 1rem;
  @include main.flex();
  z-index: 999;
  @include main.responsive(50rem) {
    position: initial;
    @include main.flex(column, $wrap: wrap, $gap: 1rem);
  }
}

@include main.responsive();
</style>

<script setup>
useHead({
  title: 'Inicio',
})
</script>
<template>
  <div>
    <About />
    <aside class="actions">
      <NuxtLink to="/habilidades">
        <BottonNext label="Habilidades" />
      </NuxtLink>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.actions {
  position: fixed;
  margin: 1rem;
  right: 1rem;
  bottom: 15rem;
  display: flex;
  z-index: 999;
  @include main.responsive(50rem) {
    position: initial;
    @include main.flex(column, $wrap: wrap, $gap: 1rem);
  }
}

@include main.responsive();
</style>

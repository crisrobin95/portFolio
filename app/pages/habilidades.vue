<script setup lang="ts">
useHead({
  title: 'Habilidades',
})
</script>
<template>
  <main>
    <img src="../assets/fondo-habilidades.webp" alt="" />
    <aside class="button-prev">
      <NuxtLink to="/experiencia">
        <BottonNext label="Experiencia" />
      </NuxtLink>
    </aside>
    <section class="card">
      <CardSkils />
    </section>
    <aside class="button-next">
      <NuxtLink to="/">
        <BottonNext label="Sobre Mí" />
      </NuxtLink>
    </aside>
  </main>
</template>

<style scoped lang="scss">
img {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 88vh;
}

.card {
  @include main.flex();
}

.button-prev {
  position: fixed;
  margin: 1rem;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  z-index: 999;
}

.button-next {
  position: fixed;
  margin: 1rem;
  bottom: 1rem;
  display: flex;
  z-index: 999;
}
</style>

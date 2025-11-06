<script setup lang="ts">
useHead({
  title: 'Habilidades',
})
</script>
<template>
  <img src="../assets/fondo-habilidades.webp" alt="" />
  <main>
    <div class="button-prev">
      <NuxtLink to="/experiencia">
        <BottonNext label="Experiencia" />
      </NuxtLink>
    </div>
    <div class="button-next">
      <NuxtLink to="/">
        <BottonNext label="Sobre Mí" />
      </NuxtLink>
    </div>
  </main>
</template>

<style scoped lang="scss">
img {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 90vh;
}

.button-prev {
  position: fixed;
  margin: 1rem;
  right: 1rem;
  bottom: 15rem;
  display: flex;
  z-index: 999;
}

.button-next {
  position: fixed;
  margin: 1rem;
  bottom: 15rem;
  display: flex;
  z-index: 999;
}
</style>

<script setup lang="ts">
import Javascript from '~/assets/icons/javascript.vue'
import BottonNext from '~/components/BottonNext.vue'
</script>
<template>
  <img src="../assets/fondo-habilidades.webp" alt="" />
  <main>
    <div>
      <NuxtLink to="/">
        <BottonNext label="Sobre Mí" />
      </NuxtLink>
      <NuxtLink to="/experiencia">
        <BottonNext label="Experiencia" />
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
</style>

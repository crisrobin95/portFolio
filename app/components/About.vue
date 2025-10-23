<script setup lang="ts">
import cvData from '../locales/cv.json'
import type { Root } from '../types/cv'
import fondo from '~/assets/fondo-about.jpg'

const cv: Root = cvData
const subTitulo = 'Bienvenido a mi CV Digital'
</script>
<template>
  <img :src="fondo" alt="" />
  <section>
    <header>
      <h1>Sobre Mí</h1>
      <h3>{{ subTitulo }}</h3>
    </header>
    <p>{{ cv.basics.summary }}</p>
  </section>
</template>
<style lang="scss" scoped>
section {
  @include main.flex(column, $gap: 3rem);
  box-sizing: border-box;
  padding: 1rem;
}
header {
  @include main.flex(column, $gap: 2rem);
}
img {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 90vh;
  border: solid 1rem black;
}
h1 {
  font-family: 'Courier New', Courier, monospace;
  font-size: 4rem;
  padding-top: 1rem;
  text-align: center;
}
h3 {
  text-decoration: underline solid black;
}
p {
  background: rgba(0, 0, 0, 0.647);
  color: white;
  padding: 5rem;
  text-align: justify;
  width: 50rem;
  border-radius: 1rem;
  font-size: 1.2rem;
}
</style>

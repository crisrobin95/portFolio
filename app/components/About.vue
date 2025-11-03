<script setup>
import { ref } from 'vue'
import cvData from '../locales/cv.json'
import fondo from '~/assets/fondo-about.jpg'

const cv = cvData
const subTitulo = 'Bienvenido a mi CV Digital'

const showParagraph = ref(false)
function toggleParagraph() {
  showParagraph.value = !showParagraph.value
}
</script>

<template>
  <img :src="fondo" alt="" />
  <section>
    <header>
      <h1>Sobre Mí</h1>
      <h3
        @click="toggleParagraph"
        role="button"
        tabindex="0"
        @keydown.enter.prevent="toggleParagraph"
        @keydown.space.prevent="toggleParagraph"
      >
        {{ subTitulo }}
      </h3>
    </header>

    <transition name="fade">
      <p v-if="showParagraph">{{ cv.basics.summary }}</p>
    </transition>
  </section>
</template>

<style lang="scss" scoped>
section {
  @include main.flex(column, $gap: 2rem);
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
  background-color: rgba(0, 0, 0, 0.684);
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  user-select: none;
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

/* transición para mostrar/ocultar el párrafo */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 250ms ease,
    transform 250ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
// ...existing code...

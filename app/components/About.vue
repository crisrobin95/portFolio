<script setup lang="ts">
import { ref } from 'vue'

import fondo from '~/assets/fondo-about.jpg'

const { cv } = useCvData()
const subTitulo = 'Bienvenid@ a mi Porfolio'

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
  margin-top: 1rem;
  padding: 1rem;
}
header {
  @include main.flex(column, $gap: 2rem);
}
img {
  position: absolute;
  object-fit: cover;
  z-index: -1;
  width: 100%;
  height: 85%;
  border: solid 4px black;
  // transition:
  //   height 0.5s ease-in-out,
  //   width 0.5s ease-in-out;
}
// .img-expanded {
//   height: 125dvh;
// }
h1 {
  font-family: 'Courier New', Courier, monospace;
  font-size: 3rem;
  text-align: center;
}
h3 {
  text-decoration: underline solid black;
  background-color: rgba(0, 0, 0, 0.684);
  padding: 0.5rem;
  border-radius: 1rem;
  cursor: pointer;
  user-select: none;
}
p {
  background: rgba(0, 0, 0, 0.647);
  color: white;
  margin-top: 3rem;
  padding: 1rem;
  text-align: justify;
  width: auto;
  max-width: 50rem;
  border-radius: 1rem;
  font-size: 1.2rem;

  @include main.responsive(50rem) {
    width: 30rem;
  }
  @include main.responsive(35rem) {
    width: 20rem;
  }
}

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

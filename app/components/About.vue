<script setup lang="ts">
const { cv } = useCvData()

const showParagraph = ref(false)
function toggleParagraph() {
  showParagraph.value = !showParagraph.value
}

let timer: ReturnType<typeof setTimeout>
onMounted(() => {
  timer = setTimeout(() => {
    showParagraph.value = true
  }, 1000)
})
onUnmounted(() => clearTimeout(timer))
</script>

<template>
  <section class="section-about">
    <header>
      <h1>{{ cv?.basics?.name }}</h1>
      <button
        :aria-label="
          showParagraph
            ? 'Esconder texto de introducción'
            : 'Mostrar texto de introducción'
        "
        type="button"
        class="boton-esconder"
        @click="toggleParagraph"
        tabindex="0"
        @keydown.enter.prevent="toggleParagraph"
        @keydown.space.prevent="toggleParagraph"
      >
        {{ $t('ui.title_about') }}
      </button>
    </header>

    <transition name="fade">
      <p v-if="showParagraph && cv?.basics?.summary" class="text-summary">
        {{ cv.basics.summary }}
      </p>
    </transition>
  </section>
</template>

<style lang="scss" scoped>
.section-about {
  position: relative;
  @include main.flex(column, $gap: 2rem);
  width: 100%;
  box-sizing: border-box;
  margin-top: 1rem;
  max-width: 120rem;
  z-index: 1;
}
header {
  @include main.flex(column, $gap: 2rem);
}

h1 {
  font-family: 'Courier New', Courier, monospace;
  font-size: 3rem;
  text-align: center;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.684);
  border-radius: 1rem;
}

.text-summary {
  background: rgba(0, 0, 0, 0.647);
  color: white;
  margin-top: 3rem;
  text-align: justify;
  width: auto;
  max-width: 50rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  padding: 0.5rem;
  @include main.responsive(50rem) {
    width: 30rem;
  }
  @include main.responsive(35rem) {
    width: 20rem;
  }
}
.boton-esconder {
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 1rem;
  padding: 0.5rem;
  background: rgba(7, 7, 7, 0.647);

  &:hover {
    background: var(--c-white);
    color: var(--c-primary);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 1000ms ease,
    transform 1000ms ease;
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

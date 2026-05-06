<script setup lang="ts">
const { cv, ui } = useCvData()

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
  <section class="about" aria-labelledby="about-title">
    <header class="about__header">
      <h1 id="about-title" class="about__title">{{ cv?.basics?.name }}</h1>

      <button
        type="button"
        class="about__button-toggle"
        :aria-label="showParagraph ? 'Esconder introducción' : 'Mostrar introducción'"
        @click="toggleParagraph"
      >
        {{ ui.static.title_about }}
      </button>
    </header>

    <transition name="fade">
      <div v-if="showParagraph && cv?.basics?.summary" class="about__content">
        <p class="about__summary">
          {{ cv.basics.summary }}
        </p>
      </div>
    </transition>
  </section>
</template>

<style lang="scss" scoped>
.about {
  position: relative;
  @include main.flex(column, $gap: 2rem);
  width: 100%;
  box-sizing: border-box;
  margin-top: 1rem;
  max-width: 120rem;

  &__header {
    @include main.flex(column, $gap: 2rem);
  }
  &__title {
    font-family: 'Courier New', Courier, monospace;
    font-size: 3rem;
    text-align: center;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.684);
    border-radius: 1rem;
  }
  &__button-toggle {
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
  &__content {
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

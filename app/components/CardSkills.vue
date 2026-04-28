<script setup lang="ts">
import ArrowLeft from '~/assets/icons/ArrowLeft.vue'
import ArrowRigth from '~/assets/icons/ArrowRigth.vue'

const { cv } = useCvData()

const skillsList = computed(() => cv.value?.skills || [])

const activeIndex = ref(0)

function next() {
  const total = skillsList.value.length
  if (total > 0) {
    activeIndex.value = (activeIndex.value + 1) % total
  }
}

function prev() {
  const total = skillsList.value.length
  if (total > 0) {
    activeIndex.value = (activeIndex.value - 1 + total) % total
  }
}
const radius = 450

function getStyle(i: number | string) {
  return calculateRouletteStyle(
    Number(i),
    activeIndex.value,
    skillsList.value.length,
    radius,
  )
}
useKeyboardNav(next, prev)
</script>

<template>
  <div class="roulette-container">
    <ul class="roulette">
      <li
        v-for="(skill, i) in skillsList"
        :key="skill.name"
        class="skill-card"
        :style="getStyle(i)"
      >
        <div class="head">
          <h3 class="head__title">{{ skill.name }}</h3>
          <NuxtImg :src="skill.img" class="icon-leng" />
        </div>
        <div class="conteiner-level">
          <h4 class="conteiner-level__title-level">{{ $t('ui.title_cards-skills') }}</h4>
          <span class="conteiner-level__level">{{ skill?.level }}</span>
        </div>
        <p class="parrafo">{{ skill?.description }}</p>
      </li>
    </ul>

    <div class="controls">
      <button @click="prev" class="controls__buttons">
        <ArrowLeft />
      </button>
      <button @click="next">
        <ArrowRigth />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.roulette-container {
  position: relative;
  margin-top: 10rem;
  perspective: 100.5rem;
  width: 100%;
  max-width: 120rem;
  @include main.flex(column);

  @include main.responsive(50rem) {
    perspective: 1000rem;
    @include main.flex();
  }
}
.head {
  @include main.flex($gap: 1rem);
  margin-bottom: 1rem;
  &__title {
    font-size: 1.3rem;
  }
}
.icon-leng {
  width: 1.875rem;
  border: solid var(--c-white) 0.0625rem;
  padding: 0.0625rem;
  border-radius: 0.6rem;
}
.roulette {
  width: 15rem;
  height: 16.5rem;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.17, 0.67, 0.47, 1.39);
  @include main.responsive(50rem) {
    width: 5rem;
    height: 6rem;
  }
}

.parrafo {
  color: var(--c-white);
  padding: 0.6rem;
  font-size: 0.63rem;
}

.skill-card {
  position: absolute;
  color: var(--c-white);
  background-color: rgb(9, 9, 9);
  padding: 1rem;
  width: 14rem;
  max-width: none;
  min-height: 10rem;
  border-radius: 1rem;
  border: 0.0625rem solid white;
  transition:
    transform 0.8s ease,
    opacity 0.4s ease;
}
.conteiner-level {
  @include main.flex($gap: 0.5rem);

  &__title-level {
    font-size: 1rem;
  }
  &__level {
    font-size: small;
    text-decoration: underline;
    color: aqua;
  }
}
.controls {
  @include main.flex($gap: 15rem, $justify: space-evenly);
  @include main.responsive(50rem) {
    @include main.flex($wrap: wrap);
  }
}

button {
  width: 4rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: #242424;
  color: white;
  border: 0.0625rem solid #444;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}
button:hover {
  background: #333;
}
</style>

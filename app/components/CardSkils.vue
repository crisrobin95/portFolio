<script setup lang="ts">
const { cv } = useCvData()
const skillsList = computed(() => cv.value?.skills || [])

// índice de la carta seleccionada
const activeIndex = ref(0)

function next() {
  activeIndex.value = (activeIndex.value + 1) % skillsList.value.length
}

function prev() {
  activeIndex.value =
    (activeIndex.value - 1 + skillsList.value.length) % skillsList.value.length
}
const radius = 300 // distancia desde el centro

function getStyle(i: number | string) {
  const idx = Number(i)
  const total = skillsList.value.length
  const angle = (360 / total) * (idx - activeIndex.value)

  const isActive = idx === activeIndex.value

  return {
    transform: `
      rotateY(${angle}deg)
      translateZ(${radius}px)
      ${isActive ? 'scale(1.15)' : 'scale(0.85)'}
    `,
    opacity: isActive ? 1 : 0.2,
    zIndex: isActive ? 1 : 0.5,
  }
}
</script>

<template>
  <div class="roulette-container">
    <div class="roulette">
      <div
        v-for="(skill, i) in skillsList"
        :key="skill.name"
        class="skill-card"
        :style="getStyle(i)"
      >
        <div class="head">
          <h3>{{ skill.name }}</h3>
          <NuxtImg :src="skill.img" width="60" />
        </div>
        <p class="parrafo">{{ skill.description }}</p>
      </div>
    </div>

    <div class="controls">
      <button @click="prev">
        <svg viewBox="0 0 24 24" fill="#fff" class="size-6">
          <path
            fill-rule="evenodd"
            d="M10.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L12.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M4.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L6.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button @click="next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.roulette-container {
  position: relative;
  margin-top: 15rem;
  perspective: 62.5rem;
  width: 100%;
  @include main.flex(column);
}
.head {
  @include main.flex($gap: 1rem);
  margin-bottom: 1rem;
}

.roulette {
  width: 15rem;
  height: 16.5rem;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.17, 0.67, 0.47, 1.39);
}
h3 {
  font-size: 0.9rem;
}
.parrafo {
  color: var(--c-withe);
  font-size: 0.5rem;
}

.skill-card {
  position: absolute;
  color: var(--c-withe);
  background-color: rgb(9, 9, 9);
  padding: 1rem;
  width: 14rem;
  max-width: none;
  min-height: 9rem;
  border-radius: 1rem;
  border: 1px solid white;
  transition:
    transform 0.8s ease,
    opacity 0.4s ease;
}

.controls {
  @include main.flex($gap: 1rem);
}

button {
  width: 5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: #242424;
  color: white;
  border: 1px solid #444;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}
button:hover {
  background: #333;
}
</style>

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
const radius = 350 // distancia desde el centro

function getStyle(i: number) {
  const total = skillsList.value.length
  const angle = (360 / total) * (i - activeIndex.value)

  const isActive = i === activeIndex.value

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
      <button @click="prev">⟵</button>
      <button @click="next">⟶</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.roulette-container {
  margin-top: 10rem;
  perspective: 62.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: #242424;
  color: white;
  border: 1px solid #444;
  cursor: pointer;
}
button:hover {
  background: #333;
}
</style>

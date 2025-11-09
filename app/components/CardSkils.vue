<script setup lang="ts">
const { cv } = useCvData()

const skillsList = computed(() => cv.value?.skills || [])
</script>

<template>
  <div>
    <p v-if="!cv">Cargando la lista de habilidades...</p>
    <section v-for="skill in skillsList" :key="skill.name" class="skill-card">
      <h2>{{ skill.name }}</h2>
      <h3>{{ skill.level }}</h3>
      <p>{{ skill.description }}</p>
    </section>
  </div>
</template>

<style scoped lang="scss">
.skill-card {
  @include main.flex(column, $gap: 1rem);
  background-color: rgba(9, 9, 9, 0.584);
  color: var(--c-withe);
  margin-top: 1rem;
  padding: 1rem;
  width: auto;
  max-width: 40rem;
  border-radius: 1rem;
  border: 1px solid white;
}
</style>

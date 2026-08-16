<script setup lang="ts">
import type { Project } from '../types/cv.ts'

const { cv } = useCvData()
const projectsList = computed<Project[]>(() => cv.value?.projects || [])
</script>

<template>
  <section class="projects-grid">
    <div class="projects-grid__container">
      <ProjectCard
        v-for="project in projectsList"
        :key="project.name"
        :project="project"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.projects-grid {
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem 1rem;

  &__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    align-items: stretch;

    @include main.responsive(40rem) {
      grid-template-columns: repeat(1, 1fr);
    }

    @include main.responsive(64rem) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>

<script setup lang="ts">
interface Job {
  startDate: string
  endDate?: string
  position: string
  name: string
  summary: string
  highlights: string[]
  isIT?: boolean
}

defineProps<{ job: Job }>()
</script>

<template>
  <article :class="['experience-card', { 'experience-card--it': job.isIT }]">
    <header class="experience-card__header">
      <time class="experience-card__date">
        {{ job.startDate }} — {{ job.endDate || 'Actual' }}
      </time>
      <h2 class="experience-card__role">{{ job.position }}</h2>
      <h3 class="experience-card__company">{{ job.name }}</h3>
    </header>

    <div class="experience-card__body">
      <p class="experience-card__summary">{{ job.summary }}</p>
      <ul class="experience-card__highlights">
        <li
          v-for="point in job.highlights"
          :key="point"
          class="experience-card__highlight-item"
        >
          {{ point }}
        </li>
      </ul>
    </div>
  </article>
</template>

<style scoped lang="scss">
.experience-card {
  background: rgba(48, 47, 47, 0.945);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(0.3125rem);
  margin: 1rem;
  padding: 0.75rem;
  border-radius: 1.5rem;
  transition: all 0.4s ease;

  &--it {
    border-color: rgb(190, 247, 2);
    box-shadow: 0 0.625rem 1.875rem rgba(0, 0, 0, 0.5);
  }

  &:hover {
    transform: translateY(-0.3125rem);
    background: rgba(0, 0, 0, 0.89);
  }

  &__role {
    color: rgb(233, 247, 37);
    font-size: 1.2rem;
  }

  &__date {
    color: #e6dbdb;
    font-size: 1rem;
    display: block;
    margin-bottom: 0.25rem;
  }

  &__company {
    font-size: 1.1rem;
    color: var(--c-white);
  }

  &__summary {
    font-size: 0.9rem;
    margin: 0.5rem 0;
    line-height: 1.4;
  }

  &__highlights {
    padding: 0 1rem;
    list-style: circle;
  }

  &__highlight-item {
    font-size: 0.85rem;
    color: #ccc;
    padding: 0.1rem 0;
  }
}
</style>

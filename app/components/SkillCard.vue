<script setup lang="ts">
defineProps<{ skill: any; title: string }>()
</script>

<template>
  <article class="skill-card">
    <header class="skill-card__header">
      <h3 class="skill-card__title">{{ skill.name }}</h3>
      <NuxtImg :src="skill.img" class="skill-card__icon" :alt="`Logo de ${skill.name}`" />
    </header>
    <div class="skill-card__level">
      <h4 class="skill-card__level-label">{{ title }}</h4>
      <span class="skill-card__level-value">{{ skill.level }}</span>
    </div>
    <p class="skill-card__description">{{ skill.description }}</p>
  </article>
</template>

<style scoped lang="scss">
.skill-card {
  color: var(--c-white);
  background-color: rgb(9, 9, 9);
  padding: 1rem;
  width: 14rem;
  min-height: 10rem;
  border-radius: 1rem;
  border: 0.0625rem solid white;

  &__header {
    @include main.flex($gap: 1rem);
    margin-bottom: 1rem;
  }

  &__title {
    font-size: 1.3rem;
  }

  &__icon {
    width: 1.875rem;
    border: solid var(--c-white) 0.0625rem;
    padding: 0.0625rem;
    border-radius: 0.6rem;
  }

  &__level {
    @include main.flex($gap: 0.5rem);
    margin-bottom: 0.5rem;

    &-label {
      font-size: 1rem;
    }

    &-value {
      font-size: small;
      text-decoration: underline;
      color: aqua;
    }
  }

  &__description {
    color: var(--c-white);
    padding: 0.6rem;
    font-size: 0.63rem;
    text-align: justify;
  }
}
</style>

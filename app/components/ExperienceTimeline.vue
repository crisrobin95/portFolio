<script setup lang="ts">
const { cv } = useCvData()
const jobList = computed(() => cv.value?.work || [])
</script>

<template>
  <section class="experience-timeline">
    <div class="experience-timeline__container">
      <div class="experience-timeline__line" />

      <div
        v-for="(job, i) in jobList"
        :key="i"
        :class="[
          'experience-timeline__item',
          { 'experience-timeline__item--right': i % 2 !== 0 },
        ]"
      >
        <div
          :class="[
            'experience-timeline__dot',
            { 'experience-timeline__dot--it': job.isIT },
          ]"
          aria-hidden="true"
        />

        <ExperienceCard :job="job" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.experience-timeline {
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;

  &__container {
    position: relative;
    padding: 2rem 0;
  }

  &__line {
    position: absolute;
    left: 50%;
    width: 0.125rem;
    height: 80%;
    background: linear-gradient(to bottom, transparent, #fff, transparent);
    box-shadow: 0 0 0.625rem rgba(255, 255, 255, 0.2);
    transform: translateX(-50%);

    @include main.responsive(50rem) {
      left: 0;
    }
  }

  &__item {
    width: 50%;
    position: relative;
    @include main.flex($justify: flex-end);

    &--right {
      margin-left: 50%;
      justify-content: flex-start;

      @include main.responsive(50rem) {
        margin-left: 0;
      }
    }

    @include main.responsive(50rem) {
      width: 100%;
      justify-content: flex-start;
      padding-left: 2rem;
    }
  }

  &__dot {
    position: absolute;
    top: 2.5rem;
    right: -0.55rem;
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
    background-color: #ffffff;
    z-index: 10;

    .experience-timeline__item--right & {
      left: -0.55rem;
      right: auto;
    }

    &--it {
      background-color: #ffffff;
      box-shadow:
        0 0 0.75rem var(--c-white),
        0 0 1.25rem var(--c-primary);
    }

    @include main.responsive(50rem) {
      left: -0.55rem;
      right: auto;
    }
  }
}
</style>

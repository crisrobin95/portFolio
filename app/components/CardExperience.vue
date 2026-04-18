<script setup lang="ts">
const { cv } = useCvData()
const jobList = computed(() => cv.value?.work || [])
</script>

<template>
  <section class="timeline-section">
    <div class="timeline-container">
      <div class="timeline-line"></div>

      <div
        v-for="(job, i) in jobList"
        :key="i"
        class="timeline-item"
        :class="{ 'is-right': i % 2 !== 0 }"
      >
        <div class="timeline-dot" :class="{ 'dot-it': job.isIT }"></div>

        <article class="experience-card" :class="{ 'card-it': job.isIT }">
          <header class="header">
            <span class="date">{{ job.startDate }} — {{ job.endDate || 'Actual' }}</span>
            <h2 class="role">{{ job.position }}</h2>
            <h3 class="company">{{ job.name }}</h3>
          </header>

          <div class="body">
            <p class="summary">{{ job.summary }}</p>
            <ul class="highlights">
              <li v-for="point in job.highlights" :key="point">{{ point }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.timeline-section {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  background-color: transparent;
}

.timeline-container {
  position: relative;
  max-width: 70rem;
  margin: 0 auto;
  height: auto;
}

.timeline-line {
  position: absolute;
  left: 50%;
  width: 0.125rem;
  height: 70dvh;
  background: linear-gradient(to bottom, transparent, #fff, transparent);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  transform: translateX(-50%);
  @include main.responsive(50rem) {
    left: 0;
  }
}
.timeline-dot {
  position: absolute;
  top: 2rem;
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 50%;
  z-index: 10;
  background-color: #ffffff;
  left: 100%;
  transform: translateX(-50%);
  .is-right & {
    left: 0%;
    transform: translateX(-50%);
  }
  &.dot-it {
    background-color: var(--c-white, white);
    box-shadow:
      0 0 0.75rem var(--c-white),
      0 0 1.25rem var(--c-primary);
  }
  @include main.responsive(50rem) {
    left: 0;
    transform: translateX(-50%);
  }
}

.timeline-item {
  width: 50%;
  padding: 0.5rem;
  position: relative;
  @include main.flex($justify: flex-end);
  &.is-right {
    margin-left: 50%;
    justify-content: flex-start;
    @include main.responsive(50rem) {
      margin-left: 0;
    }
  }

  @include main.responsive(50rem) {
    width: 100%;
    justify-content: flex-start;
    padding-left: 3rem;
  }
}

.experience-card {
  background: rgba(48, 47, 47, 0.945);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  margin: 1rem;
  padding: 1rem;
  border-radius: 1.5rem;
  transition: all 0.4s ease;
  &.card-it {
    border-color: rgba(190, 247, 2, 0.3);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.06);
  }
}
.role {
  color: rgb(233, 247, 37);
  font-size: 1.5rem;
}
.date {
  color: #e6dbdb;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
}
.highlights {
  padding: 1rem;
  li {
    font-size: 0.9rem;
    color: #ccc;
    padding: 0.0625rem;
    list-style: circle;
  }
}
</style>

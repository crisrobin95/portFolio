<script setup lang="ts">
import type { Project } from '../types/cv.ts'
const { ui } = useCvData()

defineProps<{
  project: Project
}>()
</script>

<template>
  <article :class="['project-card', { 'project-card--featured': project.featured }]">
    <div class="project-card__image-wrapper">
      <iframe
        v-if="project.demo"
        :src="project.demo"
        title="Previsualización del proyecto"
        class="project-card__preview-frame"
        loading="lazy"
        tabindex="-1"
        aria-hidden="true"
      />
      <NuxtImg
        v-else
        src="/placeholder-project.webp"
        :alt="`Captura de pantalla del proyecto ${project.name}`"
        class="project-card__image"
        loading="lazy"
      />
    </div>

    <div class="project-card__content">
      <header class="project-card__header">
        <h2 class="project-card__title">{{ project.name }}</h2>
      </header>

      <p class="project-card__description">
        {{ project.description }}
      </p>

      <ul class="project-card__tech-list" aria-label="Aspectos destacados del proyecto">
        <li
          v-for="highlight in project.highlights"
          :key="highlight"
          class="project-card__tech-item"
        >
          {{ highlight }}
        </li>
      </ul>
      <footer class="project-card__footer">
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card__link project-card__link--demo"
        >
          {{ ui.static.viewCode }}
        </a>
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card__link project-card__link--demo"
        >
          {{ ui.static.viewDemo }}
        </a>
      </footer>
    </div>
  </article>
</template>

<style scoped lang="scss">
.project-card {
  background: rgba(20, 20, 20, 0.85);
  border: 0.0625rem solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(0.5rem);
  border-radius: 1rem;
  overflow: hidden;
  transition:
    transform 0.4s ease,
    border-color 0.4s ease,
    box-shadow 0.4s ease;
  @include main.flex(column);
  width: 100%;
  height: 100%;

  &--featured {
    border-color: rgb(29, 61, 205);
    box-shadow: 0 0 1rem rgb(188, 234, 234);
    background: rgba(20, 30, 35, 0.9);
  }

  &:hover {
    transform: translateY(-0.5rem);
    border-color: rgb(190, 247, 2);
    box-shadow:
      0 0.625rem 2rem rgba(0, 0, 0, 0.7),
      0 0 1rem rgba(190, 247, 2, 0.2);
  }
  &__preview-frame {
    width: 400%;
    height: 50rem;
    padding: 1rem;
    border: none;
    transform: scale(0.25);
    transform-origin: top left;
    pointer-events: none;
    user-select: none;
    border-radius: 5rem;
  }

  &__image-wrapper {
    width: 100%;
    height: 12rem;
    overflow: hidden;
    position: relative;
    border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.05);
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);

    .project-card:hover & {
      transform: scale(1.08);
    }
  }

  &__content {
    padding: 1.25rem;
    @include main.flex(column, $gap: 1rem, $align: flex-start);
    flex-grow: 1;
  }

  &__header {
    width: 100%;
  }

  &__title {
    font-size: 1.4rem;
    color: var(--c-white);
    font-weight: 700;
    letter-spacing: 0.05em;

    .project-card:hover & {
      color: rgb(233, 247, 37);
    }
  }

  &__description {
    font-size: 0.9rem;
    color: #b3b3b3;
    line-height: 1.5;
    text-align: justify;
    flex-grow: 1;
  }

  &__tech-list {
    @include main.flex($wrap: wrap, $gap: 0.5rem);
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__tech-item {
    font-size: 0.75rem;
    padding: 0.25rem 0.6rem;
    background: rgba(255, 255, 255, 0.05);
    border: 0.0625rem solid rgba(255, 255, 255, 0.1);
    color: #e0e0e0;
    border-radius: 2rem;
  }

  &__footer {
    width: 100%;
    @include main.flex($justify: flex-end, $gap: 1rem);
    margin-top: 0.5rem;
  }

  &__link {
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    transition:
      background 0.3s ease,
      color 0.3s ease;
    text-align: center;

    &--demo {
      background: #242424;
      color: rgb(190, 247, 2);
      border: 0.0625rem solid rgba(190, 247, 2, 0.3);
      width: 100%;

      &:hover {
        background: rgb(190, 247, 2);
        color: #000;
        box-shadow: 0 0 0.8rem rgba(190, 247, 2, 0.4);
      }
    }
  }
}
</style>

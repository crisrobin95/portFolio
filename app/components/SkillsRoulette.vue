<script setup lang="ts">
import ArrowLeft from '../assets/icons/ArrowLeft'
import ArrowRigth from '../assets/icons/ArrowRigth'
const { cv, ui } = useCvData()
const skillsList = computed(() => cv.value?.skills || [])

const { activeIndex, next, prev, getStyle } = useRoulette(skillsList)
</script>

<template>
  <div class="skills-roulette">
    <ul class="skills-roulette__list">
      <li
        v-for="(skill, i) in skillsList"
        :key="skill.name"
        :class="[
          'skills-roulette__item',
          { 'skills-roulette__item--active': i === activeIndex },
        ]"
        :style="getStyle(i)"
      >
        <SkillCard :skill="skill" :title="ui.static.title_cards_skills" />
      </li>
    </ul>

    <nav class="skills-roulette__nav">
      <button class="skills-roulette__control" @click="prev"><ArrowLeft /></button>
      <button class="skills-roulette__control" @click="next"><ArrowRigth /></button>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.skills-roulette {
  position: relative;
  margin-top: 5rem;
  perspective: 100.5rem;
  width: 100%;
  max-width: 120rem;
  @include main.flex(column);

  @include main.responsive(50rem) {
    perspective: none;
    margin-top: 2rem;
  }

  &__list {
    width: 15rem;
    height: 16.5rem;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.17, 0.67, 0.47, 1.39);
    list-style: none;

    @include main.responsive(50rem) {
      transform-style: flat;
      transform: none;
      @include main.flex($justify: center);
      width: 100%;
      height: auto;
    }
  }

  &__item {
    position: absolute;
    top: 0;
    left: 0;
    transition:
      transform 0.8s ease,
      opacity 0.4s ease;

    @include main.responsive(50rem) {
      position: relative;
      transform: scale(0.9);
      left: auto;
      opacity: 0;
      display: none;

      &--active {
        display: block;
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  &__nav {
    @include main.flex($gap: 15rem, $justify: space-evenly);
    margin-top: 2rem;

    @include main.responsive(50rem) {
      margin-top: 1rem;
      @include main.flex($gap: 0.6rem);
    }
  }

  &__control {
    width: 4rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background: #242424;
    color: white;
    border: 0.0625rem solid #444;
    cursor: pointer;

    &:hover {
      background: #333;
    }
  }
}
</style>

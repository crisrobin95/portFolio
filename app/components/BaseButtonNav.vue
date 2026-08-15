<script setup lang="ts">
defineProps<{
  label?: string
  type?: 'button' | 'submit' | 'reset'
  modifier?: string
}>()
</script>
<template>
  <button
    :class="['base-button-nav', modifier ? `base-button-nav--${modifier}` : '']"
    :type="type"
  >
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
.base-button-nav {
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 1rem;
  transition: all 0.3s ease;
  transform: scale(1);

  background: var(--c-fondoSecond, #333);
  color: white;
  border: 0.1875rem solid black;

  &:hover {
    background-color: rgb(87, 87, 89);
    transform: scale(0.95);
  }

  &:active {
    transform: scale(0.9);
  }

  &:focus-visible {
    outline: 0.125rem solid var(--c-primary);
    outline-offset: 0.125rem;
  }

  &--outline {
    background: transparent;
    color: black;
    border: 0.1875rem solid var(--c-fondoSecond);

    &:hover {
      background: var(--c-fondoSecond);
      color: white;
    }
  }
}
</style>

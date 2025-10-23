<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

const props = withDefaults(
  defineProps<{
    label?: string
  }>(),
  {
    label: 'Siguiente',
  },
)
</script>
<template>
  <button class="boton" type="button">{{ props.label }}</button>
</template>

<style scoped lang="scss">
.boton {
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  border-radius: 1 rem;
  background: var(--c-fondoSecond);
  color: white;
  border: 3px solid black;
  cursor: pointer;
  font-weight: 600;
  transform: scale(1);
  transition: transform 0.3s ease;

  &:hover {
    background-color: rgb(87, 87, 89);
    transform: scale(0.95);
  }
}
</style>

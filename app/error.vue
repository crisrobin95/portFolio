<script setup lang="ts">
interface NuxtError {
  url: string
  statusCode: number
  statusMessage: string
  message: string
  description: string
  data?: any
}

const props = defineProps<{
  error: NuxtError
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <main v-if="error" class="error-layout">
    <h1 class="error-code">{{ error.statusCode }}</h1>
    <h2 class="error-message">
      {{
        error.statusCode === 404
          ? 'Página no encontrada o trabajando en ella'
          : 'Algo salió mal'
      }}
    </h2>
    <NuxtImg src="./cat-computed.gif" />
    <button @click="handleError" class="back-home">Volver al inicio</button>
  </main>
</template>

<style scoped lang="scss">
.error-layout {
  height: 100dvh;
  background-color: #090909;
  @include main.flex(column);
  color: white;
  text-align: center;
}

.error-code {
  margin: 0.0625rem;
}
.error-message {
  margin: 1rem;
}
.back-home {
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  background: transparent;
  border: 0.0625rem solid white;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: black;
  }
}
</style>

<script setup lang="ts">
const localePath = useLocalePath()
useHead({
  title: 'Experiencia',
  meta: [
    {
      name: 'description',
      content: 'Aquí encontraras mí experiencia laboral',
    },
  ],
})
</script>

<template>
  <main class="container-experiencia">
    <NuxtImg
      src="/fondo-experiencia.webp"
      alt="Fondo sección experiencia"
      class="background-img"
      loading="lazy"
    />

    <section class="content">
      <CardExperience />
    </section>

    <aside class="actions">
      <NuxtLink :to="$localePath('index')">
        <BottonNext label="Proyectos" class="botton-next" />
      </NuxtLink>
    </aside>
  </main>
</template>

<style lang="scss" scoped>
.container-experiencia {
  position: relative;
  justify-content: center;
  width: 99%;
  min-height: 100dvh;
  @include main.flex();
  padding: 2rem 1rem;
  overflow-x: hidden;
  @include main.responsive(50rem) {
    @include main.flex(column);
  }
}

.background-img {
  position: absolute;
  width: 100%;
  height: 100dvh;
  object-fit: cover;
  z-index: 0;
  opacity: 0.3;
}

.content {
  width: 100%;
  flex: 1;
}

.actions {
  margin-top: 1rem;
  z-index: 10;
}
</style>

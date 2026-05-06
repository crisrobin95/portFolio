<script setup lang="ts">
const localePath = useLocalePath()
const { ui } = useCvData()
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
    <aside class="actions">
      <NuxtLink :to="$localePath('habilidades')">
        <BaseButtonNav :label="ui.nav.skills" class="botton-next" />
      </NuxtLink>
    </aside>

    <section class="content">
      <CardExperience />
    </section>

    <aside class="actions">
      <NuxtLink :to="$localePath('index')">
        <BaseButtonNav label="Proyectos" class="botton-next" />
      </NuxtLink>
    </aside>
  </main>
</template>

<style lang="scss" scoped>
.container-experiencia {
  justify-content: center;
  width: 100%;
  height: auto;
  min-height: 80vh;
  @include main.flex();
  padding: 1rem;
  @include main.responsive(50rem) {
    @include main.flex(column);
  }
}

.background-img {
  position: absolute;
  width: 99%;
  height: 80dvh;
  opacity: 80%;
  @include main.responsive(50rem) {
    height: 100%;
  }
}

.content {
  width: 100%;
  @include main.flex();
  flex: 1;
}

.actions {
  margin: 1rem;
  z-index: 10;
}
</style>

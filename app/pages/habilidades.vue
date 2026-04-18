<script setup lang="ts">
useHead({
  title: 'Habilidades',
  meta: [
    {
      name: 'description',
      content: 'Explora mi stack tecnológico: Vue, Nuxt, SCSS y más.',
    },
  ],
})
const titlePage = 'Habilidades Técnicas y Stack Tecnológico de Cristhian Quiñonez'
</script>
<template>
  <main class="container-skills">
    <h1 class="sr-only">{{ titlePage }}</h1>
    <NuxtImg
      src="/fondo-habilidades.webp"
      alt="Fondo de sección habilidades"
      class="background-img"
      loading="lazy"
    />
    <aside class="button-prev">
      <NuxtLink to="/">
        <BottonNext label="Sobre mí" />
      </NuxtLink>
    </aside>
    <section class="card">
      <CardSkils />
    </section>
    <aside class="button-next">
      <NuxtLink to="/experiencia">
        <BottonNext label="Experiencia" />
      </NuxtLink>
    </aside>
  </main>
</template>

<style scoped lang="scss">
.container-skills {
  position: relative;
  @include main.flex(column, $gap: 2rem);
  width: 100%;
  box-sizing: border-box;
  max-width: 120rem;
  z-index: 1;

  .background-img {
    padding-top: 1rem;
    position: absolute;
    width: 99%;
    height: 85dvh;
    z-index: -1;
    opacity: 0.8;
  }
}

.card {
  @include main.flex();
}

.button-next {
  position: fixed;
  bottom: 5rem;
  z-index: 999;
  @include main.flex();
  left: 50%;
  transform: translateX(calc(60rem - 100% - 1rem));

  @include main.responsive(120rem) {
    left: auto;
    right: 1rem;
    transform: none;
  }

  @include main.responsive(50rem) {
    position: initial;
    margin: 1rem auto;
  }
}

.button-prev {
  position: fixed;
  bottom: 5rem;
  z-index: 999;
  @include main.flex();
  left: 50%;
  transform: translateX(calc(-60rem + 1rem));

  @media (max-width: 120rem) {
    left: 1rem;
    transform: none;
  }

  @include main.responsive(50rem) {
    position: initial;
    margin: 1rem auto;
  }
}
</style>

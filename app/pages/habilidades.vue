<script setup lang="ts">
const localePath = useLocalePath()
const { cv, ui } = useCvData()
useHead({
  title: () => {
    const name = cv.value?.basics?.name
    const pageName = ui.value?.page?.skills
    return name && pageName ? `${name} | ${pageName}` : 'Habilidades'
  },

  meta: [
    {
      name: 'description',
      content: 'Explora mi stack tecnológico: Vue, Nuxt, SCSS y más.',
    },
  ],
})
</script>
<template>
  <main class="skills-page">
    <h1 class="sr-only">{{ ui.static.title_skills }}</h1>
    <NuxtImg
      src="/fondo-habilidades.webp"
      alt="Fondo de sección habilidades"
      class="skills-page__bg"
      loading="lazy"
    />
    <aside class="skills-page__nav skills-page__nav--prev">
      <NuxtLink :to="$localePath('index')">
        <BaseButtonNav :label="ui?.nav?.about" />
      </NuxtLink>
    </aside>
    <section class="skills-page__content">
      <CardSkills />
    </section>
    <aside class="skills-page__nav skills-page__nav--next">
      <NuxtLink :to="$localePath('experiencia')">
        <BaseButtonNav :label="ui?.nav?.experience" />
      </NuxtLink>
    </aside>
  </main>
</template>

<style scoped lang="scss">
.skills-page {
  @include main.flex(column, $gap: 2rem);
  width: 100%;
  box-sizing: border-box;
  max-width: 120rem;
  z-index: 1;
  &__bg {
    position: absolute;
    width: 99%;
    height: 80dvh;
    opacity: 80%;
  }
  &__content {
    @include main.flex();
  }

  &__nav {
    position: fixed;
    bottom: 5rem;
    z-index: 999;
    @include main.flex();
    &--next {
      left: 50%;
      transform: translateX(calc(60rem - 100% - 1rem));

      @include main.responsive(120rem) {
        left: auto;
        right: 1rem;
        transform: none;
      }
    }
    &--prev {
      left: 50%;
      transform: translateX(calc(-60rem + 1rem));
      @include main.responsive(120rem) {
        left: 1rem;
        transform: none;
      }
    }
    @include main.responsive(50rem) {
      position: initial;
      margin: 1rem auto;
      transform: none;
    }
  }
}
</style>

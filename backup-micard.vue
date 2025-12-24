<script setup lang="ts">
const { cv } = useCvData()

const skillsList = computed(() => cv.value?.skills || [])
</script>

<template>
  <div class="container-card-skils">
    <p v-if="!cv">Cargando la lista de habilidades...</p>
    <section v-for="skill in skillsList" :key="skill.name" class="skill-card">
      <header class="header-card">
        <h2>{{ skill.name }}</h2>
        <NuxtImg
          :src="skill.img"
          :alt="`Imagen de ${skill.name}`"
          width="50"
          height="50"
        />
      </header>
      <p>
        Nivel: <strong>{{ skill.level }}</strong>
      </p>
      <p>{{ skill.description }}</p>
    </section>
  </div>
</template>

<style scoped lang="scss">
.container-card-skils {
  @include main.flex($wrap: wrap, $gap: 1rem);
}
.skill-card {
  @include main.flex(column, $gap: 1rem, $wrap: wrap);
  background-color: rgb(9, 9, 9);
  color: var(--c-withe);
  margin-top: 1rem;
  padding: 1rem;
  width: 15rem;
  max-width: none;
  min-height: 20rem;
  border-radius: 1rem;
  border: 1px solid white;
}
.header-card {
  @include main.flex($gap: 1rem);
}

p {
  color: #b6b4b4;

  justify-content: center;
  text-align: justify;
  width: 100%;
}
</style>

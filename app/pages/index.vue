<script setup></script>
<template>
  <About class="sobre-mi" />
  <aside class="actions">
    <NuxtLink to="/habilidades">
      <BottonNext label="Habilidades" class="boton" />
    </NuxtLink>
  </aside>
</template>

<style lang="scss" scoped>
.actions {
  display: flex;
  justify-content: flex-end;
  width: 95%;
  padding: 0 1rem;
}
</style>

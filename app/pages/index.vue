<script setup></script>
<template>
  <div>
    <About />
    <aside class="actions">
      <NuxtLink to="/habilidades">
        <BottonNext label="Habilidades" />
      </NuxtLink>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.actions {
  display: flex;
  justify-content: flex-end;
  width: 95%;
  padding: 0 1rem;
}
</style>

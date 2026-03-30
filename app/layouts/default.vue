<script setup lang="ts"></script>
<template>
  <div class="layout-container">
    <header class="main-header">
      <Header />
    </header>
    <main id="main-content">
      <NuxtPage />
    </main>
    <footer class="main-footer">
      <p>© 2026 Mi Portfolio</p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.layout-container {
  @include main.flex(column, $gap: 1rem);
}
#main-content {
  @include main.flex(column);
  width: 100%;
  min-height: 80dvh;
}
.main-header {
  width: 100%;
  min-height: 0.5dvh;
  max-width: 120rem;
}

.main-footer {
  @include main.flex;
  width: 100%;
  border-top: solid white 0.2rem;
}
</style>

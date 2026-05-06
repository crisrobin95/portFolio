<script setup lang="ts">
const { ui } = useCvData()
</script>
<template>
  <div class="main-layout">
    <header class="main-layout__header">
      <Header />
    </header>
    <main class="main-layout__main">
      <NuxtPage />
    </main>
    <footer class="main-layout__footer">
      <p class="main-layout__copyright">{{ ui.footer.text_footer }}</p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.main-layout {
  @include main.flex(column, $gap: 1rem);
  min-height: 100dvh;
  &__header {
    width: 100%;
    min-height: 0.5dvh;
    max-width: 120rem;
    margin: 0 auto;
  }
  &__main {
    @include main.flex(column);
    flex: 1;
    width: 100%;
    min-height: 80dvh;
  }
  &__footer {
    @include main.flex;
    width: 100%;
    border-top: solid var(--color-border, white) 0.2rem;

    @include main.responsive(50rem) {
      min-height: 10rem;
    }
  }
  &__copyright {
    font-size: 1.4rem;
    @include main.responsive(50rem) {
      font-size: 1rem;
    }
  }
}
</style>

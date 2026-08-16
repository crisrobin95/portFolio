<script setup lang="ts">
const localePath = useLocalePath()
const { ui } = useCvData()

const isOpen = ref(false)
const navbarRef = ref<HTMLElement | null>(null)

const toggleMenu = () => (isOpen.value = !isOpen.value)
const closeMenu = () => (isOpen.value = false)

const handleClickOutside = (event: MouseEvent) => {
  if (navbarRef.value && !navbarRef.value.contains(event.target as Node)) {
    closeMenu()
  }
}
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const navLinks = computed(() => [
  { name: ui.value?.nav?.about, path: 'index' },
  { name: ui.value?.nav?.skills, path: 'habilidades' },
  { name: ui.value?.nav?.experience, path: 'experiencia' },
  { name: ui.value?.nav?.projects, path: 'projects' },
])
</script>

<template>
  <nav ref="navbarRef" class="navbar" aria-label="Main navigation">
    <button class="navbar__button" :aria-expanded="isOpen" @click="toggleMenu">
      <span :class="['navbar__arrow', { 'navbar__arrow--open': isOpen }]"
        ><Icon name="solar:list-arrow-down-bold" class="navbar__icon"
      /></span>
    </button>

    <Transition name="dropdown">
      <ul v-if="isOpen" class="navbar__list">
        <li v-for="link in navLinks" :key="link.path" class="navbar__item">
          <NuxtLink :to="localePath(link.path)" class="navbar__link" @click="closeMenu">
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </Transition>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  position: relative;
  &__button {
    @include main.flex($gap: 0.5rem);
    background: rgba(255, 255, 255, 0.1);
    border: 0.1rem solid white;
    border-radius: 0.5rem;
    padding: 0.3rem;
    color: white;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(128, 255, 0, 0.2);
      border-color: #80ff00;
    }
  }

  &__arrow {
    font-size: 0.8rem;
    transition: transform 0.3s ease;
    &--open {
      transform: rotate(180deg);
    }
  }
  &__icon {
    color: var(--c-white);
    width: 1.2rem;
    height: 1.2rem;
  }

  &__list {
    position: absolute;
    top: calc(100% + 0.5rem);
    min-width: 15rem;
    background: #1a1a1a;
    border: 0.1rem solid white;
    border-radius: 0.5rem;
    list-style: none;
    padding: 0.5rem 0;
    z-index: 1000;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  }

  &__item {
    width: 100%;
  }

  &__link {
    display: block;
    padding: 0.8rem 1.5rem;
    color: white;
    text-decoration: none;
    text-align: left;
    transition: background 0.2s;

    &:hover,
    &.router-link-active {
      background: rgba(128, 255, 0, 0.6);
      color: black;
    }
  }
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition:
    opacity 0.2s,
    transform 0.2s;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-0.625rem);
}
</style>

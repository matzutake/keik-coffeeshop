<template>
  <div class="wrapper">
    <KHeader style="position: fixed" />
    <RouterView :key="$route.fullPath" />
    <KFooter style="margin-top: auto" />

    <Transition name="slide-right">
      <Navigation v-if="$store.getters.getNav" />
    </Transition>
  </div>
</template>

<script>
import KHeader from '@/components/KHeader.vue'
import KFooter from '@/components/KFooter.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    KHeader,
    KFooter,
    Navigation
  },
  mounted() {
    const loader = document.getElementById('preloader')
    if (loader) {
      loader.parentNode.removeChild(loader)
    }
    window.app_ready = true
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.25s ease;
}
.slide-right-enter-from {
  transform: translateX(100%);
}
.slide-right-enter-to {
  transform: translateX(0);
}
.slide-right-leave-from {
  transform: translateX(0);
}
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>

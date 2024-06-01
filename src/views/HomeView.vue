<template>
  <div class="wrapper">
    <KHeader />
  </div>
</template>

<script>
import KHeader from '@/components/Header.vue'

export default {
  name: 'HomeView',
  components: {
    KHeader
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
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

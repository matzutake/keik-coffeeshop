<template>
  <div class="wrapper">
    <KHeader style="position: fixed" />
    <RouterView :key="$route.fullPath" style="margin-top: 60px" />
    <KFooter style="margin-top: auto" />
  </div>
</template>

<script>
import KHeader from '@/components/KHeader.vue'
import KFooter from '@/components/KFooter.vue'

export default {
  components: {
    KHeader,
    KFooter
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
</style>

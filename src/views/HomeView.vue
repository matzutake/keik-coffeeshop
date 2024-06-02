<template>
  <div class="wrapper">
    <div class="header-wrapper">
      <KHeader />
    </div>
    <div class="block-image"></div>
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
  display: flex;
  flex-direction: column;
}

.header-wrapper {
  padding: 16px;
  display: flex;
  justify-content: center;
  z-index: 2;
}

.block-image {
  background-image: url('@/assets/img/background.jpg');
  height: 800px;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  border-bottom: 8px solid $color-yellow;
}
</style>

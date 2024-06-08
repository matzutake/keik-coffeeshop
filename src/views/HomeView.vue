<template>
  <div class="wrapper">
    <KPreview />
    <KInfo />
    <Contacts />
    <KFooter />
  </div>
</template>

<script>
import KPreview from '@/components/KPreview.vue'
import KInfo from '@/components/KInfo.vue'
import Contacts from '@/components/Contacts.vue'
import KFooter from '@/components/KFooter.vue'

export default {
  name: 'HomeView',
  components: {
    KPreview,
    KInfo,
    Contacts,
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
  @include scrollbar;
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>

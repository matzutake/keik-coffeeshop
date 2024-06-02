<template>
  <div class="wrapper">
    <KHeader />
    <KPreview />
    <KInfo />
    <Contacts />
  </div>
</template>

<script>
import KHeader from '@/components/Header.vue'
import KPreview from '@/components/KPreview.vue'
import KInfo from '@/components/KInfo.vue'
import Contacts from '@/components/Contacts.vue'

export default {
  name: 'HomeView',
  components: {
    KHeader,
    KPreview,
    KInfo,
    Contacts
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
}
</style>

<template>
  <KHeader />
  <RouterView />
</template>

<script>
import KHeader from '@/components/Header.vue'

export default {
  components: {
    KHeader
  }
}
</script>

<style lang="scss" scoped></style>

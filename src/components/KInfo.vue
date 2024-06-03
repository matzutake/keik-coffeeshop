<template>
  <div class="info">
    <InfoBlock />
    <InfoBlock reversed />
    <InfoBlock />
  </div>
</template>

<script>
import InfoBlock from '@/components/InfoBlock.vue'

export default {
  name: 'KInfo',
  components: {
    InfoBlock
  }
}
</script>

<style lang="scss" scoped>
.info {
  background-color: $color-white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 108px 72px;
  border-top: 12px solid $color-yellow;
  gap: 48px;
}
</style>

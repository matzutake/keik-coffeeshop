<template>
  <div class="contacts">
    <NavTitle title="Контакты" />
  </div>
</template>

<script>
import NavTitle from '@/components/NavTitle.vue'

export default {
  components: {
    NavTitle
  }
}
</script>

<style lang="scss" scoped>
.contacts {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: center;
  margin-top: 60px;
  padding: 40px;
}
</style>

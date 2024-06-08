<template>
  <div class="menu-wrapper">
    <div class="menu">
      <MenuRow title="Кофе" />
      <MenuRow title="Холодные напитки" />
      <MenuRow title="Круассаны" />
      <MenuRow title="Десерты" />
    </div>
  </div>
</template>

<script>
import MenuRow from '@/components/MenuRow.vue'
export default {
  components: {
    MenuRow
  }
}
</script>

<style lang="scss" scoped>
.menu-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 100px 0;

  .menu {
    width: 100rem;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
}
</style>

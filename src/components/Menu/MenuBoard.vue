<template>
  <ul class="menu-list">
    <li class="menu-list__item" v-for="(item, i) in 30" :key="i">
      <MenuItem />
    </li>
  </ul>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
  components: { MenuItem }
}
</script>

<style lang="scss" scoped>
.menu-list {
  flex-wrap: wrap;
  display: flex;
  gap: 4%;
  width: 80rem;

  &__item {
    flex: 0 1 22%;
    margin-bottom: 4%;
  }
}
</style>

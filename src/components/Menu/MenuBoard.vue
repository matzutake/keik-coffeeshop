<template>
  <ul class="menu-list">
    <li
      v-show="value === 'all' || item.type === value"
      class="menu-list__item"
      v-for="(item, i) in $store.getters.getMenu"
      :key="i"
    >
      <MenuItem :price="item.price" :title="item.title" :img="item.img" :id="item.id" />
    </li>
  </ul>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
  props: {
    value: {
      type: String,
      default: 'all'
    }
  },
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

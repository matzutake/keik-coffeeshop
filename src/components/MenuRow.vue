<template>
  <div class="row">
    <h1>{{ title }}</h1>
    <hr />
    <div class="items">
      <MenuItem v-for="items in 4" :key="items">
        <div class="image">
          <img src="@/assets/icons/coffee.svg" width="100%" height="100%" style="fill: white" />
        </div>
        <p style="font-size: 20px; font-weight: bold; margin-left: 6px">
          Название продукта
        </p></MenuItem
      >
    </div>
  </div>
</template>

<script>
import MenuItem from '@/components/MenuItem.vue'

export default {
  components: {
    MenuItem
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: column;
  gap: 20px;

  hr {
    width: 100%;
    border: 3px solid #f3f3f3;
    border-radius: 4px;
  }

  h1 {
    font-family: 'Runde-Semibold';
    font-size: 60px;
    color: #666;
  }
}

.items {
  display: flex;
  gap: 60px;
}

.image {
  padding: 60px;
}
</style>

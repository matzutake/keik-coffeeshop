<template>
  <div class="menu">
    <NavTitle title="Наш ассортимент" />

    <div class="filter">
      <div class="filter__wrapper">
        <div class="filter__title">Категория:</div>
        <ul class="filter__categories">
          <li
            v-for="(category, index) in categories"
            :key="index"
            class="filter__category"
            :class="{ active: index === selected }"
            @click="select(index)"
          >
            {{ category.name }}
          </li>
        </ul>
      </div>
    </div>

    <MenuBoard :value="selectedValue" />
  </div>
</template>

<script>
import NavTitle from '@/components/NavTitle.vue'
import MenuBoard from '@/components/Menu/MenuBoard.vue'

export default {
  components: {
    NavTitle,
    MenuBoard
  },
  data() {
    return {
      categories: [
        {
          name: 'Все',
          value: 'all'
        },
        {
          name: 'Напитки',
          value: 'drink'
        },
        {
          name: 'Круассаны',
          value: 'croissant'
        },
        {
          name: 'Выпечка',
          value: 'bakery'
        },
        {
          name: 'Завтраки',
          value: 'breakfast'
        },
        {
          name: 'Салаты',
          value: 'salad'
        },
        {
          name: 'Десерты',
          value: 'desert'
        }
      ],
      selected: 0,
      selectedValue: 'all'
    }
  },
  methods: {
    select(index) {
      this.selected = index
      this.selectedValue = this.categories[index].value
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: 1;
  align-self: center;
  margin-top: 60px;
  padding: 40px;

  .filter {
    display: flex;
    flex-direction: column;

    &__wrapper {
      display: flex;
      gap: 32px;
      align-items: center;
    }

    &__title {
      font-size: 20px;
      font-family: 'Runde-Medium';
    }

    &__categories {
      display: flex;
      gap: 20px;
      align-items: center;
      flex: 1;
    }

    &__category {
      cursor: pointer;
      font-size: 18px;
      border-radius: 12px;
      padding: 6px 16px;
      transition: 200ms;

      &:hover {
        background-color: $color-yellow;
        color: $color-white;
      }

      &.active {
        background-color: $color-yellow;
        color: $color-white;
      }
    }
  }
}
</style>

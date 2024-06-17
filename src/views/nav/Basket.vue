<template>
  <div class="basket">
    <NavTitle title="Ваша корзина" />

    <div class="basket-wrapper">
      <ul class="basket-list">
        <li v-for="(item, i) in Basket" :key="i" class="basket-item">
          <div class="basket-item__img-wrapper">
            <img :src="imgSet(item.img)" class="basket-item__img" />
          </div>

          <div class="basket-item__info">
            <div class="basket-item__info-title">{{ item.title }}</div>
            <div class="basket-item__info-price">{{ item.price }} ₽</div>
          </div>

          <div class="basket-item__count">
            <div class="counter__button" @click="addToBasket(item.id)">+</div>
            <div class="counter__value">{{ getItemCount(item.id) }}</div>
            <div class="counter__button" @click="removeFromBasket(item.id)">-</div>
          </div>
        </li>
      </ul>

      <div class="basket-total">
        <div class="left">
          <div class="basket-total__title">Итого:</div>
          <div class="basket-total__price">{{ $store.state.basketPrice }} ₽</div>
        </div>

        <div class="right">
          <input type="text" class="basket-total__input" placeholder="E-mail" />
          <div class="basket-total__button">Оформить заказ</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTitle from '@/components/NavTitle.vue'
import * as menu from '@/assets/img/menu'

export default {
  components: {
    NavTitle
  },
  computed: {
    Basket() {
      return Array.from(new Set(this.$store.getters.getBasket))
    },
    getItemCount() {
      return (id) => {
        return this.$store.getters.getItemCount(id)
      }
    },
    imgSet() {
      return (img) => {
        return img ? menu[img] : menu['empty']
      }
    }
  },
  methods: {
    addToBasket(id) {
      this.$store.commit('addToBasket', id)
    },
    removeFromBasket(id) {
      this.$store.commit('removeFromBasket', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.basket {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  padding: 40px;
  align-items: center;

  &-wrapper {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 12px;
    gap: 70px;
    width: 1000px;
  }

  &-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &-item {
    display: flex;
    gap: 20px;

    &__img {
      object-fit: cover;
      width: 70%;

      &-wrapper {
        width: 200px;
        height: 250px;
        overflow: hidden;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
      }
    }

    &__info {
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      flex: 1;

      &-title {
        font-size: 28px;
        font-family: 'Runde';
      }

      &-price {
        font-size: 24px;
        font-family: 'Runde-Medium';
        background-color: $color-yellow;
        color: $color-white;
        padding: 4px 8px;
        width: fit-content;
        border-radius: 8px;
      }
    }

    &__count {
      display: flex;
      gap: 12px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 12px;

      .counter__button {
        border: 1px solid $color-border;
        transition: 200ms;
        border-radius: 16px;
        font-size: 20px;
        font-weight: bold;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:hover {
          background-color: $color-yellow;
          color: $color-white;
          border-color: $color-yellow;
        }
      }

      .counter__value {
        font-size: 20px;
      }
    }
  }

  &-total {
    border-top: 1px solid $color-border;
    display: flex;
    padding: 24px 12px;
    gap: 12px;
    align-items: center;
    justify-content: space-between;

    .left {
      display: flex;
      gap: 12px;
      align-items: center;
    }

    .right {
      display: flex;
      gap: 12px;
      align-items: center;
    }

    &__title {
      font-size: 28px;
      font-family: 'Runde';
    }

    &__price {
      font-size: 28px;
      font-family: 'Runde-Medium';
    }

    &__input {
      border: 1px solid $color-border;
      border-radius: 8px;
      padding: 10px 12px;
      outline: none;
      transition: 200ms;
      font-size: 18px;

      &:focus {
        border-color: $color-yellow;
        box-shadow: 4px 4px rgba($color: $color-yellow, $alpha: 0.5);
      }
    }

    &__button {
      border: 1px solid $color-yellow;
      background-color: $color-yellow;
      color: $color-white;
      border-radius: 8px;
      padding: 10px 12px;
      font-size: 18px;
      transition: 200ms;
      cursor: pointer;

      &:hover {
        background-color: $color-white;
        color: $color-yellow;
      }
    }
  }
}
</style>

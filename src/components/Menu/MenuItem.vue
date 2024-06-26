<template>
  <div class="menu__item">
    <div class="menu__item-img-wrapper">
      <img :src="imgSet" class="menu__item-img" />
    </div>

    <div class="menu__item-info">
      <div class="menu__item-info__text">
        <div class="menu__item-title">{{ title }}</div>
        <div class="menu__item-price">{{ price }} ₽</div>
      </div>

      <div class="counter" v-if="inBasket.length">
        <div class="counter__button" @click="removeFromBasket">-</div>
        <div class="counter__value">{{ inBasket.length }}</div>
        <div class="counter__button" @click="addToBasket">+</div>
      </div>

      <div v-if="!inBasket.length" class="add" @click="addToBasket">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 10L15 4M21 10H3M21 10L19.6431 16.7845C19.2692 18.6542 17.6275 20 15.7208 20H8.27922C6.37249 20 4.73083 18.6542 4.35689 16.7845L3 10M3 10L9 4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import * as menu from '@/assets/img/menu'

export default {
  props: {
    id: {
      type: Number,
      default: null
    },
    title: {
      type: String,
      default: 'Название'
    },
    img: {
      type: String,
      default: 'empty'
    },
    price: {
      type: Number,
      default: 0
    }
  },
  computed: {
    imgSet() {
      return menu[this.img]
    },
    inBasket() {
      return this.$store.getters.getBasket.filter((item) => item.id === this.id)
    }
  },
  methods: {
    addToBasket() {
      this.$store.commit('addToBasket', this.id)
    },
    removeFromBasket() {
      this.$store.commit('removeFromBasket', this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu__item {
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;

  &-img {
    border-radius: 12px;
    width: 190px;
    object-fit: cover;

    &-wrapper {
      width: 270px;
      height: 320px;
      overflow: hidden;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &-info {
    display: flex;
    gap: 10px;
    padding: 0 6px;
    width: 270px;
    justify-content: space-between;

    &__text {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  }

  &-title {
    font-size: 20px;
    font-family: 'Runde';
    max-height: 2.5em;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &-price {
    font-size: 20px;
    font-family: 'Runde-Medium';
  }
}

.add {
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  border: 2px solid $color-yellow;

  border-radius: 8px;
  width: 40px;
  min-width: 40px;
  height: 48px;
  transition: 200ms;

  svg {
    path {
      stroke: $color-yellow;
    }
  }

  &:hover {
    background-color: $color-yellow;
    svg {
      path {
        stroke: $color-white;
      }
    }
  }
}

.counter {
  display: flex;
  gap: 16px;
  font-size: 20px;
  font-family: 'Runde-Medium';

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid $color-border;
    border-radius: 8px;
    width: 40px;
    height: 40px;
    transition: 200ms;
    cursor: pointer;

    &:hover {
      background-color: $color-yellow;
      color: $color-white;
      border-color: $color-yellow;
    }
  }

  &__value {
    font-size: 20px;
    font-family: 'Runde-Medium';
    height: 40px;
    width: 0.75em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .menu__item {
    &-img-wrapper {
      width: 120px;
      display: flex;
      align-self: center;
      justify-content: center;
      height: 180px;
    }

    &-img {
      width: 100%;
      object-fit: cover;
    }
  }

  .menu__item {
    &-info {
      width: 100%;
      display: flex;

      &__text {
        width: 100px;
      }
    }

    &__text {
      width: 150px;
    }

    &-title {
      font-size: 16px;
    }
  }
}
</style>

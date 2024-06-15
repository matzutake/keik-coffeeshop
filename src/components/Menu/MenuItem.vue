<template>
  <div class="menu__item">
    <div class="menu__item-img" :style="getImg"></div>

    <div class="menu__item-info">
      <div class="menu__item-info__text">
        <div class="menu__item-title">{{ title }}</div>
        <div class="menu__item-price">{{ price }} ₽</div>
      </div>

      <div class="add">
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
      type: String,
      default: '110'
    }
  },
  computed: {
    getImg() {
      return {
        '--image': `url('/keik-coffeeshop/src/assets/img/menu/${this.img}.png')`
      }
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
    width: 270px;
    height: 320px;
    border-radius: 12px;
    background-size: 90%;
    background-image: var(--image);
    background-position: center;
    background-repeat: no-repeat;
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
</style>

<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="header__logo">Кейк</div>
      <ul class="header__nav">
        <li
          class="header__nav-item"
          :class="{ 'header__nav-item--active': $route.path === '/' }"
          @click="$router.push('/')"
        >
          Главная
        </li>
        <li
          class="header__nav-item"
          :class="{ 'header__nav-item--active': $route.path === '/menu' }"
          @click="$router.push('/menu')"
        >
          Меню
        </li>
        <li
          class="header__nav-item"
          :class="{ 'header__nav-item--active': $route.path === '/about' }"
          @click="$router.push('/about')"
        >
          О нас
        </li>
        <li
          class="header__nav-item"
          :class="{ 'header__nav-item--active': $route.path === '/contacts' }"
          @click="$router.push('/contacts')"
        >
          Контакты
        </li>
      </ul>

      <div class="header__shop">
        <div
          :style="$store.state.basketPrice > 0 ? 'visibility: visible' : 'visibility: hidden'"
          class="header__basket"
        >
          <div class="header__basket-wrapper" @click="$router.push('/basket')">
            <img src="@/assets/icons/basket.svg" alt="basket" />
            <span>{{ $store.state.basketPrice }} ₽</span>
          </div>
        </div>

        <div class="header__button" @click="$router.push('/menu')">
          <span>Заказать онлайн</span>
        </div>
        <div class="header__burger" @click="$store.commit('toggleNav')">
          <img src="@/assets/icons/burger.svg" alt="burger" width="48" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  width: 100%;
  z-index: 100;
  background-color: $color-black;
  color: $color-white;
  font-size: 20px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    max-width: 80%;
    margin: 0 auto;
  }

  &__logo {
    font-size: 42px;
    font-family: 'Runde-Semibold';
    letter-spacing: 0.1em;
    text-shadow: 0 0 5px rgba($color: #ffffff, $alpha: 0.5);
    transition: 200ms;
    cursor: pointer;

    &:hover {
      text-shadow: 0 0 5px rgba($color: #ffffff, $alpha: 1);
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    flex: 0.8;
    max-width: 40%;
    justify-content: space-between;
  }

  &__nav-item {
    cursor: pointer;
    transition: 200ms;

    &--active {
      text-decoration: underline;
      text-underline-offset: 8px;
    }

    &:hover {
      text-shadow: 0 0 15px rgba($color: $color-white, $alpha: 1);
    }
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-yellow;
    gap: 8px;
    cursor: pointer;
    border: 1px solid $color-yellow;
    border-radius: 16px;
    padding: 10px 16px;
    font-size: 16px;
    transition: 200ms;

    &:hover {
      background-color: rgba($color: #ffffff, $alpha: 0.3);
    }
  }

  &__shop {
    display: flex;
    align-items: center;
    position: relative;
  }

  &__basket {
    position: absolute;
    left: calc(-80%);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 120px;

    &-wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 6px;
      border-radius: 8px;
      transition: 200ms;
      border: 2px solid transparent;

      &:hover {
        background-color: rgba($color: #ffffff, $alpha: 0.3);
        border-color: $color-white;
      }
    }
  }

  &__burger {
    display: none;
    cursor: pointer;
    align-items: center;
  }

  @media screen and (max-width: 960px) {
    &__nav {
      display: none;
    }
    &__button {
      display: none;
    }

    &__burger {
      display: flex;
      flex-direction: column;
      gap: 4px;
      cursor: pointer;
    }

    &__wrapper {
      max-width: 90%;
    }
  }
}
</style>

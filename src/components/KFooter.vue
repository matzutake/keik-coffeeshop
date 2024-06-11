<template>
  <div class="footer">
    <div class="footer__wrapper">
      <div class="footer__text">
        <div class="nav">
          <div class="footer__logo">Кейк</div>

          <ul class="footer__nav">
            <li class="footer__nav-item" @click="$router.push('/')">Главная</li>
            <li class="footer__nav-item" @click="$router.push('/menu')">Меню</li>
            <li class="footer__nav-item" @click="$router.push('/about')">О нас</li>
            <li class="footer__nav-item" @click="$router.push('/contacts')">Контакты</li>
          </ul>

          <div class="subscribe">
            <input
              type="email"
              class="subscribe__input"
              placeholder="Ваша почта"
              style="margin: 0"
            />

            <button class="subscribe__title">Подписаться</button>
          </div>
        </div>
      </div>

      <div class="footer__info">
        <div class="address">
          <p>Адрес: г. Чебоксары, ул. Калинина, д. 101</p>
        </div>

        <div class="phone">
          <p>Телефон: +7 (921) 343-87-90</p>
        </div>

        <div class="mail">
          <p>E-mail: keik@coffeeshop.ru</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  bottom: 0;
  height: 200px;
  background-color: $color-black;
  color: $color-white;
  font-size: 20px;

  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
    max-width: 80%;
    margin: 0 auto;
    gap: 24px;
  }

  &__text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  }

  &__logo {
    font-size: 42px;
    font-family: 'Runde-Semibold';
    letter-spacing: 0.1em;
    text-shadow: 0 0 5px rgba($color: #ffffff, $alpha: 0.5);
  }

  &__nav {
    display: flex;
    gap: 40px;

    &-item {
      cursor: pointer;

      &:hover {
        color: $color-yellow;
      }
    }
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  &__info {
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
  }

  .subscribe {
    display: flex;
    gap: 16px;

    &__input {
      width: 100%;
      border-radius: 12px;
      height: 40px;
      border: none;
      padding: 0 16px;
      background-color: rgba($color: #fff, $alpha: 0.25);
      color: $color-white;
      cursor: pointer;
      font-size: 16px;
      transition: 200ms;
      outline: none;

      &:hover {
        background-color: rgba($color: #fff, $alpha: 0.5);
      }
    }

    &__title {
      background-color: $color-white;
      border-radius: 12px;
      height: 40px;
      border: 1px solid $color-white;
      padding: 0 16px;
      font-size: 16px;
      cursor: pointer;
      transition: 200ms;

      &:hover {
        background-color: rgba($color: #fff, $alpha: 0.3);
        color: $color-white;
      }
    }
  }
}
</style>

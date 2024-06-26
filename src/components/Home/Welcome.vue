<template>
  <div class="welcome">
    <div class="welcome-wrapper">
      <img src="@/assets/img/welcome.png" alt="welcome" class="welcome__img" />
      <p class="welcome__text">
        <span class="yellow">Добро пожаловать в <span class="cake">Кейк</span></span> — место, где
        каждая чашка кофе рассказывает свою историю. <span class="bold">Мы</span> — не просто
        кофейня, <span class="bold">мы</span> — оазис вдохновения, уюта и теплых встреч в самом
        сердце города. <span class="bold">Наша миссия</span> — дарить
        <span class="bold">вам</span> моменты счастья и наслаждения с каждым глотком ароматного
        напитка и каждым кусочком нежного десерта.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.welcome {
  display: flex;
  padding: 100px 0;
  justify-content: center;

  &__text {
    max-width: 600px;
    font-family: 'Runde';
    font-size: 24px;
    letter-spacing: 0.1em;
    line-height: 36px;
    padding: 24px;
  }

  &-wrapper {
    display: flex;
    justify-content: center;
    gap: 60px;
  }

  &__img {
    height: 400px;
    width: 300px;
  }

  .yellow {
    color: $color-yellow;
  }

  .bold {
    font-weight: bold;
  }

  .cake {
    font-family: 'Runde-Medium';
    padding: 4px 8px;
    border-radius: 8px;
    transition: 200ms;

    &:hover {
      background-color: $color-black;
      color: $color-white;
    }
  }
}

@media screen and (max-width: 960px) {
  .welcome {
    padding: 20px 0;

    &__img {
      display: none;
    }
  }

  .welcome-wrapper {
    flex-direction: column;
    align-items: center;
    text-align: justify;
  }
}
</style>

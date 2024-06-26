<template>
  <div class="banner">
    <div class="banner-wrapper">
      <div class="banner__text">
        <h1>Кейк</h1>
        <p>Ваш <span class="banner__text--yellow">лучший</span> утренний выбор</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.banner {
  height: 85vh;
  background-image: url('@/assets/img/banner.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-bottom: 15px solid $color-yellow;

  &-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &__text {
    text-align: center;
    color: $color-white;

    p {
      font-size: 26px;
      font-family: 'Runde-Medium';
      letter-spacing: 0.1em;
    }

    &--yellow {
      text-transform: uppercase;
      color: $color-yellow;
    }
  }

  h1 {
    font-size: 88px;
    font-family: 'Runde-Semibold';
    letter-spacing: 0.1em;
    transition: 200ms;

    &:hover {
      text-shadow: 0 0 5px rgba($color: #ffffff, $alpha: 0.5);
    }
  }

  @media screen and (max-width: 960px) {
    &__text {
      width: 70%;
    }
  }
}
</style>

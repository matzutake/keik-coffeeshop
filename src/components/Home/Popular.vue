<template>
  <div class="popular">
    <div class="popular__title">
      <span>Популярные напитки</span>
    </div>

    <div class="popular__drinks">
      <div class="drink">
        <img src="@/assets/img/capucino.png" class="drink__img" />
        <div class="label">Капучино</div>
      </div>

      <div class="drink">
        <img src="@/assets/img/raf.png" class="drink__img" />
        <div class="label">Раф</div>
      </div>

      <div class="drink">
        <img src="@/assets/img/matcha.png" class="drink__img" />
        <div class="label">Матча-латте</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.popular {
  display: flex;
  flex-direction: column;

  &__title {
    font-size: 48px;
    font-weight: bold;
    color: $color-white;
    background-color: $color-black;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__drinks {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    padding: 50px 0 100px 0;
  }

  .drink {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 24px;
    font-weight: bold;
    transition: 200ms;
    cursor: pointer;

    &__img {
      width: 400px;
    }

    &:hover {
      color: $color-yellow;
    }
  }
}
</style>

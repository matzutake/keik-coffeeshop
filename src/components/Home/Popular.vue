<template>
  <div class="popular">
    <div class="popular__title">
      <span>Популярные напитки</span>
    </div>

    <div class="popular__drinks">
      <div class="drink">
        <img src="@/assets/img/menu/caramelLatte.png" class="drink__img" style="height: 320px" />
        <div class="label">Карамельный латте</div>
      </div>

      <div class="drink">
        <img src="@/assets/img/menu/capucino.png" class="drink__img" />
        <div class="label">Капучино</div>
      </div>

      <div class="drink">
        <img src="@/assets/img/menu/popcornRaf.png" class="drink__img" style="margin-top: 50px" />
        <div class="label">Попкорн Раф</div>
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
    gap: 10px;
    font-size: 24px;
    font-weight: bold;
    height: 400px;
    width: 400px;
    justify-content: space-between;
    transition: 200ms;
    cursor: pointer;

    &__img {
      width: 250px;
      object-fit: cover;
    }

    &:hover {
      color: $color-yellow;
    }
  }

  @media screen and (max-width: 960px) {
    .popular__drinks {
      flex-direction: column;
    }

    .drink__img {
      width: 180px;
      object-fit: contain;
    }

    .drink {
      height: 300px;
      width: 300px;
    }
    .popular__title {
      font-size: 28px;
      height: 100px;
    }
  }
}
</style>

<template>
  <div class="special">
    <div class="special__title">Специальное предложение</div>
    <div class="special__description">Скидка 10% на первый онлайн заказ!</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.special {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $color-yellow;
  color: $color-black;
  height: 120px;
  letter-spacing: 0.1em;
  cursor: pointer;
  gap: 6px;
  transition: 200ms;

  &:hover {
    transform: scale(1.1);
    color: $color-white;
  }

  &__title {
    font-size: 32px;
    font-weight: bold;
  }

  &__description {
    font-size: 20px;
  }
}
</style>

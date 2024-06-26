<template>
  <div class="targets">
    <div class="targets-wrapper">
      <div class="targets__title">Наши ценности</div>
      <div class="targets__description">
        <p>
          В <span class="yellow">Кейк</span> мы верим, что каждый гость должен получать не только
          великолепный кофе, но и незабываемые впечатления. Вот что для нас важно:
        </p>
      </div>

      <div class="targets__list">
        <div class="targets__list-item">
          <div class="targets__list-item-icon">
            <img src="@/assets/icons/develop.svg" alt="develop" width="100px" />
          </div>
          <div class="targets__list-item-text">Развитие</div>
        </div>

        <div class="targets__list-item">
          <div class="targets__list-item-icon">
            <img src="@/assets/icons/quality.svg" alt="quality" width="100px" />
          </div>
          <div class="targets__list-item-text">Качество</div>
        </div>

        <div class="targets__list-item">
          <div class="targets__list-item-icon">
            <img src="@/assets/icons/clients.svg" alt="clients" width="100px" />
          </div>
          <div class="targets__list-item-text">Клиенты</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.targets {
  display: flex;
  justify-content: center;
  padding: 60px 0;
  border-bottom: 15px solid $color-yellow;

  &-wrapper {
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  &__title {
    font-size: 32px;
    font-weight: bold;
  }

  &__description {
    font-size: 20px;
    max-width: 60%;
    text-align: center;
    line-height: 1.5;
    letter-spacing: 0.1em;
  }

  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;
    gap: 250px;

    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      &-icon {
        background-color: $color-yellow;
        border-radius: 50%;
        padding: 40px;
        cursor: pointer;
        transition: 200ms;

        &:hover {
          transform: scale(1.1);
          background-color: $color-black;
        }
      }

      &-text {
        font-size: 24px;
        font-family: 'Runde-Medium';
        letter-spacing: 0.1em;
      }
    }
  }

  .yellow {
    color: $color-yellow;
    font-weight: bold;
    padding: 4px 8px;
    border-radius: 8px;
    transition: 200ms;

    &:hover {
      background-color: $color-black;
      color: $color-white;
    }
  }

  @media screen and (max-width: 960px) {
    &__list {
      flex-direction: column;
      gap: 64px;
    }

    &__description {
      max-width: 100%;
    }
  }
}
</style>

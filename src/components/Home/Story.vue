<template>
  <div class="story">
    <div class="story__title">Наша история в цифрах</div>
    <div class="story__info">
      <div class="story__img">
        <img src="@/assets/img/story.png" alt="story" class="story__img" />
      </div>
      <div class="story__text">
        Мы гордимся тем, что сделали за эти годы. Вот несколько интересных фактов о нашей кофейне:
        <ul class="story__text-list">
          <li>10,000+ чашек кофе приготовлено с любовью.</li>
          <hr class="story__text-hr" />
          <li>500+ постоянных клиентов выбирают Кейк каждый день.</li>
          <hr class="story__text-hr" />
          <li>100+ мероприятий и мастер-классов, проведенных для наших гостей.</li>
          <hr class="story__text-hr" />
          <li>50 кг зерен используется еженедельно для создания лучших напитков.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.story {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1em;
  padding: 60px 0;
  gap: 60px;

  &__title {
    font-size: 32px;
    font-weight: bold;
  }

  &__info {
    display: flex;
    gap: 60px;
  }

  &__img {
    display: flex;
    justify-content: center;
  }

  &__text {
    font-size: 20px;
    max-width: 600px;
    line-height: 1.5;
    letter-spacing: 0.1em;
    display: flex;
    flex-direction: column;
    gap: 24px;

    &-list {
      list-style-type: disc;
      gap: 16px;
      padding-left: 20px;
      display: flex;
      flex-direction: column;

      li {
        gap: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    &-hr {
      display: none;
      border: 1px ridge $color-yellow;
      border-radius: 1px;
      width: 70%;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 960px) {
    &__info {
      flex-direction: column;
      align-items: center;
    }

    &__text {
      max-width: 80%;
    }

    &__img {
      width: 90%;
    }

    &__title {
      font-size: 28px;
    }

    &__text-list li {
      font-size: 18px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    &__text-hr {
      display: block;
    }

    padding: 26px 0;
    gap: 40px;
  }
}
</style>

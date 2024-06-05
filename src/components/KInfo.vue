<template>
  <div class="info">
    <div class="info-block">
      <div class="photo coffee"></div>
      <div class="info-block__text">
        <h2>Вкусный кофе</h2>
        <p>
          <span>Наш кофе</span> — это настоящий праздник для гурманов. Мы тщательно отбираем только
          лучшие кофейные зерна, чтобы каждая чашка дарила вам наслаждение. Бариста нашей кофейни
          мастерски готовят эспрессо, капучино, латте и другие виды кофе, каждый из которых имеет
          неповторимый вкус и аромат. Приходите к нам и ощутите, как насыщенные нотки свежемолотого
          кофе заряжают энергией и поднимают настроение. Наша цель — сделать каждый ваш визит
          незабываемым.
        </p>
      </div>
    </div>
    <div class="info-block" style="flex-direction: row-reverse">
      <div class="photo breakfast"></div>
      <div class="info-block__text" style="padding-left: 0">
        <h2>Завтраки</h2>
        <p>
          Начните свой день с <span>идеального завтрака</span> в нашей кофейне! Мы предлагаем
          разнообразное меню, которое включает как традиционные, так и оригинальные блюда.
          Попробуйте наш омлет с ароматными травами, сырники с ягодным соусом или свежие круассаны с
          джемом и маслом. Наши завтраки не только вкусные, но и полезные, приготовленные из свежих
          и качественных продуктов. Пусть утро станет вашим любимым временем дня вместе с нами!
        </p>
      </div>
    </div>
    <div class="info-block">
      <div class="photo croissant"></div>
      <div class="info-block__text">
        <h2>Круассаны</h2>
        <p>
          <span>Наши круассаны</span> — это истинное произведение кулинарного искусства. Они
          приготовлены по классическим французским рецептам с использованием лучшего сливочного
          масла и муки высшего сорта. Хрустящие снаружи и невероятно нежные внутри, наши круассаны
          идеально сочетаются с чашечкой ароматного кофе или чая. Вкусовое разнообразие — от
          традиционных с маслом до начиненных шоколадом или миндалем — удовлетворит любые ваши
          предпочтения. Приходите и насладитесь моментом блаженства с каждым кусочком!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.info {
  background-color: $color-white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 108px 72px;
  border-top: 12px solid $color-yellow;
  gap: 48px;
}

.info-block {
  display: flex;
  width: 80rem;
  gap: 32px;

  &__text {
    padding: 32px;
    font-size: 22px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    line-height: 1.5;

    span {
      color: $color-yellow;
    }
  }
}

.photo {
  width: 350px;
  height: 400px;
  min-width: 350px;
}

.coffee {
  background-image: url('@/assets/img/coffee.png');
  background-repeat: no-repeat;
  background-size: 100%;
}

.breakfast {
  background-image: url('@/assets/img/breakfast.png');
  background-repeat: no-repeat;
  background-size: 100%;
}

.croissant {
  background-image: url('@/assets/img/croissant.png');
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>

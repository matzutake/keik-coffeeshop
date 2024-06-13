<template>
  <div class="about">
    <NavTitle title="О нас" />

    <div class="info">
      <div class="info__title">
        <span>Наша история</span>
      </div>

      <div class="info__text">
        <p>
          Кофейня Кейк открыла свои двери 10 ноября 2022 года. С первых дней работы наш уголок стал
          местом притяжения для любителей кофе, творческих людей и просто тех, кто ищет уединение и
          спокойствие. Наша миссия — дарить радость и вдохновение с каждым глотком кофе и каждым
          кусочком десерта. В основе нашей философии лежит уважение к традициям и стремление к
          инновациям. С тех пор мы прошли долгий путь, но наша основная цель осталась неизменной —
          делать каждый день наших гостей особенным. Мы создаем не просто кофе, мы создаем
          атмосферу, которая наполняет жизнь яркими моментами и теплыми воспоминаниями. Кейк — это
          больше, чем кофейня. Это история дружбы, страсти к своему делу и стремления к
          совершенству. Мы благодарны каждому гостю, который стал частью этой истории и надеемся,
          что впереди нас ждет еще много прекрасных глав.
        </p>
      </div>
    </div>

    <div class="my-swiper"></div>
  </div>
</template>

<script>
import NavTitle from '@/components/NavTitle.vue'

export default {
  components: {
    NavTitle
  }
}
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 32px;
  align-self: center;
  margin-top: 60px;
  padding: 40px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 32px;

  &__title {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
  }

  &__text {
    font-size: 24px;
    line-height: 1.5;
    letter-spacing: 0.1em;
    max-width: 75rem;
  }
}
</style>

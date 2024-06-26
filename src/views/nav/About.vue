<template>
  <div class="about">
    <NavTitle title="О нас" />

    <div class="info">
      <div class="info__title">
        <span>Наша история</span>
      </div>

      <div class="info__text">
        <p>
          Кофейня <span class="cake">Кейк</span> открыла свои двери 10 ноября 2022 года. С первых
          дней работы наш уголок стал местом притяжения для любителей кофе, творческих людей и
          просто тех, кто ищет уединение и спокойствие. Наша миссия — дарить радость и вдохновение с
          каждым глотком кофе и каждым кусочком десерта. В основе нашей философии лежит уважение к
          традициям и стремление к инновациям.
          <br />
          <br />
          С тех пор <span class="bold">мы</span> прошли долгий путь, но наша основная цель осталась
          неизменной — делать каждый день наших гостей особенным. Мы создаем не просто кофе, мы
          создаем <span class="bold">атмосферу</span>, которая наполняет жизнь яркими моментами и
          теплыми воспоминаниями.
          <br />
          <br />
          <span class="cake">Кейк</span> — это больше, чем кофейня. Это история
          <span class="bold">дружбы</span>, <span class="bold yellow">страсти</span> к своему делу и
          стремления к совершенству. Мы благодарны каждому гостю, который стал частью этой истории и
          надеемся, что впереди нас ждет еще много прекрасных глав.
        </p>
      </div>
    </div>
  </div>

  <div class="my-swiper">
    <Swiper
      :slides-per-view="1"
      :modules="modules"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 3000 }"
      loop
      class="swiper"
    >
      <SwiperSlide class="slide">
        <img class="slide__img" src="@/assets/img/gallery/1.png" alt="slide" />
      </SwiperSlide>
      <SwiperSlide class="slide">
        <img class="slide__img" src="@/assets/img/gallery/2.png" alt="slide" />
      </SwiperSlide>
      <SwiperSlide class="slide">
        <img class="slide__img" src="@/assets/img/gallery/3.png" alt="slide" />
      </SwiperSlide>
      <SwiperSlide class="slide">
        <img class="slide__img" src="@/assets/img/gallery/4.png" alt="slide" />
      </SwiperSlide>
      <SwiperSlide class="slide">
        <img class="slide__img" src="@/assets/img/gallery/5.png" alt="slide" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import NavTitle from '@/components/NavTitle.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/pagination'

import '@/assets/swiper.css'

export default {
  components: {
    NavTitle,
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination, Autoplay]
    }
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
    font-size: 1.2em;
    line-height: 1.5;
    letter-spacing: 0.1em;
    max-width: 75rem;
  }
}

.bold {
  font-family: 'Runde-Bold';
}

.yellow {
  color: $color-yellow;
}

.cake {
  font-family: 'Runde-Semibold';
  padding: 4px 4px;
  border-radius: 8px;
  transition: 200ms;

  &:hover {
    background-color: $color-black;
    color: $color-white;
  }
}

.my-swiper {
  width: 100%;
  height: 45rem;
  margin: 60px 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.slide {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@media screen and (max-width: 960px) {
  .info__text {
    text-align: justify;
  }

  .about {
    padding: 32px;
    margin: 50px 0;
  }
}
</style>

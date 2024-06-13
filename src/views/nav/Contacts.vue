<template>
  <div class="contacts">
    <NavTitle title="Контакты" />
    <div class="contacts-wrapper">
      <Feedback />
      <div class="info">
        <div class="info__title">Контактная информация</div>
        <ul class="info__list">
          <li class="info-block">
            <div class="info-block__title">
              <img src="@/assets/icons/map.svg" class="info-block__title-icon" alt="address" />
              <span>Адрес:</span>
            </div>
            <ul>
              <li>г. Чебоксары, ул. Калинина, д. 101</li>
              <li>г. Чебоксары, ул. Карла Маркса, д. 24</li>
            </ul>
          </li>

          <li class="info-block">
            <div class="info-block__title">
              <img src="@/assets/icons/phone.svg" class="info-block__title-icon" alt="phone" />
              <span>Телефон:</span>
            </div>
            <ul>
              <li>
                +7 (923) 324-22-13
                <span style="margin-left: 5px; color: gray; font-size: 12px">(Руководство)</span>
              </li>
              <li>
                +7 (965) 665-61-34
                <span style="margin-left: 5px; color: gray; font-size: 12px">(Менеджер)</span>
              </li>
            </ul>
          </li>

          <li class="info-block">
            <div class="info-block__title">
              <img src="@/assets/icons/mail.svg" class="info-block__title-icon" alt="mail" />
              <span>E-mail:</span>
            </div>
            <ul>
              <li>keik@coffeeshop.ru</li>
              <li>keik@support.ru</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="map">
    <div class="map__title">Мы на карте</div>

    <div class="yandex-map">
      <yandex-map
        v-model="map"
        :settings="{
          location: {
            center: [47.261095, 56.141062],
            zoom: 16
          }
        }"
      >
        <yandex-map-default-scheme-layer />
        <yandex-map-marker v-for="(marker, i) in markers" :key="i">
          <div class="point"></div
        ></yandex-map-marker>
      </yandex-map>
    </div>
  </div>
</template>

<script>
import NavTitle from '@/components/NavTitle.vue'
import Feedback from '@/components/Contacts/Feedback.vue'
import { YandexMap, YandexMapDefaultSchemeLayer, YandexMapMarker } from 'vue-yandex-maps'

export default {
  components: {
    NavTitle,
    Feedback,
    YandexMap,
    YandexMapDefaultSchemeLayer,
    YandexMapMarker
  },
  data() {
    return {
      markers: [{}]
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: center;
  margin-top: 60px;
  padding: 40px;

  &-wrapper {
    padding: 40px 0;
    display: flex;
    gap: 120px;
    justify-content: space-between;
  }
}

.info {
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: 1;

  &__title {
    font-size: 24px;
    font-family: 'Runde-Medium';
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &-block {
    display: flex;
    flex-direction: column;
    gap: 6px;

    &__title {
      font-size: 18px;
      display: flex;
      align-items: center;
      gap: 10px;

      &-icon {
        width: 28px;
        height: 28px;
      }

      span {
        font-family: 'Runde-Medium';
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding-left: 2.5em;
    }
  }
}

.map {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  &__title {
    font-size: 32px;
    text-align: center;
    font-family: 'Runde-Medium';
    background-color: $color-black;
    color: #fff;
    padding: 16px 0;
    letter-spacing: 0.1em;
    width: 100%;
  }
}

.yandex-map {
  width: 100%;
  height: 600px;
  overflow: hidden;

  &__frame {
    width: 100%;
    border: none;
    height: 100%;
  }

  .point {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: $color-yellow;
  }
}
</style>

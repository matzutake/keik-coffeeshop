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
        <div class="messengers">
          <div class="messengers__title">Наши соц. сети</div>
          <div class="messengers__hrefs">
            <img src="@/assets/icons/telegram.svg" alt="telegram" class="messengers__item" />
            <img src="@/assets/icons/whatsapp.svg" alt="whatsapp" class="messengers__item" />
            <img src="@/assets/icons/vk.svg" alt="vk" class="messengers__item" />
          </div>
        </div>
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
        <yandex-map-default-features-layer />
        <yandex-map-marker
          v-for="(marker, i) in markers"
          :key="i"
          :settings="marker"
          position="top left-center"
        >
          <div>
            <img src="@/assets/icons/marker.svg" class="marker" alt="address" /></div
        ></yandex-map-marker>
      </yandex-map>
    </div>
  </div>
</template>

<script>
import NavTitle from '@/components/NavTitle.vue'
import Feedback from '@/components/Contacts/Feedback.vue'
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapMarker
} from 'vue-yandex-maps'

export default {
  components: {
    NavTitle,
    Feedback,
    YandexMap,
    YandexMapDefaultSchemeLayer,
    YandexMapMarker,
    YandexMapDefaultFeaturesLayer
  },
  data() {
    return {
      map: null,
      markers: [
        {
          coordinates: [47.270725, 56.139481]
        },
        {
          coordinates: [47.250405, 56.142701]
        }
      ]
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

.messengers {
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 10px 12px;

  &__item {
    width: 40px;
    height: 40px;
    cursor: pointer;
    opacity: 0.5;
    transition: 200ms;

    &:hover {
      opacity: 1;
    }
  }

  &__title {
    font-family: 'Runde-Medium';
    font-size: 20px;
  }

  &__hrefs {
    display: flex;
    gap: 20px;
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

  .marker {
    width: 40px;
    height: 52px;
  }
}

@media (max-width: 960px) {
  .contacts-wrapper {
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }

  .info-block {
    align-items: center;
    gap: 16px;
  }

  .info {
    align-items: center;
    text-align: center;
    width: 90%;
  }

  .contacts {
    padding: 0;
    margin-top: 80px;
  }
}
</style>

<template>
  <div class="contacts">
    <div class="black-ground">
      <h1>Свяжитесь с нами</h1>
      <hr />
      <p>Мы всегда рады получить ваши отзывы и предложения!</p>
    </div>
    <div class="contacts__info">
      <div class="contact-block">
        <div class="icon">
          <img src="@/assets/icons/point.svg" />
        </div>
        <div class="contact-info">
          <h3>Адреса:</h3>
          <p>
            ул. Калинина 101, <br />
            ул. Карла Маркса 24, <br />
            г. Чебоксары
          </p>
        </div>
      </div>

      <div class="contact-block">
        <div class="icon">
          <img src="@/assets/icons/mail.svg" />
        </div>
        <div class="contact-info">
          <h3>Эл. адрес:</h3>
          <p>
            keik-coffeshop@mail.ru,<br />
            keik-tagservice@mail.ru
          </p>
        </div>
      </div>

      <div class="contact-block">
        <div class="icon">
          <img src="@/assets/icons/phone.svg" />
        </div>
        <div class="contact-info">
          <h3>Позвоните нам:</h3>
          <p>
            +7 (925) 5432 23 21,<br />
            +7 (919) 4421 34 34
          </p>
        </div>
      </div>
    </div>
    <div class="contacts__map">
      <div style="position: relative; overflow: hidden">
        <a
          href="https://yandex.ru/maps/45/cheboksary/search/%D0%BA%D0%B5%D0%B9%D0%BA/?utm_medium=mapframe&utm_source=maps"
          style="color: #eee; font-size: 12px; position: absolute; top: 0px"
          >Кейк в Чебоксарах</a
        ><a
          href="https://yandex.ru/maps/45/cheboksary/?utm_medium=mapframe&utm_source=maps"
          style="color: #eee; font-size: 12px; position: absolute; top: 14px"
          >Чебоксары</a
        ><iframe
          src="https://yandex.ru/map-widget/v1/?ll=47.265316%2C56.141210&mode=search&sctx=ZAAAAAgBEAAaKAoSCUqaP6a1n0dAETUHCOboEUxAEhIJ%2BWcG8YEd1z8RhLuzdtuFvj8iBgABAgMEBSgKOABALUgBYkFyZWxldl9yYW5raW5nX2hlYXZ5X2NsaWNrX21hcHNfZm9ybXVsYT0wLjQwOmwzX2NsaWNrX2RjNDkwMzA4X2V4cGJCcmVsZXZfcmFua2luZ19oZWF2eV9jbGlja193b3JsZF9mb3JtdWxhPTAuNDA6bDNfY2xpY2tfZGM0OTAzMDhfZXhwYkFyZWxldl9yYW5raW5nX2hlYXZ5X2NsaWNrX3NlcnBfZm9ybXVsYT0wLjQwOmwzX2NsaWNrX2RjNDkwMzA4X2V4cGoCcnWdAc3MTD2gAQCoAQC9ATX7PvnCAQv8k7fQhAbZpurHJ4ICCNC60LXQudC6igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=47.265316%2C56.141210&sspn=0.045147%2C0.014903&text=%D0%BA%D0%B5%D0%B9%D0%BA&z=15"
          width="100%"
          height="400"
          frameborder="1"
          allowfullscreen="true"
          style="position: relative"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.black-ground {
  background-color: $color-black;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 64px;
  align-items: center;
  color: $color-white;
  gap: 16px;

  hr {
    width: 130px;
    border: 3px solid $color-yellow;
    border-radius: 4px;
  }

  h1 {
    font-size: 60px;
  }
}

.contacts {
  border-bottom: 12px solid $color-yellow;
  display: flex;
  flex-direction: column;
  position: relative;

  &__info {
    width: 80%;
    height: 300px;
    position: absolute;
    left: 10%;
    top: 220px;
    border-radius: 16px;
    background-color: $color-white;
    z-index: 3;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-around;

    .contact-block {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      text-align: center;
      padding: 32px 0;
      gap: 16px;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .icon {
      width: 120px;
      height: 120px;
      display: flex;
      justify-content: center;
      border-radius: 60px;
      background-color: $color-yellow;
    }
  }

  &__map {
    width: 100%;
  }
}
</style>

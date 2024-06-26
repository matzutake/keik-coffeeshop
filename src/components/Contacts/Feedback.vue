<template>
  <div class="feedback">
    <div class="feedback__title">Свяжитесь с нами!</div>
    <div class="feedback__form">
      <div class="input-block">
        <div class="label">Имя:</div>
        <input class="feedback__form-input" type="text" name="name" placeholder="Ваше имя.." />
      </div>

      <div class="input-block">
        <div class="label">E-mail:</div>
        <input class="feedback__form-input" type="text" name="email" placeholder="Ваша почта.." />
      </div>

      <div class="input-block">
        <div class="label">Сообщение:</div>
        <textarea
          class="feedback__form-input textarea"
          name="message"
          id="message"
          rows="6"
          resize="none"
          placeholder="Ваше сообщение.."
        ></textarea>
      </div>
      <button class="feedback__form-button">Отправить</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.feedback {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  width: 350px;
  border: 1px solid $color-border;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);

  &__title {
    font-family: 'Runde-Medium';
    font-size: 22px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;

    &-input {
      border: 1px solid $color-border;
      border-radius: 8px;
      padding: 10px 12px;
      outline: none;
      transition: 200ms;

      &:focus {
        border: 1px solid $color-yellow;
        box-shadow: 4px 4px rgba($color: $color-yellow, $alpha: 0.5);
      }
    }
  }

  &__form-button {
    border-radius: 8px;
    padding: 10px 12px;
    border: none;
    cursor: pointer;
    background-color: $color-black;
    color: $color-white;
    transition: 200ms;
    font-family: 'Runde-Medium';
    font-size: 16px;
    outline: none;
    letter-spacing: 0.1em;

    &:hover {
      background-color: $color-yellow;
      box-shadow: 4px 4px rgba($color: $color-yellow, $alpha: 0.5);
    }
  }
}

.input-block {
  display: flex;
  flex-direction: column;
  gap: 6px;

  .label {
    font-size: 14px;
    padding: 0 4px;
  }
}

.textarea {
  resize: none;
}

@media screen and (max-width: 960px) {
  .feedback {
    width: 300px;
  }
}
</style>

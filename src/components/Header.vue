<template>
  <div class="header-wrapper">
    <ul class="header-menu">
      <li>Меню</li>
      <li>Контакты</li>
      <li class="header-menu__title">Кейк</li>
      <li>Вакансии</li>
      <li>О нас</li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 16px;
}

.header-menu {
  color: $color-white;
  background-color: $color-black;
  display: flex;
  font-size: 16px;
  letter-spacing: 0.1em;
  align-items: center;
  gap: 32px;
  padding: 0 32px;
  border-radius: 24px;
  box-shadow: 0 0 10px 5px rgba(255, 239, 198, 0.35);

  &__title {
    font-family: 'Runde-Semibold';
    font-size: 32px;
    letter-spacing: 0.15em;
    text-shadow: 0 0 8px rgba(255, 239, 198, 0.5);
    cursor: pointer;
    transition: 200ms;

    &:hover {
      text-shadow: 0 0 16px rgba(255, 239, 198, 0.7);
    }
  }
}
</style>

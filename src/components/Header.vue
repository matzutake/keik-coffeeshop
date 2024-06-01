<template>
  <ul class="header-menu">
    <li>Меню</li>
    <li>Контакты</li>
    <li class="header-menu__title">Кейк</li>
    <li>Вакансии</li>
    <li>О нас</li>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header-menu {
  font-family: serif;
  display: flex;
  border-radius: 2rem;
  background-color: $color-black;
  color: $color-white;
  font-size: 1rem;
  font-weight: 400;
  line-height: 2rem;
  justify-content: space-around;
  padding: 0 48px;
  gap: 16px;

  &__title {
    font-family: 'Runde-Semibold';
    font-size: 2rem;
  }
}
</style>

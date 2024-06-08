<template>
  <div class="header-wrapper">
    <ul class="header-menu">
      {{
        $store.pageTitle
      }}
      <RouterLink
        class="nav-link"
        :class="$store.state.pageTitle === 'Главная' ? 'nav-link-active' : null"
        to="/"
      >
        Главная
      </RouterLink>
      <RouterLink
        class="nav-link"
        :class="$store.state.pageTitle === 'Меню' ? 'nav-link-active' : null"
        to="/menu"
      >
        Меню
      </RouterLink>
      <li class="header-menu__title">Кейк</li>
      <li class="nav-link" @click="contacts">Контакты</li>
      <RouterLink
        class="nav-link"
        :class="$store.state.pageTitle === 'О нас' ? 'nav-link-active' : null"
        to="/about"
      >
        О нас
      </RouterLink>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    contacts() {
      if (this.$store.state.pageTitle !== 'Главная') this.$router.push({ path: '/' })

      setTimeout(
        () => document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' }),
        200
      )
    }
  }
}
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
  box-shadow: 0 0 7px 2px rgba(255, 239, 198, 0.35);
  z-index: 5;

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

  .nav-link {
    text-decoration: none;
    color: $color-white;
    cursor: pointer;
    transition: 200ms;
    text-underline-offset: 4px;

    &:hover {
      text-decoration: underline;
    }
  }

  .nav-link-active {
    text-decoration: underline;
  }
}
</style>

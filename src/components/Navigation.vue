<template>
  <div class="navigation-wrapper" :style="opacity">
    <div class="navigation">
      <div class="navigation__header">
        <img
          src="@/assets/icons/close.svg"
          class="navigation__close"
          alt="close"
          @click="closeNav"
        />
      </div>
      <p class="navigation__title">Кейк</p>

      <ul>
        <li @click="goTo('/')" :class="{ active: $route.path === '/' }">Главная</li>
        <li @click="goTo('/menu')" :class="{ active: $route.path === '/menu' }">Меню</li>
        <li @click="goTo('/about')" :class="{ active: $route.path === '/about' }">О нас</li>
        <li @click="goTo('/contacts')" :class="{ active: $route.path === '/contacts' }">
          Контакты
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      background: 0
    }
  },
  methods: {
    goTo(path) {
      this.$store.commit('toggleNav')
      this.$router.push(path)
    },
    closeNav() {
      this.background = 0
      setTimeout(() => {
        this.$store.commit('toggleNav')
      }, 200)
    }
  },
  mounted() {
    setTimeout(() => {
      this.background = 1
    }, 200)
  },
  computed: {
    opacity() {
      return {
        '--background': this.background ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  background-color: $color-white;
  position: fixed;
  padding: 30px 0;
  top: 0;
  right: 0;
  width: 75%;
  height: 100%;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  &__title {
    font-size: 48px;
    font-weight: bold;
  }

  &__close {
    width: 32px;
    cursor: pointer;
    transition: 200ms;
    align-self: flex-end;

    &:hover {
      background-color: rgba($color: #000000, $alpha: 0.25);
      border-radius: 8px;
      padding: 4px;
    }
  }

  &__header {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 80%;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  li {
    font-size: 20px;
    cursor: pointer;

    &.active {
      text-decoration: underline;
      text-underline-offset: 6px;
    }
  }

  &-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    transition: 180ms;
    background-color: var(--background);
  }
}
</style>

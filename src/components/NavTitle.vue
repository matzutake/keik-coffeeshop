<template>
  <div class="title">
    <h1 class="text">{{ title }}</h1>
    <hr class="line" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  flex-direction: column;
  align-items: center;

  .text {
    font-size: 42px;
    font-family: 'Runde-Medium';
    letter-spacing: 0.1em;
    text-align: center;
  }

  .line {
    width: 70%;
    border: 2px solid $color-yellow;
    border-radius: 2px;
    margin: 24px 0;
  }
}

@media screen and (max-width: 960px) {
  .line {
    width: 40%;
  }

  .text {
    font-size: 24px;
  }
}
</style>

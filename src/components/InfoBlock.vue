<template>
  <div class="info-block" :style="reversed ? 'flex-direction: row-reverse' : ''">
    <div class="info-block__img"></div>
    <div class="info-block__text" :style="reversed ? 'padding-left: 0' : ''">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti molestias iure porro!
      Nam neque voluptatem odio, dolores totam animi ex deserunt nobis quisquam omnis voluptas
      magnam quaerat, porro voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Inventore quas quo tenetur odio optio earum dolores. Sit, nostrum eaque eum corrupti maiores
      id tempora libero possimus laboriosam quod alias aliquam?
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reversed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.info-block {
  display: flex;
  width: 70rem;

  &__img {
    background-color: #999999;
    width: 350px;
    height: 400px;
    min-width: 350px;
    border-radius: 16px;
  }

  &__text {
    padding: 32px;
    font-size: 22px;
  }
}
</style>

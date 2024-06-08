<template>
  <div class="menu-item">
    <slot class="image" />
  </div>
  <slot name="name" />
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.menu-item {
  height: 20rem;
  width: 20rem;
  border-radius: 1rem;
  background-color: $color-border;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
</style>

<template>
  <div class="footer">
    <div class="links">
      <div class="messenger">
        <img class="icon" src="@/assets/icons/whatsapp.svg" />
      </div>
      <div class="messenger">
        <img src="@/assets/icons/vk.svg" />
      </div>
      <div class="messenger">
        <img src="@/assets/icons/telegram.svg" />
      </div>
      <div class="messenger">
        <img src="@/assets/icons/instagram.svg" />
      </div>
    </div>
    <p class="subtitle">© 2024 Кейк</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding: 24px;
  color: #999999;
}

.links {
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: center;

  .messenger {
    border: 2px solid #999999;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 28px;
    transition: 200ms;
    cursor: pointer;

    &:hover {
      border-color: $color-yellow;
    }
  }
}

.subtitle:hover {
  transition: 200ms;
  color: $color-black;
  cursor: default;
}
</style>

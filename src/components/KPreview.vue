<template>
  <div class="preview">
    <img src="@/assets/img/background.jpg" class="background" />
    <div class="overlay">
      <div class="ads">
        <h1>Кейк</h1>
        <p>Ваш <span class="best">лучший</span> утренний выбор</p>
      </div>
      <div class="arrows" @click="scroll">
        <img class="arrow1" src="@/assets/icons/down.svg" />
        <img class="arrow2" src="@/assets/icons/down.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scroll() {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
.preview {
  position: relative;
  height: 70rem;

  .background {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;

    .ads {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -70%);
      color: $color-white;
      text-align: center;

      h1 {
        font-size: 7rem;
      }

      p {
        font-size: 2rem;
      }

      .best {
        color: $color-yellow;
        text-transform: uppercase;
      }
    }

    .arrows {
      cursor: pointer;

      &:hover {
        .arrow1,
        .arrow2 {
          animation: none;
          opacity: 0.8;
        }
      }
    }

    .arrow1,
    .arrow2 {
      width: 15rem;
      height: 15rem;
      display: flex;
      position: absolute;
      animation: fade 2s infinite;
    }

    .arrow1 {
      bottom: 5rem;
      left: 50%;
      transform: translateX(-50%);
      animation-delay: 0.5s;
    }

    .arrow2 {
      bottom: 9rem;
      left: 50%;
      transform: translateX(-50%);
      animation-delay: 0.7s;
    }
  }

  @keyframes fade {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
}
</style>

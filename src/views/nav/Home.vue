<template>
  <Banner />
  <Welcome />
  <Popular />
  <Special />
  <OursTarget />
  <Story />
</template>

<script>
import Banner from '@/components/Home/Banner.vue'
import Welcome from '@/components/Home/Welcome.vue'
import Popular from '@/components/Home/Popular.vue'
import Special from '@/components/Home/Special.vue'
import OursTarget from '@/components/Home/OursTarget.vue'
import Story from '@/components/Home/Story.vue'

export default {
  components: {
    Banner,
    Welcome,
    Popular,
    Special,
    OursTarget,
    Story
  }
}
</script>

<style lang="scss" scoped></style>

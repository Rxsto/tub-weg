<template>
  <div class="gallery">
    <div class="wrapper">
      <div v-for="image in images" :key="image.id" class="image">
        <h2>{{ image.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ env, $axios }) {
    const result = await $axios.$get(env.BASE_URL + '/images')
    return {
      images: result,
      path: process.env.CDN_PATH + 'images/'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <div>
    <appNavbar />
    <nuxt />
    <appFooter />
  </div>
</template>

<script>
import appNavbar from '~/components/navbar'
import appFooter from '~/components/footer'

export default {
  components: {
    appNavbar,
    appFooter
  }
}
</script>

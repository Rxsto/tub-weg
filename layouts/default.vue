<template>
  <div>
    <appNavbar />
    <nuxt />
    <appContact />
    <appFooter />
  </div>
</template>

<script>
import appNavbar from '~/components/navbar'
import appContact from '~/components/contact'
import appFooter from '~/components/footer'

export default {
  components: {
    appNavbar,
    appContact,
    appFooter
  }
}
</script>

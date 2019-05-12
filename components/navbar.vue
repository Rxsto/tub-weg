<template>
  <div class="navbar">
    <nuxt-link to="/" class="part">
      <img alt="tub-logo" src="/img/logo.png" class="logo">
    </nuxt-link>
    <div class="part">
      <nuxt-link to="/" class="link">
        Home
      </nuxt-link>
      <nuxt-link to="/gallery" class="link">
        Gallery
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: var(--white);
  padding: 10px;
  box-shadow: var(--shadow-bottom);

  .part {
    display: flex;
    flex-direction: row;

    .logo {
      height: 40px;
    }

    .link {
      text-decoration: none;
      font-size: 15px;
      padding: 10px;
      border-radius: var(--radius-small);
      transition: var(--transition);
      font-weight: 500;
      color: var(--light-dark);

      &:hover {
        background: var(--grey);
      }
    }
  }
}
</style>

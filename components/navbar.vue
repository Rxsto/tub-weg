<template>
  <div class="nav">
    <nuxt-link to="/" class="logo">
      <img class="image" src="/img/logo.png" alt="tuija unho-berger logo">
      <h1 class="title">
        tub-aiglart.
      </h1>
    </nuxt-link>
    <div class="space" />
    <div class="links">
      <nuxt-link class="link" to="/">
        Home
      </nuxt-link>
      <nuxt-link class="link" to="/gallery">
        Gallery
      </nuxt-link>
      <nuxt-link class="link" to="/exhibitions">
        Exhibitions
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: row;
  background: var(--black);
  box-shadow: var(--shadow-all);
  height: 75px;
  z-index: 3;

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;

    .image {
      height: 50px;
      margin: 0 20px 0 15px;
    }

    .title {
      font-size: 30px;
      font-family: var(--font-mono);
    }
  }

  .space {
    flex-grow: 1;
  }

  .links {
    display: flex;
    flex-direction: row;

    .link {
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 25px;
      height: 100%;
      padding: 0 20px;

      &:hover {
        background: var(--dark);
      }
    }
  }
}

@media only screen and (max-width: 800px) {
  .nav {
    height: 50px;

    .logo {
      display: none;
    }

    .space {
      display: none;
    }

    .links {

      .link {
        font-size: 20px;
      }
    }
  }
}
</style>

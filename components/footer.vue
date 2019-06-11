<template>
  <div class="footer">
    <p class="copyright">
      © tub-aiglart. {{ year }} - all rights reserverd.
    </p>
    <div class="space" />
    <div class="links">
      <nuxt-link class="link" to="/imprint">
        imprint
      </nuxt-link>
      <p class="text">
        - made by
      </p>
      <a class="link" href="https://rxsto.me">
        oskar lang
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: row;
  background: var(--black);
  box-shadow: var(--shadow-all);
  height: 75px;
  padding: 0 25px;

  .copyright {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 15px;
    font-family: var(--font-mono);
    text-align: center;
  }

  .space {
    flex-grow: 1;
  }

  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: var(--font-mono);

    .link {
      text-decoration: underline;
      font-size: 15px;
    }

    .text {
      font-size: 15px;
      margin: 0 10px;
    }
  }
}

@media only screen and (max-width: 750px) {
  .footer {
    flex-direction: column;
    height: auto;
    padding: 25px;
    align-items: center;

    .copyright {
      margin-bottom: 10px;
    }
  }
}
</style>

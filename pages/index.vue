<template>
  <div class="index">
    <div v-if="news.displayed" class="news">
      <h1 class="title">
        {{ news.title }}
      </h1>
      <p class="description">
        {{ news.description }}
      </p>
    </div>
    <div class="wrapper">
      <img class="portrait" src="/img/portrait.jpg" alt="tuija unho-berger">
      <p class="cv">
        Tuija Unho-Berger, born in Helsinki, Finland; after high school diploma in 1963 practical work (silk-screen process) in the layout department of the film company Suomi-Filmi; lessons in painting by Ville Hänninen (painter and scene designer); courses in painting at the Free School of Arts in Helsinki; longer stays in Sweden, England and France (languages and art scene); residence in southern Bavaria/Germany; individual and group exhibitions in: Regensburg, Ingolstadt, Straubing, Pfaffenhofen, Kelheim, Mainburg, Geisenfeld, Neustadt a.d. Donau.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const result = await app.$axios.$get(`${app.$env.BASE_URL}/news`)
    return {
      news: result
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  flex-direction: column;
  padding: 25px;

  .news {
    display: flex;
    flex-direction: column;
    background: var(--black);
    box-shadow: var(--shadow-all);
    padding: 50px;
    margin-bottom: 25px;

    .title {
      font-size: 50px;
      font-weight: 700;
    }

    .description {
      font-size: 25px;
      margin-top: 10px;
      font-family: var(--font-mono);
    }
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: var(--black);
    box-shadow: var(--shadow-all);
    padding: 50px;

    .portrait {
      width: 100%;
      margin-right: 50px;
    }

    .cv {
      font-size: 30px;
      font-family: var(--font-mono);
      font-weight: 700;
      padding: 0 20px;
    }
  }
}

@media only screen and(max-width: 1200px) {
  .index {

    .news {
      padding: 25px;

      .title {
        font-size: 40px;
      }

      .description {
        font-size: 20px;
      }
    }

    .wrapper {
      flex-direction: column;

      .portrait {
        width: auto;
        margin: 0 0 50px 0;
      }

      .cv {
        font-size: 20px;
      }
    }
  }
}

@media only screen and(max-width: 500px) {
  .index {

    .news {

      .title {
        font-size: 30px;
      }

      .description {
        font-size: 15px;
      }
    }

    .wrapper {
      flex-direction: column;
      padding: 25px;

      .portrait {
        height: 250px;
      }

      .cv {
        padding: 0;
        font-size: 17px;
      }
    }
  }
}
</style>

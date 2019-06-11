<template>
  <div class="index">
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
}
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  padding: 25px;

  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: var(--black);
    box-shadow: var(--shadow-all);
    padding: 50px;
    width: 100%;

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

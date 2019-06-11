<template>
  <div class="contact">
    <div class="wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.45333710629!2d11.704718315913645!3d48.69681552002311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e4ddca2338321%3A0x72ce487a25925a39!2sTUB-AIGLART!5e0!3m2!1sen!2sde!4v1560240930511!5m2!1sen!2sde"
        class="map"
        frameborder="0"
        allowfullscreen
      />
      <div class="content">
        <a class="email" href="mailto:tuija@tub-aiglart.com">
          tuija@tub-aiglart.com
        </a>
        <p class="phone">
          +49 8753 - 458
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  padding: 0 25px 25px 25px;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--black);
    box-shadow: var(--shadow-all);
    width: 100%;

    .map {
      width: 100%;
      height: 400px;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 50px;

      .email {
        font-size: 35px;
        font-weight: 700;
        font-family: var(--font-mono);
        margin-bottom: 15px;
      }

      .phone {
        font-size: 25px;
        font-weight: 700;
        font-family: var(--font-mono);
      }
    }
  }
}

@media only screen and (max-width: 650px) {
  .contact {

    .wrapper {

      .content {

        .email {
          font-size: 25px;
          text-align: center;
        }

        .phone {
          font-size: 20px;
          text-align: center;
        }
      }
    }
  }
}
</style>

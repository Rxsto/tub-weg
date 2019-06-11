<template>
  <div class="gallery">
    <div class="wrapper">
      <div v-for="image in images" :key="image.id" class="image">
        <div :id="'full-' + image.id" class="full">
          <img class="source" :src="path + image.id + image.extension">
          <a class="exit" @click="toggle(image.id)">Close</a>
        </div>
        <div class="thumbnail">
          <img class="source" :src="path + image.id + image.extension" @click="toggle(image.id)">
        </div>
        <div class="text">
          <h2 class="title">
            {{ image.title }}
          </h2>
          <p class="description">
            {{ image.description }}
          </p>
          <p class="size">
            {{ image.size }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ env, $axios }) {
    const result = await $axios.$get('https://api.tub-aiglart.com' + '/images')
    return {
      images: result.filter(image => image.displayed == true || image.displayed == 'true'),
      path: 'https://cdn.tub-aiglart.com' + '/images/'
    }
  },
  methods: {
    toggle(id) {
      const body = document.body
      const image = document.getElementById(`full-${id}`)
      if (image.style.display === 'flex') {
        image.style.display = 'none'
        image.style.top = '0'
        body.style.overflow = 'initial'
      } else {
        image.style.display = 'flex'
        image.style.top = window.scrollY + 'px'
        body.style.overflow = 'hidden'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  display: flex;
  flex-direction: column;

  .image {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: var(--black);
    margin: 25px 25px 0 25px;
    padding: 50px;
    box-shadow: var(--shadow-all);

    .full {
      position: absolute;
      display: none;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: var(--dark);
      z-index: 3;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .source {
        width: auto;
        height: auto;
        max-height: 100%;
        max-width: 100%;
      }

      .exit {
        z-index: 4;
        position: absolute;
        top: 25px;
        right: 25px;
        font-size: 25px;
        width: 150px;
        padding: 10px 5px;
        background: var(--light);
        color: var(--dark);
        font-weight: 700;
        font-family: var(--font-mono);
        text-align: center;
      }
    }

    .thumbnail {
      width: 50%;

      .source {
        width: auto;
        height: auto;
        max-height: 100%;
        max-width: 100%;

        &:hover {
          cursor: pointer;
          transform: scale(1.02);
        }
      }
    }

    .text {
      display: flex;
      flex-direction: column;
      padding: 0 50px;
      max-width: 40%;

      .title {
        font-size: 50px;
        font-weight: 700;
        font-family: var(--font-mono);
      }

      .description {
        font-size: 30px;
        margin: 10px 0;
      }

      .size {
        font-size: 20px;
        opacity: .75;
      }
    }
  }

  .image:last-child {
    margin: 25px;
  }
}

@media only screen and (max-width: 1250px) {
  .gallery {

    .image {
      flex-direction: column;

      .thumbnail {
        width: auto;
      }

      .text {
        max-width: 100%;
        padding: 20px 0 0 0;
      }
    }
  }
}

@media only screen and (max-width: 800px) {
  .gallery {

    .image {

      .text {

        .title {
          font-size: 30px;
        }

        .description {
          font-size: 20px;
        }

        .size {
          font-size: 15px;
        }
      }
    }
  }
}
</style>

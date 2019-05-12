<template>
  <div class="index">
    <div class="intro part">
      <div class="container">
        <img src="/img/portrait.jpg" class="portrait" alt="tub-portrait">
        <div class="text">
          <h1 class="title">
            Tujia Unho-Berger
          </h1>
          <p class="description">
            Tuija Unho-Berger, born in Helsinki, Finland; after high school diploma in 1963 practical work (silk-screen process) in the layout department of the film company Suomi-Filmi; lessons in painting by Ville Hänninen (painter and scene designer); courses in painting at the Free School of Arts in Helsinki; longer stays in Sweden, England and France (languages and art scene); residence in southern Bavaria/Germany; individual and group exhibitions in: Regensburg, Ingolstadt, Straubing, Pfaffenhofen, Kelheim, Mainburg, Geisenfeld, Neustadt a.d. Donau.
          </p>
        </div>
      </div>
    </div>
    <div class="exhibitions part">
      <div class="container">
        <ul class="collapsible">
          <li>
            <p class="head">
              <i class="fas fa-chevron-right icon" /> Head one group
            </p>
            <p class="body">
              Content one body
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="contact part">
      <div class="container">
        <h1>Contact (Google Maps, E-Mail, Phone)</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  mounted() {
    this.$nextTick(() => {
      const heads = document.getElementsByClassName('head')
      const bodies = document.getElementsByClassName('body')

      for (let i = 0; i < heads.length; i++) {
        heads.item(i).addEventListener('click', function () {
          this.classList.toggle('active')

          const body = bodies.item(i)
          const icon = this.children.item(0)

          if (body.style.display === 'block') {
            body.style.height = '0'
            icon.style.transform = 'rotate(0deg)'
            setTimeout(() => {
              body.style.display = 'none'
            }, 2000)
          } else {
            body.style.display = 'block'
            body.style.height = body.scrollHeight + 'px'
            icon.style.transform = 'rotate(90deg)'
          }
        })
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.index {
  padding: 10px 0;

  .part {
    padding: 10px 20px;
    display: flex;

    .container {
      display: flex;
      border-radius: var(--radius-medium);
      box-shadow: var(--shadow-all);
      padding: 20px;
    }
  }

  .intro {
    flex-direction: column;
    align-items: center;

    .container {
      background: var(--grey);
      padding: 50px;
      justify-content: center;
      align-items: center;

      .portrait {
        height: 350px;
        border-radius: var(--radius-medium);
        margin-right: 25px;
        box-shadow: var(--shadow-bottom);
        transition: var(--transition);

        &:hover {
          box-shadow: var(--shadow-all);
          transform: scale(1.01);
        }
      }

      .text {
        display: flex;
        flex-direction: column;
        padding: 10px;

        .title {
          font-size: 50px;
          font-weight: 700;
          margin-bottom: 5px;
        }

        .description {
          font-size: 20px;
          font-weight: 200;
        }
      }
    }
  }

  .exhibitions {

    .container {
      background: var(--light-dark);
      padding: 50px;

      .collapsible {
        border-top: 1px solid #ddd;
        border-right: 1px solid #ddd;
        border-left: 1px solid #ddd;
        border-radius: var(--radius-medium);
        box-shadow: var(--shadow-all);
        overflow: hidden;

        .head {
          background: var(--white);
          padding: 15px;
          font-size: 20px;
          font-weight: 300;
          border-bottom: 1px solid #ddd;
          display: flex;
          flex-direction: row;
          align-items: center;
          cursor: pointer;

          .icon {
            font-size: 15px;
            margin-right: 10px;
            transition: var(--transition);
          }
        }

        .active {

          .icon {
            transform: rotate(90deg);
          }
        }

        .body {
          background: var(--white);
          padding: 15px;
          font-size: 20px;
          font-weight: 300;
          border-bottom: 1px solid #ddd;
          height: 0;
          display: none;
          transition: height 0.2s ease-out;
        }
      }
    }
  }

  .contact {

    .container {
      background: var(--darker);
      padding: 50px;
    }
  }
}
</style>

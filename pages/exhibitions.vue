<template>
  <div class="exhibitions">
    <div class="wrapper">
      <div class="solo part">
        <table class="table">
          <thead class="head">
            <th class="value">
              Year
            </th>
            <th class="value">
              Name
            </th>
            <th class="value">
              Location
            </th>
          </thead>
          <tbody class="body">
            <tr v-for="entry in solo" :key="entry.id" class="content">
              <td class="value">
                {{ entry.year }}
              </td>
              <td class="value">
                {{ entry.name }}
              </td>
              <td class="value">
                {{ entry.location }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="group part">
        <table class="table">
          <thead class="head">
            <th class="value">
              Year
            </th>
            <th class="value">
              Name
            </th>
            <th class="value">
              Location
            </th>
          </thead>
          <tbody class="body">
            <tr v-for="entry in group" :key="entry.id" class="content">
              <td class="value">
                {{ entry.year }}
              </td>
              <td class="value">
                {{ entry.name }}
              </td>
              <td class="value">
                {{ entry.location }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="work part">
        <h2 class="title">
          published work
        </h2>
        <p class="description">
          in the RPA-Publishing company Landshut
        </p>
      </div>
      <div class="purchases part">
        <h2 class="title">
          purchases
        </h2>
        <p class="description">
          private collections
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ env, $axios }) {
    const result = await $axios.$get('/exhibitions')
    console.log(result) /* eslint-disable-line */
    return {
      solo: result.filter(exhibition => exhibition.type === 'solo').sort((a, b) => (a.year.includes('-') ? a.year.split('-')[0] : a.year) - (b.year.includes('-') ? b.year.split('-')[0] : b.year)),
      group: result.filter(exhibition => exhibition.type === 'group').sort((a, b) => (a.year.includes('-') ? a.year.split('-')[0] : a.year) - (b.year.includes('-') ? b.year.split('-')[0] : b.year))
    }
  }
}
</script>

<style lang="scss" scoped>
.exhibitions {
  display: flex;
  flex-direction: column;
  padding: 25px;

  .wrapper {

    .part {
      display: flex;
      flex-direction: column;
      background: var(--black);
      box-shadow: var(--shadow-all);
      padding: 50px;
      margin-bottom: 25px;

      .table {
        width: 100%;

        .head {

          .value {
            font-size: 25px;
            font-weight: 700;
            font-family: var(--font-mono);
            text-align: left;
          }
        }

        .body {

          .content {
            border-top: 1px solid var(--light);

            .value {
              font-size: 20px;
              opacity: .95;
              padding: 4px 4px 4px 0;
            }
          }
        }
      }

      .title {
        font-size: 25px;
        font-weight: 700;
        font-family: var(--font-mono);
        margin-bottom: 10px;
      }

      .description {
        font-size: 20px;
      }
    }

    .part:last-child {
      margin-bottom: 0;
    }
  }
}

@media only screen and (max-width: 750px) {
  .exhibitions {

    .wrapper {

      .part {
        padding: 25px;

        .table {

          .head {

            .value {
              font-size: 20px;
            }
          }

          .body {

            .content {

              .value {
                font-size: 15px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

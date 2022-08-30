<template>
  <div>
    <DesktopNav />
    <v-container v-if="ab1_product">
      <v-row justify="center" v-for="item in ab1_product" :key="item.id">
        <v-col cols="11" md="7">
          <h2 class="text-center text-md-h4 font-weight-bold">
            {{ item.name }}
          </h2>
          <br />
          <v-img max-width="500" class="el rounded-lg" k-max-length="600" :src="item.image_url"></v-img>
          <br />
          <h3 class="text-md-h5 text-subtitle-1 primary--text mt-5">
            axions type : {{ item.name }}
          </h3>
          <h3 class="text-md-h5 text-subtitle-1 primary--text mt-5">Axions amount:
            {{ item.amount }}
          </h3>
          <h3 class="text-md-h5 text-subtitle-1 primary--text mt-5">
            selling price : ET BIRR {{ item.price }}
          </h3>

          <v-btn nuxt to="/orders" class="text-capitalize" color="primary">Buy Axions</v-btn>
        </v-col>
        <v-col>
          <h3>
            <h2 class="text-md-h5 text-subtitle-1 primary--text mt-5">About :{{ item.name }}</h2>
            {{ item.descriptions }}
          </h3>
        </v-col>
      </v-row>

    </v-container>
    <br /><br />

  </div>
</template>

<script>
import product from '~/apollo/queries/fetchAxionById'
export default {
  apollo: {
    ab1_product: {
      query: product,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      },

    }
  },
  head() {
    return {
      title: 'Articles by Author'
    }
  }
}
</script>

<style>
</style>
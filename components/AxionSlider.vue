<template>
  <v-container>
    <h1 class="text-md-h4 text-h6">Check these out 🔥</h1>
    <br><br><br><br><br><br><br>
    <v-row>
      <template v-for="(p, i) in product">
        <v-fade-transition>
          <v-col cols="12" sm="6" md="6" lg="4" :key="i">
            <v-hover v-slot="{ hover }" open-delay="200">
              <v-card :elevation="hover ? 16 : 3" :class="{ 'on-hover': hover }" class="mx-auto" height="350"
                max-width="350" nuxt :to="`/axions/${p.id}`" color="surface" width="300">
                <v-img :src="p.image_url" height="180" wid="300">
                  <template #placeholder>
                    <v-row class="fill-height" justify="center" align="center">
                      <v-progress-circular width="2" size="100" color="primary" indeterminate>
                      </v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <v-card-title class="text-md-body-1 font-weight-bold">{{
                    p.name
                }}</v-card-title>
                <v-card-subtitle class="primary--text pb-3">
                  <h3 class="font-weight-bold" color="green">Amount : ET BIRR {{ p.name }}</h3>
                </v-card-subtitle>
                <v-card-subtitle class="primary--text pb-3">
                  <h3 class="font-weight-bold" color="green">Sale Price : ET BIRR {{ p.price }}</h3>
                </v-card-subtitle>
                <v-card-actions>

                  <v-btn color="primary" class="font-weight-bold">
                    <h3> details</h3>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
        </v-fade-transition>
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {

  data() {
    return {
      product: [],
      search: null,
    };
  },

  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$apollo.query({
        query: require('~/apollo/queries/fetchAxions'),
      }).then(rs => {
        this.product = rs.data.ab1_product
        console.log(rs);
      }).catch(error => {
        console.log(error);
      });
    },

  },


};
</script>

<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>
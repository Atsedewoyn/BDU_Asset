<template>
  <div>
    <v-app-bar color="surface" height="100" elevation="3" flat class="el" :style="{
      padding: $vuetify.breakpoint.mdAndUp ? '0px 30px' : '',
    }" app>
    
      <v-spacer />
      <v-list class="">
        <v-list-item class="responsiveMenu">
          <v-list-item-title class="res">
            <nuxt-link class="link black--text " to="/">Home</nuxt-link>
          </v-list-item-title>
          <v-spacer />
          <v-list-item-title class="res">
            <nuxt-link class="link black--text" to="/product">Products</nuxt-link>
          </v-list-item-title>
          <v-spacer />
          <v-list-item-title class="res">
            <nuxt-link class="link black--text" to="/orders">order</nuxt-link>
          </v-list-item-title>
          <v-spacer />

          <v-list-item-title class="res">
            <nuxt-link class="link black--text" to="/about">AboutUs</nuxt-link>
          </v-list-item-title>
          <v-spacer />
          <v-list-item-title class="res">
            <nuxt-link class="link con black--text mr-2" to="/contact">ContactUs</nuxt-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>

      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-list>
              <v-list-item>
                <v-list-item-title class="" v-bind="attrs" v-on="on">
                  <v-app-bar-nav-icon v-on="on" class="d-sm-flex d-md-none " color="black"></v-app-bar-nav-icon>
                </v-list-item-title>

              </v-list-item>
            </v-list>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>
                <nuxt-link class="link" to="/">
                  Home</nuxt-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <nuxt-link class="link" to="/product">
                  Products
                </nuxt-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <nuxt-link class="link" to="/orders">
                  order
                </nuxt-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <nuxt-link class="link" to="/about">
                  Aboutus</nuxt-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <nuxt-link class="link" to="/contact">
                  ContactUs
                </nuxt-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-spacer />
      <v-spacer />
      <v-spacer />

      <v-spacer />

      <v-list>
        <v-list-item class="responsiveMenu">
          <v-list-item-title class="res">
            <nuxt-link class="link black--text" to="/login">Sign in</nuxt-link>
          </v-list-item-title>
          <v-spacer />
        </v-list-item>
      </v-list>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },

};
</script>
<style scoped>
.link {
  font-size: 18px;
  margin: 10px;
  color: rgb(0, 0, 0);
  text-decoration: none;
  padding: 10px;
}

.link:hover {
  background-color: rgb(205, 218, 213);
  font-size: 22px;
}

.con {
  margin-right: 20px;
}
</style>
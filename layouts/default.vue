<template>
  <v-app dark :style="{ backgroundColor: $vuetify.theme.dark ? '#0a0514' : 'white' }">
    <v-app-bar app>
      <Nav />
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer>
      <Footer />
      <ScrollTop />
    </v-footer>
  </v-app>
</template>

<script>
import Nav from '~/components/Desktop/Nav.vue';
export default { components: { Nav } };
</script>

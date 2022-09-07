<template>
  <div class="dashboard">
    <v-subheader class="d-flex justify-space-between align-center">
      <h1>Dashbaord</h1>
      <v-btn color="success" class="rounded-lg">
        View Orders
      </v-btn>
    </v-subheader>
    <br>
    <br>
    <ViewOrders />
    <br>
    <br>
    <ViewUsers />

  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  }

}
</script>

<style scoped>
</style>
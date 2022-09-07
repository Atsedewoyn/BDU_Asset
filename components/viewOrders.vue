<template>
        <v-row class="mx-10">
                  <v-col lg="12" cols="12" md="12"> 
                <v-card>
                 <v-card-title>
                    Ordered Products
                    <v-spacer></v-spacer>
                    <v-text-field
                      v-model="search"
                      append-icon="mdi-magnify"
                      label="Search"
                      single-line
                      hide-details
                    ></v-text-field>
                  </v-card-title>
                  <v-data-table
                   caption="Recent Orders"
                  :headers="headers"
                  :items="orders"
                  :items-per-page="5"
                  class="elevation-1"
                  :search="search"
                >
                <template v-slot:item.edit ="{item,index}">
                  <v-btn @click="getEdit(item, index)" color="success" class="mr-0"  icon>
                    <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                </template>
                <template v-slot:item.delete="{item,index}">
                  <v-btn @click="openConfigDelte(item, index)" color="error" class="mr-0"  icon>
                    <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </template>
                </v-data-table>  
                </v-card>  
                      <v-dialog v-model="showEdit" persistent :overlay="false" max-width="500px" transition="dialog-transition">
                          <v-card class="text-center">
                              <v-card-title class="text-h5 grey lighten-2">
                                  Edit Order
                              
                              </v-card-title>
                              <v-card-text>
                                  <v-text-field v-model="order_edit.name" label="Full Name" required>
                                  </v-text-field>
                                  <v-text-field v-model="order_edit.phone" label="Order type" required>
                                  </v-text-field>
                                  <v-text-field v-model="order_edit.email" label="Order amount" required>
                                  </v-text-field>
                                  <v-text-field v-model="order_edit.faculity" label="Phone Number" required>
                                  </v-text-field>
                                  <v-text-field v-model="order_edit.description" label="Buying_price" required>
                                  </v-text-field>
                  
                              </v-card-text>
                              <v-divider></v-divider>
                              <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn @click="editOrders" color="success">Save</v-btn>
                                  <v-btn @click="showEdit = !showEdit" color="error">Cancel</v-btn>
                              </v-card-actions>
                          </v-card>
                      </v-dialog>
                      <v-dialog v-model="deleteForm" persistent :overlay="false" max-width="400px" transition="dialog-transition">
                          <v-card>
                              <v-card-title class="text-h5 grey lighten-2">
                                  <h3>Are you sure to delete thisorders </h3>
                              </v-card-title>
                              <v-card-text>
                                  <h3>user Name {{order_edit.name }}</h3>
                                  <h3> phone_number   {{order_edit.phone }}</h3>
                                  <h3>user email {{order_edit.email }}</h3>
                                  <h3>faculity  {{order_edit.faculity }}</h3>
                                  <h3>decription   {{order_edit.decription }}</h3>
                                 
                              </v-card-text>
                              <v-divider></v-divider>
                              <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn @click="deleteForm = !deleteForm" text color="secoundary">cancel</v-btn>
                                  <v-btn @click="deleteOrders" color="error">delete</v-btn>
                              </v-card-actions>
                          </v-card>
                      </v-dialog>
                       </v-col>
                      </v-row>
              </template>
              <script>
              import mutationOrders from '~/apollo/mutations/orders_mutations'
              export default {
                  layout: 'blank',
                  data() {
                      return {
                         search: '',
                        headers: [
                        {
                          text: 'product Id',
                          align: 'start',
                          sortable: false,
                          value: 'id',
                        },
                        { text: 'User Name', value: 'name' },
                        { text: 'phone number', value: 'phone' },
                        { text: 'user email ', value: 'email' },
                        { text: ' faculity', value: 'faculity' },
                        { text: 'product description', value: 'description' },
                        { text: 'Edit', value: 'edit' },
                        { text: 'Delete', value: 'delete' },
                      ],
                          orders: [],
                         order_form: {
                            name:'',
                            phone: '',
                           email: '',
                           faculity:'',
                           description: '',
                          },
                         order_edit: {
                              name:'',
                              phone: '',
                              email: '',
                              faculity:'',
                              description: '',
                             
                          },
                          showAdd: false,
                          showEdit: false,
                          deleteForm: false,
                      }
                  },
                  mounted() {
                      this.getData()
                  },
                  methods: {
                      getData() {
                          this.$apollo.query({
                              query: require('~/apollo/queries/fetchOrders'),
                          }).then(rs => {
                              this.orders = rs.data.orders
                              console.log(rs);
                          }).catch(error => {
                              console.log(error);
                          });
                      },
                      getEdit(item,index) {
                          this.index=index,
                          this.showEdit = true;
                          this.order_edit = item;
                      },
                      editOrders() {
                          this.$apollo
                              .mutate({
                                  mutation: mutationOrders.update_orders,
                                  variables: {
                                       name: this.order_edit.name,
                                       phone: this.order_edit.phone,
                                       email: this.order_edit.email,
                                       faculity: this.order_edit.faculity,
                                       description: this.order_edit.description,
                                       
                                  }
                              })
                              .then(rs => {
                                  this.showEdit = false;
                              })
                              .catch(er => {
                                  console.log(er);
                              });
                      },
                      openConfigDelte(item, index) {
                          this.index = index,
                              this.order_edit = item,
                              this.deleteForm = true
                      },
                      deleteOrders() {
                          this.$apollo
                              .mutate({
                                  mutation: mutationOrders.delete_orders,
                                  variables: {
                                      id: this.order_edit.id,
                                  }
                              })
                              .then(rs => {
                                  this.deleteForm = false;
                                  this.orders.splice(this.index, 1)
                              })
                              .catch(er => {
                                  console.log(er);
                              });
                      }
                  },
              }
              </script>
              <style scoped>
              table, td, th {  
                border: 1px solid #ddd;
                text-align: left;
              }
                
              table {
                border-collapse: collapse;
                width: 100%;
              }
              th, td {
                padding: 15px;
              }
              </style>
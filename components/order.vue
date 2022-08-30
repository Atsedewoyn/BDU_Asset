<template>
    <v-row class="mx-10">
        <v-col lg="8" cols="12" md="8">
            <table>
                <thead>
                    <tr>
                        <th>Axion Id</th>
                        <th>Full Name</th>
                        <th>Axion Type</th>
                        <th>Axion Amount</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Time</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in orders" :key="item.id">
                        <td>
                            <nuxt-link :to="`/axions/${item.id}`">{{ item.id }}</nuxt-link>
                        </td>
                        <td>{{ item.full_name }}</td>
                        <td>{{ item.axions_type }}</td>
                        <td>{{ item.axions_amount }}</td>
                        <td>{{ item.phone_number }}</td>
                        <td>{{ item.address }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.created_at }}</td>
                        <td>
                            <v-btn @click="getEdit(item, index)" color="success" icon>
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </td>
                        <td>
                            <v-btn @click="openConfigDelte(item, index)" color="error" icon dark>
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </td>
                    </tr>
                </tbody>
            </table>
            <v-dialog v-model="showEdit" persistent :overlay="false" max-width="500px" transition="dialog-transition">
                <v-card class="text-center">
                    <v-card-title class="text-h5 grey lighten-2">
                        Edit Order
                    </v-card-title>
                    <v-card-text>
                        <v-text-field v-model="axion_edit.name" label="Full Name" required>
                        </v-text-field>
                        <v-text-field v-model="axion_edit.axion_type" label="Axion type" required>
                        </v-text-field>
                        <v-text-field v-model="axion_edit.axion_amount" label="Axion amount" required>
                        </v-text-field>
                        <v-text-field v-model="axion_edit.phone_number" label="Phone Number" required>
                        </v-text-field>
                        <v-text-field v-model="axion_edit.address" label="Address" required>
                        </v-text-field>
                        <v-text-field v-model="axion_edit.email" label="Email" required>
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
                        <h3>Are you sure to delete this axions </h3>
                    </v-card-title>
                    <v-card-text>
                        <h3>Full Name {{ axion_edit.name }}</h3>
                        <h3>Axion type {{ axion_edit.axion_type }}</h3>
                        <h3>Axion Amount {{ axion_edit.axion_amount }}</h3>
                        <h3>Phone Number {{ axion_edit.phone_number }}</h3>
                        <h3>Address {{ axion_edit.address }}</h3>
                        <h3>Email {{ axion_edit.email }}</h3>
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
            orders: [],
            axion_form: {
                name: '',
                axion_type: '',
                axion_amount: '',
                phone_number: '',
                address: '',
                email: '',
            },
            axion_edit: {
                name: '',
                axion_type: '',
                axion_amount: '',
                phone_number: '',
                address: '',
                email: '',
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
                query: require('~/apollo/queries/fetchorders'),
            }).then(rs => {
                this.orders = rs.data.orders
                console.log(rs);
            }).catch(error => {
                console.log(error);
            });
        },
        getEdit(item) {
            this.showEdit = true;
            this.axion_edit = item;
        },
        editOrders() {
            this.$apollo
                .mutate({
                    mutation: mutationOrders.insert_orders,
                    variables: {
                        name: this.axion_edit.name,
                        axion_type: this.axion_edit.axion_type,
                        axion_amount: this.axion_edit.axion_amount,
                        phone_number: this.axion_edit.phone_number,
                        address: this.axion_edit.address,
                        email: this.axion_edit.email,
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
                this.axion_edit = item,
                this.deleteForm = true

        },
        deleteOrders() {
            this.$apollo
                .mutate({
                    mutation: mutationOrders.delete_orders,
                    variables: {
                        id: this.axion_edit.id,
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
table,
td,
th {
    border: 1px solid #ddd;
    text-align: left;
}


table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    padding: 10px;
}
</style>
<template>

    <div class="deco">
        <v-container grid-list-xs>
            <v-row justify="center">
                <v-card class="text-center mx-15 my-5 px-15" width="600">
                    <v-card-title class="text-h5">
                    Order your needs
                    </v-card-title>
                    <v-card-text>
                        <v-text-field name=" name" label="full name" v-model="username" :counter="10" :rules="nameRules"
                            outlined required>
                        </v-text-field>
                        <v-text-field v-model="email" :rules="emailRules" label="E-mail" outlined required>
                        </v-text-field>
                       
                        <v-text-field v-model="faculity" :rules="faculityRules" label="faculity" outlined required>
                        </v-text-field>
                        <v-text-field v-model="phone" :rules="phoneRules" label="phone_number" outlined required>
                        </v-text-field>
                        <v-text-field v-model="description" :rules="phoneRules" label="phone_number" outlined required>
                        </v-text-field>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="insertOrders " color="success">Submit</v-btn>
                    </v-card-actions>

                </v-card>
            </v-row>
            <br>
            <br>
            <br>
            <br>
            <productslider />
        </v-container>
    </div>
</template>

<script>
import mutationOrders from '~/apollo/mutations/orders_mutations'

export default {
    layout: 'blank',
    data() {
        return {
            show1: false,
            orders: [],
            description: '',
            paswordRules: [
                v => (v && v.length >= 8) || 'Min 8 characters',
            ],
            username: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 20) || 'Name must be less than 10 characters',
            ],
         faculity: '',
         faculityRules: [
              
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            phone: '',
            phoneRules: [
                v => !!v || 'phone_number is required',
                v => (v && v.length <= 10) || 'Name must be less than 11 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],

        }
    },

    methods: {
        insertOrders() {
            this.$apollo.mutate({
                mutation: mutationOrders.insert_orders,
                variables: {
                    username: this.username,
                    phone: this.phone,
                    description: this.description,
                    faculity: this.faculity,
                    email: this.email,
                }
            }).then(rs => {
                this.orders.push(rs.data.insert_orders)
                console.log(rs)
                
            }).catch(error => {
                console.log(error)
            })
        },
        
    },
}
</script>
<style scoped>
</style>
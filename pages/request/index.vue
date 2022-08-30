<template>

    <div>
        <DesktopNav />
        <v-container grid-list-xs>
            <v-row justify="center">
                <v-card class="text-center mx-15 my-5 px-15" width="600">
                    <v-card-title class="text-h5">
                        please add what you want to buy
                    </v-card-title>
                    <v-card-text>
                        <v-text-field name="full name" label="full name" v-model="fullname" :rules="nameRules" outlined>
                        </v-text-field>
                        <v-text-field name="axion type" label="axion type" v-model="axion_type" :rules="axion_typeRules"
                            outlined required>
                        </v-text-field>
                        <v-text-field name="axion amount" label="axion amount" v-model="axion_amount"
                            :rules="axion_amountRules" outlined required>
                        </v-text-field>
                        <v-text-field name="phone" label="Phone number" v-model="phone_number"
                            :rules="phone_numberRules" outlined required>
                        </v-text-field>
                        <v-text-field name="address" label="Your address" v-model="address" :rules="addressRules"
                            outlined>
                        </v-text-field>
                        <v-text-field v-model="email" :rules="emailRules" label="E-mail" outlined></v-text-field>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="insertOrders" color="success">Submit</v-btn>
                    </v-card-actions>
                </v-card>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import mutationOrders from '~/apollo/mutations/request_mutations'
export default {
    layout: 'blank',
    data() {
        return {
            orders: [],
            valid: true,
            fullname: '',
            nameRules: [
                v => !!v || 'Name is required',
            ],
            axion_type: '',
            axion_typeRules: [
                v => !!v || 'Axion type is required',
            ],
            axion_amount: '',
            axion_amountRules: [
                v => !!v || 'Axion amount is required',
            ],
            phone_number: '',
            phone_numberRules: [
                v => !!v || 'Phone number is required',
            ],
            address: '',
            addressRules: [
                v => !!v || 'Phone number is required',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],

        }
    },
    methods: {
        insertOrders() {
            this.$apollo.mutate({
                mutation: mutationOrders.insert_request_tables,
                variables: {
                    full_name: this.fullname,
                    axions_type: this.axion_type,
                    axions_amount: this.axion_amount,
                    phone_number: this.phone_number,
                    address: this.address,
                    email: this.email,
                }
            }).then(rs => {
                this.orders.push(rs.data.insert_request_tables)
                this.$swal({
                    toast: true,
                    text: "Your request is successful",
                    icon: "success",
                    timer: 6000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    position: "top-end",
                });


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
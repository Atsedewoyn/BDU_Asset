<template>
    <div>

        <v-container class="text-center pa-md-10 pa-10 abcd blue-grey lighten-5">
            <v-card rounded="lg" class="pa-md-10 pa-5 text-center">
                <h2 class="text-md-h3">Contact Us</h2>
                <p class="text-md-h6 mt-5">Contact Us for more information</p>
                <br />
                <v-sheet color="transparent" class="mx-auto" max-width="400">
                    <v-text-field v-model="full_name" color="dark" label="full name" :rules="nameRules" outlined>
                    </v-text-field>
                    <v-text-field v-model="email" color="dark" label="Email" :rules="emailRules" outlined>
                    </v-text-field>
                    <v-text-field v-model="phone_number" color="dark" label="phone_number" :rules="phoneRules" outlined>
                    </v-text-field>
                    <v-text-field v-model="address" color="dark" label="address" :rules="addressRules" outlined>
                    </v-text-field>
                    <v-textarea v-model="comments" color="dark" label="comments" :rules="commentsRules" outlined>
                    </v-textarea>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="insertContacts" color="success">Submit</v-btn>
                    </v-card-actions>
                </v-sheet>
            </v-card>
        </v-container>
        <br><br><br><br /><br><br><br><br />
        <AxionSlider />
    </div>
</template>

<script>
import mutationContacts from '~/apollo/mutations/contact_mutations'
export default {
    data() {
        return {
            contacts: [],
            full_name: '',
            nameRules: [
                v => !!v || 'Name is required',
            ],
            email: '',
            emailRules: [
                v => !!v || 'email is required',
            ],
            address: '',
            addressRules: [
                v => !!v || 'email is required',
            ],
            phone_number: '',
            phoneRules: [
                v => !!v || 'phone is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            comments: '',
            commentsRules: [
                v => !!v || 'write your comment',
            ],
        };
    },
    methods: {
        insertContacts() {
            this.$apollo.mutate({
                mutation: mutationContacts.insert_contacts,
                variables: {
                    address: this.address,
                    comments: this.comments,
                    email: this.email,
                    full_name: this.full_name,
                    phone_number: this.phone_number
                }
            }).then(rs => {
                this.contacts.push(rs.data.insert_contacts)
                this.$swal({
                    toast: true,
                    text: "Your comments is successful",
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



    }
}

</script>

<script setup>

</script>

<style>
</style>

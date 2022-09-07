<template>

    <div class="deco">
        <v-container grid-list-xs>
            <v-row justify="center">
                <v-card class="text-center mx-15 my-5 px-15" width="600">
                    <v-card-title class="text-h5">
                        Sign Up
                    </v-card-title>
                    <v-card-text>
                        <v-text-field name=" name" label="full name" v-model="name" :counter="10" :rules="nameRules"
                            outlined required>
                        </v-text-field>
                        <v-text-field v-model="email" :rules="emailRules" label="E-mail" outlined required>
                        </v-text-field>
                        <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="paswordRules" :type="show1 ? 'text' : 'password'" name="input-10-1"
                            label="Your Password" hint="At least 8 characters" counter @click:append="show1 = !show1"
                            outlined></v-text-field>
                        <v-text-field v-model="faculity" :rules="faculityRules" label="faculity" outlined required>
                        </v-text-field>
                        <v-text-field v-model="phone" :rules="phoneRules" label="phone_number" outlined required>
                        </v-text-field>

                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="insertUsers" color="success">Submit</v-btn>
                    </v-card-actions>

                </v-card>
            </v-row>
            <br>
            <br>
            <br>
            <br>
            <AxionSlider />
        </v-container>
    </div>
</template>

<script>
import mutationUser from '~/apollo/mutations/users_mutations'
import bcrypt from 'bcryptjs';
export default {
    layout: 'blank',
    data() {
        return {
            show1: false,
            users: [],
            password: '',
            paswordRules: [
                v => (v && v.length >= 8) || 'Min 8 characters',
            ],
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 20) || 'Name must be less than 10 characters',
            ],
         faculity: '',
         faculityRules: [
                v => !!v || 'faculity is required',
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
        insertUsers() {
            this.$apollo.mutate({
                mutation: mutationUser.insert_user,
                variables: {
                    name: this.name,
                    email: this.email,
                    faculity: this.faculity,
                    phone: this.phone,
                    password: this.encryptPassword(this.password),
                }
            }).then(rs => {
                this.user.push(rs.data.insert_user)
                console.log(rs)
                console.log(this.encryptPassword(this.password))
                this.$router.push('/login')
                this.name = ''
                this.email = '',
                    this.password = ''
            }).catch(error => {
                console.log(error)
            })
        },
        encryptPassword(password) {
            const salt = bcrypt.genSaltSync(10)
            return bcrypt.hashSync(password, salt)
        }
    },
}
</script>
<style scoped>
</style>
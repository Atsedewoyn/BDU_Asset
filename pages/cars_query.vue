<template>
    <div class="dev1">
        <h1>Hi there how are you </h1>
        <div>
            <v-container grid-list-xs>
                <v-btn @click="showAdd = !showAdd" color="success" absolute icon top right>
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
                <v-flex v-if="showAdd">
                    <v-text-field v-model="car_form.car_name" name="car_name" label="car name" outlined>
                    </v-text-field>
                    <v-text-field v-model="car_form.car_model" name="car_model" label="car model" outlined>
                    </v-text-field>
                    <v-text-field v-model="car_form.car_brand" name="car_brand" label="car brand" outlined>
                    </v-text-field>
                    <v-text-field v-model="car_form.car_type" name="car_type" label="car type" outlined>
                    </v-text-field>
                    <v-btn @click="saveAction" color="success">Save</v-btn>
                    <v-btn @click="showAdd = !showAdd" color="error">Cancel</v-btn>
                </v-flex>
                <v-layout>
                </v-layout>
                <table>
                    <thead>
                        <tr>
                            <th>car_ID</th>
                            <th>car_brand</th>
                            <th>car_model</th>
                            <th>car_name</th>
                            <th>car_type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in cars" :key="item.id">
                            <nuxt-link :to="`/article/${item.ID}`">{{ item.ID }}</nuxt-link>
                            <td>{{ item.car_name }}</td>
                            <td>{{ item.car_brand }}</td>
                            <td>{{ item.car_model }}</td>
                            <td>{{ item.car_type }}</td>
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
            </v-container>
        </div>
        <v-dialog v-model="showEdit" persistent :overlay="false" max-width="500px" transition="dialog-transition">
            <v-card class="text-center">
                <v-card-title class="text-h5 grey lighten-2">
                    edite cars
                </v-card-title>
                <v-card-text>
                    <v-text-field v-model="car_edit.car_name" label="car name" required>
                    </v-text-field>
                    <v-text-field v-model="car_edit.car_model" label="car model" required>
                    </v-text-field>
                    <v-text-field v-model="car_edit.car_brand" label="car brand" required>
                    </v-text-field>
                    <v-text-field v-model="car_edit.car_type" label="car type" required>
                    </v-text-field>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="updateAction" color="success">Save</v-btn>
                    <v-btn @click="showEdit = !showEdit" color="error">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="deleteForm" persistent :overlay="false" max-width="400px" transition="dialog-transition">
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    <h3>are you sure to delete this cars </h3>
                </v-card-title>
                <v-card-text>
                    <h3>car_name{{ car_edit.car_name }}</h3>
                    <h3>card_brand{{ car_edit.car_brand }}</h3>
                    <h3>card_model{{ car_edit.car_model }}</h3>
                    <h3>card_type{{ car_edit.car_type }}</h3>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="deleteForm = !deleteForm" text color="secoundary">cancel</v-btn>
                    <v-btn @click="deteCars" color="error">delete</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import mutationCars from '~/apollo/mutations/cars_mutations'
export default {
    layout: 'blank',
    data() {
        return {
            cars: [],
            car_form: {
                car_name: '',
                car_brand: '',
                car_model: '',
                car_type: '',
            },
            car_edit: {
                car_name: '',
                car_brand: '',
                car_model: '',
                car_type: '',

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
                query: require('~/apollo/queries/fetchAuthor'),
            }).then(rs => {
                this.cars = rs.data.cars
                console.log(rs);
            }).catch(error => {
                console.log(error);
            });
        },
        saveAction() {
            this.$apollo.mutate({
                mutation: mutationCars.insert_cars,
                variables: {
                    car_name: this.car_form.car_name,
                    car_brand: this.car_form.car_brand,
                    car_model: this.car_form.car_model,
                    car_type: this.car_form.car_type,
                }
            }).then(rs => {
                this.showAdd = false
                this.cars.push(rs.data.insert_cars.returning[0])
                console.log(rs)
            }).catch(error => {
                console.log(error)
            })
        },
        getEdit(item) {
            this.showEdit = true;
            this.car_edit = item;
        },
        updateAction() {
            this.$apollo
                .mutate({
                    mutation: mutationCars.insert_cars,
                    variables: {
                        car_name: this.car_edit.car_name,
                        car_model: this.car_edit.car_model,
                        car_brand: this.car_edit.car_brand,
                        car_type: this.car_edit.car_type,
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
                this.car_edit = item,
                this.deleteForm = true
        },
        deteCars() {
            this.$apollo
                .mutate({
                    mutation: mutationCars.delete_cars,
                    variables: {
                        id: this.car_edit.ID,
                    }
                })
                .then(rs => {
                    this.deleteForm = false;
                    this.cars.splice(this.index, 1)
                })
                .catch(er => {
                    console.log(er);
                });

        }
    },
}
</script>

<style scoped>
</style>  


 
<template>

    <div class="deco">
        <v-container grid-list-xs>
            <v-row justify="center">
                <v-card class="text-center mx-15 my-5 px-15" width="600">
                    <v-card-title class="text-h5">
                        Add your products
                    </v-card-title>
                    <v-card-text>
                        <v-text-field name=" name" label="product name" v-model="name" 
                            outlined required>
                        </v-text-field>
                        <v-text-field v-model="category"  label="categorry" outlined required>
                        </v-text-field>
                       
                        <v-text-field v-model="price"  label="price" outlined required>
                        </v-text-field>
                        <v-text-field v-model="description"  label="description" outlined required>
                        </v-text-field>
                        <v-text-field v-model="gallery" type="file" label="product URL" outlined required>
                        </v-text-field>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="insertGallery" color="success">Submit</v-btn>
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
import mutationProduct from '~/apollo/mutations/product_mutations'

export default {
    layout: 'blank',
    data() {
        return {
            show1: false,
            product: [],
            

        }
    },

    methods: {
        insertGallery() {
            this.$apollo.mutate({
                mutation: mutationProduct.insert_product,
                variables: {
                    name: this.name,
                    category: this.category,
                    price: this.price,
                    description: this.description,
                    gallery: this.gallery,
                }
            }).then(rs => {
                this.product.push(rs.data.insert_product)
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
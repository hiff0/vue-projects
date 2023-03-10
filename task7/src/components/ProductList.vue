<template>
    <div>
        <h1>Products</h1>
        <div class="row">
            <div class="col col-sm-4">
                <div v-for="product in productList">
                    <router-link tag="h3" :to="'/products/' + product.id_product">
                        <a>{{ product.title }} </a>
                    </router-link>
                    <div> {{ product.price }}</div>
                    <button class="btn btn-primary" v-if="cardProducts.indexOf(product.id_product) === -1"
                        @click="addToCard(product.id_product)">Add to card</button>
                    <button class="btn btn-warning" v-else @click="removeFromCard(product.id_product)">Remove to
                        card</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('products', {
            productList: 'items'
        }),
        ...mapGetters('card', {
            cardProducts: 'products'
        }),
    },
    methods: {
        ...mapActions('card', {
            addToCard: 'add',
            removeFromCard: 'remove'
        })
    },
    // created() {
    //     console.log('created')
    //     this.$store.dispatch('products/loadItems');
    // }
}
</script>

<style scoped>
.row {
    padding-left: 15px;
}
</style>
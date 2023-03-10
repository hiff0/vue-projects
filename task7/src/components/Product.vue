<template>
    <div>
        <h1>Product page</h1>
        <router-link :to="{ name: 'products' }">Back to products</router-link>
        <hr>
        <div class="alert alert-success"></div>
        {{ product.title }}
        <br>
        {{ product.price }}
        <br>
        <button class="btn btn-primary" v-if="cardProducts.indexOf(product.id_product) === -1"
            @click="addToCard(product.id_product)">Add to card</button>
        <button class="btn btn-warning" v-else @click="removeFromCard(product.id_product)">Remove to
            card</button>
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
        id() {
            return this.$route.params.id;
        },
        product() {
            return this.$store.getters['products/item'](this.id)
        }
    },
    methods: {
        ...mapActions('card', {
            addToCard: 'add',
            removeFromCard: 'remove'
        })
    }
}
</script>
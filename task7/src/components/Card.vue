<template>
    <div>
        <h1>Card</h1>
        <hr>
        <div v-if="empty" class="alert alert-warning">Your card is empty</div>
        <template v-else>
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products">
                        <td>{{ product.title }}</td>
                        <td>{{ product.price }}</td>
                    </tr>
                </tbody>
            </table>
            <button class="btn btn-success" @click="onOrder">Order Now</button>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('products', {
            productAll: 'items'
        }),
        ...mapGetters('card', {
            productInCard: 'products'
        }),
        products() {
            return this.productAll.filter((product) => this.productInCard.indexOf(product.id_product) !== -1)
        },
        empty() {
            return this.products.length === 0;
        }
    },
    methods: {
        onOrder() {
            this.$router.push('/checkout')
        }
    }
}
</script>
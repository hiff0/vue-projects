<template>
    <div>
        <h1>Product page</h1>
        <router-link :to="{ name: 'products' }">Back to products</router-link>
        <hr>
        <div class="alert alert-success"></div>
        {{ product.title }}
        {{ product.price }}
    </div>
</template>

<script>
export default {
    computed: {
        id() {
            return this.$route.params.id;
        },
        product() {
            return this.$store.getters['products/item'](this.id)
        }
    }
}
</script>
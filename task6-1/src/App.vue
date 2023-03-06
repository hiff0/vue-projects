<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="row">
          <div class="col col-sm-12">
            <h1>Site</h1>
            <app-card></app-card>
          </div>
        </div>
      </div>
    </header>
    <section>
      <div class="container">
        <div class="row">
          <div class="col col-sm-12">
            <app-product></app-product>
            <hr>
            <div class="from-grup">
              <label for="name">{{ name }}</label>
              <input type="text" id="name" class="form-control" v-model="name">
            </div>
            <div class="from-grup">
              <label for="phone">{{ phone }}</label>
              <input type="text" id="phone" class="form-control" v-model="phone">
            </div>
            <button class="btn btn-primary mt-3" :disabled="btnDisabled" @click="onOrder">Order Now</button>
            <div class="alert alert-success mt-3" v-if="showResult">
              Your order is done!
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Card from './components/Card.vue';
import Product from './components/Product.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'app',
  components: {
    'app-card': Card,
    'app-product': Product
  },
  data() {
    return {
      name: '',
      phone: ''
    }
  },
  computed: {
    ...mapGetters([
      'cnt',
      'orderState'
    ]),
    btnDisabled() {
      return this.cnt < 1 || this.orderState !== null;
    },
    showResult() {
      return this.orderState === 'done';
    }
  },
  methods: {
    ...mapMutations([
      'send'
    ]),
    onOrder() {
      this.$store.dispatch('sendOrder', {
        name: this.name,
        phone: this.phone
      })
    }
  }
}
</script>

<style></style>

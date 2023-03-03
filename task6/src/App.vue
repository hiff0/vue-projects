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
            <h1>Site</h1>
            <app-product></app-product>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Card from './components/Card.vue';
import Product from './components/Product.vue';

export default {
  name: 'app',
  components: {
    Card,
    Product
  }
}
</script>


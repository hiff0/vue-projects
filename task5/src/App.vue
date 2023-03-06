<template>
  <div id="app">
    <header>
      <div class="container">
        <h2 class="mt-5">Site</h2>
        <div v-if="!dataNotSendig">Hello, {{ name }}</div>
        <hr>
      </div>
    </header>
    <section>
      <div class="container d-flex justify-content-end">
        <div class="w-50 d-flex flex-column align-items-start justify-content-center" v-if="dataNotSendig">
          <div class="progres_bar mt-3" :style="getWidth"></div>
          <app-input v-for="(item, index) in inputData" :key="index" :item="item" :index="index">
          </app-input>
          <app-button :button-disabled="buttonDisabled"></app-button>
        </div>
        <div class="w-50 d-flex flex-column mt-3" v-else>
          <app-table :input-data="inputData"></app-table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Input from './components/Input.vue';
import Button from './components/Button.vue';
import Table from './components/Table.vue';
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    'app-input': Input,
    'app-button': Button,
    'app-table': Table
  },
  data() {
    return {
      buttonDisabled: true
    }
  },
  computed: {
    ...mapGetters([
      'inputData',
      'dataNotSendig',
      'name'
    ]),
    getWidth() {
      let done = 0;
      for (const item of this.inputData) {
        done += item.class === 'item-cool' ? 1 : 0;
      }

      const progressWidth = (100 / this.inputData.length) * done;
      this.buttonDisabled = progressWidth !== 100;
      console.log(this.buttonDisabled);
      return { width: progressWidth + '%' }
    }
  }
}
</script>

<style>
label {
  font-weight: bold;
}

.item-cool::after {
  content: "\f087";
  font-family: FontAwesome;
  color: #3dd535;
  margin-left: 5px;
}

.item-notcool::after {
  content: "\f00d";
  font-family: FontAwesome;
  color: #bb4444;
  margin-left: 5px;
}

.progres_bar {
  height: 30px;
  background-color: #523fb2;
  border-radius: 5px;
}
</style>

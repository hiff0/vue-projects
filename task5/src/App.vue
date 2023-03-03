<template>
  <div id="app">
    <div class="container">
      <div class="d-flex justify-content-center mt-3">
        <transition>
          <div class="w-50 d-flex flex-column align-items-start justify-content-center" v-if="dataNotSendig">
            <div class="progres_bar mt-3" :style="getWidth"></div>
            <div class="w-100 d-flex flex-column">
              <div class="row mt-3">
                <div class="col">
                  <app-input v-for="(item, index) in inputData" :key="index" :item="item">
                  </app-input>
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col">
                <button type="button" class="btn btn-success" :class="buttonClass" @click="dataSend">Send
                  Data</button>
              </div>
            </div>
          </div>
        </transition>
        <div class="w-100 d-flex flex-column mt-3" v-if="!dataNotSendig">
          <table class="table table-bordered">
            <tr v-for="item of inputData">
              <td>{{ item.name }}</td>
              <td>{{ item.value }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from './components/Input.vue';

export default {
  name: 'app',
  components: {
    'app-input': Input
  },
  data() {
    return {
      inputData: [
        {
          name: 'Name',
          value: '',
          pattern: /^[a-zA-Z]{2,30}$/,
          class: ''
        },
        {
          name: 'Phone',
          value: '',
          pattern: /^[0-9]{7,14}$/,
          class: ''
        },
        {
          name: 'Email',
          value: '',
          pattern: /.+/,
          class: ''
        },
        {
          name: 'Some Field 1',
          value: '',
          pattern: /.+/,
          class: ''
        },
        {
          name: 'Some Field 2',
          value: '',
          pattern: /.+/,
          class: ''
        },
      ],
      email: '',
      firstName: '',
      phone: '',
      someField1: '',
      someField2: '',
      dataNotSendig: true,
      buttonClass: 'disabled'
    }
  },
  methods: {
    dataSend() {
      this.dataNotSendig = false;
    }
  },
  computed: {
    getWidth() {
      let done = 0;
      for (const item of this.inputData) {
        done += item.class === 'item-cool' ? 1 : 0;
      }

      const progressWidth = (100 / this.inputData.length) * done;
      this.buttonClass = progressWidth === 100 ? '' : 'disabled';

      return { width: progressWidth + '%' }
    }
  }
}
</script>

<style></style>

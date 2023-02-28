<template>
  <div id="app">
    <div class="container">
      <app-question :is-radio="isRadio()" :question="questions[currIndexQuestion]" :answers="answers"
        :buttonc="getButtonClass()" @nextquestions="onNextQuestion" @oninput="onInput" v-if="!isTable"></app-question>
      <!-- <button class="btn btn-success mt-4" @click="onClick">Далее</button> -->
      <app-table :answers="answers" v-if="isTable"></app-table>
    </div>
  </div>
</template>

<script>
import Question from './components/Question.vue';
import Table from './components/Table.vue';

export default {
  name: 'app',
  components: {
    'app-question': Question,
    'app-table': Table
  },
  data() {
    return {
      questions: [
        {
          type: 'radio',
          title: 'Какой тег задаёт ссылку?',
          answers: [
            'a',
            'div',
            'span',
            'img'
          ]
        },
        {
          type: 'checkbox',
          title: 'Какие из  этих тегов строчные?',
          answers: [
            'a',
            'div',
            'span',
            'img'
          ]
        }
      ],
      currIndexQuestion: 0,
      answers: {
        radioValue: '',
        a: false,
        div: false,
        span: false,
        img: false,
      },
      isTable: false,
      buttonClass: 'disabled'
    }
  },
  methods: {
    onNextQuestion() {
      if (this.currIndexQuestion === 1) {
        this.isTable = true;
        return;
      }
      this.currIndexQuestion += 1;
    },
    isRadio() {
      return this.currIndexQuestion === 0
    },
    onInput(el) {
      this.answers.radioValue = el;
    },
    getButtonClass() {
      if (this.currIndexQuestion === 0 && this.answers.radioValue === '') {
        return 'disabled'
      } else if (this.currIndexQuestion === 0 && this.answers.radioValue !== '') {
        return ''
      } else if (this.currIndexQuestion === 1 &&
        this.answers.a === false &&
        this.answers.div === false &&
        this.answers.span === false &&
        this.answers.img === false) {
        return 'disabled'
      } else {
        return ''
      }
    }
  }
}
</script>

<style></style>

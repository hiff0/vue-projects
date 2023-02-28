<template>
    <div class="quest mt-5">
        <h2>{{ question.title }}</h2>
        <keep-alive>
            <app-radio v-if="isRadio" :radio-value="answers.radioValue" @oninput="onInput"></app-radio>
            <app-checkbox v-else :answers="answers"></app-checkbox>
        </keep-alive>
        <app-button :curr-index-question="0" @nextquestions="onNextQuestion" :buttonc="buttonc"></app-button>
    </div>
</template>

<script>
import RadioAnswers from './RadioAnswers.vue';
import CheckboxAnswers from './CheckboxAnswers.vue';
import Button from './Button.vue';

export default {
    name: 'app-question',
    components: {
        'app-radio': RadioAnswers,
        'app-checkbox': CheckboxAnswers,
        'app-button': Button
    },
    props: {
        question: {
            type: Object,
            required: true
        },
        isRadio: {
            type: Boolean,
            required: true
        },
        answers: {
            type: Object,
            required: true
        },
        buttonc: {
            type: String,
            required: true
        }
    },
    methods: {
        onNextQuestion() {
            this.$emit('nextquestions');
        },
        onInput(el) {
            this.$emit('oninput', el);
        }
    }
}
</script>
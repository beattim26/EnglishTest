<template>
  <div class="container p-0">
    <form class="test-form" @submit.prevent="nextQuestion">
      <div class="row">
        <div class="col-10 col-lg-11">
          <p class="test-form__paragraph m-0">Question {{dataIndex}}</p>
          <h2 class="test-form__title m-0">{{data.text}}</h2>
        </div>
        <div class="col-2 col-lg-1 d-flex justify-content-start justify-content-sm-center align-items-center" v-if="data.type == 'openTest'">
          <timer :autoStart="isStart" :minute="1" @next-step="nextQuestion" />
        </div>
        <div class="col-2 col-lg-1 d-flex justify-content-start justify-content-sm-center align-items-center" v-if="data.type == 'closeTest'">
          <timer :autoStart="isStart" :minute="10" @next-step="nextQuestion" />
        </div>
        <div class="col-2 col-lg-1 d-flex justify-content-start justify-content-sm-center align-items-center" v-if="data.type == 'choiceTest'">
          <timer :autoStart="isStart" :minute="10" @next-step="nextQuestion" />
        </div>
      </div>
      <div class="row mt-4" v-if="data.type == 'openTest'">
        <div class="col-12 row justify-content-center">
          <div class="col-12 col-md-6 row justify-content-center form-check mb-3" v-for="(item, index) in data.answers" :key="index">
            <div class="col-12 col-md-6 m-auto">
              <input type="radio" class="form-check-input" :id="index" name="materialExampleRadios" :value="item" v-model="openAnswers">
              <label class="form-check-label" :for="index">{{item
                }}</label>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4 justify-content-center" v-if="data.type == 'closeTest'">
        <div class="col-12">
          <p class="antonym-list text-center">{{data.words}}</p>
        </div>
        <div class="col-12 d-flex justify-content-center" v-for="(item, index) in data.answers" :key="index">
          <p class="text-center"><span>{{item[0]}}</span>
            <input type="text" class="input-question text-center" v-model="closeAnswers[index]">
            <span>{{item[1]}}</span>.</p>
        </div>
      </div>
      <div class="row mt-4 justify-content-center" v-if="data.type == 'choiceTest'">
        <div class="col-12">
          <p class="antonym-list text-center">{{data.words}}</p>
        </div>
        <div class="col-12 col-lg-6 row justify-content-center" v-for="(item, index) in data.answers" :key="index">
          <p><span v-for="(word, index) in item" :key="index">{{word}}, </span></p>
          <input type="text" class="input-question text-center mb-2" v-model="closeAnswers[index]">
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-12 d-flex justify-content-end">
          <button type="submit" class="btn btn-outline-success btn-next">Next Question</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import Timer from './Timer.vue';
export default {
  data() {
    return {
      data: this.question,
      dataIndex: this.questionIndex,
      openAnswers: '',
      closeAnswers: {
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
        answer5: '',
        answer6: '',
        answer7: '',
        answer8: '',
        answer9: '',
        answer10: '',
        answer11: '',
        answer12: '',
        answer13: '',
        answer14: '',
        answer15: '',
        answer16: '',
        answer17: '',
        answer18: '',
        answer19: '',
        answer20: '',
      },
      isStart: true,
      answerGrade: 0
    }
  },
  components: {
    Timer
  },
  computed: {
    isConfirmQuestion: function() {
      let self = this;
      if (this.data.type === 'openTest') {
        if (this.data.rightAnswers.toLowerCase() === this.openAnswers.toLowerCase()) {
          self.answerGrade = 1;
        }
      }

      if (this.data.type === 'choiceTest' || this.data.type === 'closeTest') {
        for (let prop in this.closeAnswers) {
          if (this.closeAnswers[prop].toLowerCase() === this.data.rightAnswers[prop].toLowerCase()) {
            self.answerGrade = self.answerGrade + 1;
          }
        }
      }
      return this.answerGrade;
    }
  },
  props: {
    question: {

    },
    questionIndex: {
      type: Number,
      default: 1
    }
  },
  methods: {
    nextQuestion: function() {
      this.isConfirmQuestion;
      this.$emit('userAnswers', { isGrade: this.answerGrade });
    }
  },
}

</script>
<style lang="scss">
@import "../scss/form.scss"

</style>

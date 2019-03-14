<template>
  <div>
    <div class="container">
      <div class="test row align-items-center justify-content-between">
        <div class="col-4 mb-2 mb-lg-0">
          <h1 class="test__title">English Test</h1>
        </div>
        <div class="col-4 d-flex justify-content-end">
          <button type="button" class="btn btn-outline-danger cancel-test" v-bind:disabled="questionStep == null" @click="resetTest">Cancel the Test</button>
        </div>
      </div>
    </div>
    <progressbar-vue :questions="allQuestions" :questionIndex="questionStep" />
    <transition name="fade" mode="out-in">
      <div class="container p-0" v-if="step == 0" key="0">
        <form class="welcome-form" @submit.prevent="startTest">
          <h2 class="text-center">Welcome to the English test</h2>
          <p class="text-center welcome-form__paragraph m-auto">This test may take n minutes to complete. Time to complete each question is limited. To complete the test you have to answer all the questions. To start the test press the start button.</p>
          <div class="row mb-2">
            <div class="col-12 d-flex justify-content-center mt-3">
              <button type="submit" class="btn btn-outline-success btn-next">Start</button>
            </div>
          </div>
        </form>
      </div>
      <transition name="fade" mode="out-in" v-if="step == 1">
        <question @userAnswers="nextQuestion" :question="currentAnswer" :questionIndex="questionStep + 1" />
      </transition>
      <div class="container p-0" v-if="step == 2" key="1">
        <div class="result-form d-flex justify-content-center">
          <div class="row">
            <div class="col-12 row justify-content-center">
              <h2 class="result__title m-0">Your Score:</h2>
            </div>
            <div class="col-12 row justify-content-center">
              <p class="test-result m-0"><span class="test-result__number">{{totalGrade}}</span> out of 5</p>
            </div>
            <div class="col-12 row justify-content-center align-items-end">
              <button type="button" class="btn btn-outline-success btn-next btn-finish" @click="doneTest">Done</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Question from './Question.vue';
import ProgressbarVue from './ProgressBar.vue';
const questions = [{
  text: 'Stern, sinister, ghastly',
  answers: ['dormant', 'grim', 'haven', 'rouse', 'bland'],
  rightAnswers: 'grim',
  type: 'openTest',
}, {
  text: 'A longing for that which is gone',
  answers: ['sparse', 'unwieldy', 'steadfast', 'meddle', 'nostalgia'],
  rightAnswers: 'nostalgia',
  type: 'openTest',
}, {
  text: 'No longer in use, not using the most recent technology',
  answers: ['revive', 'obsolete', 'cask', 'morsel', 'principle'],
  rightAnswers: 'obsolete',
  type: 'openTest',
}, {
  text: 'Stuff, unyielding',
  answers: ['premature', 'rigid', 'document', 'stall', 'meager'],
  rightAnswers: 'rigid',
  type: 'openTest',
}, {
  text: 'To intimidate or impress by a false display of confidence',
  answers: ['foolhardy', 'bluff', 'frigid', 'prelude', 'alibi'],
  rightAnswers: 'bluff',
  type: 'openTest',
}, {
  text: 'Serious mistake caused by ignorance or confusion',
  answers: ['refuge', 'agony', 'capacity', 'portait', 'blunder'],
  rightAnswers: 'blunder',
  type: 'openTest',
}, {
  text: 'Straightforward, open and since',
  answers: ['frank', 'somber', 'taunt', 'mutiny', 'nomad'],
  rightAnswers: 'frank',
  type: 'openTest',
}, {
  text: 'Extremely careful and diligent',
  answers: ['boisterous', 'revert', 'painstaking', 'span', 'nonchalant'],
  rightAnswers: 'painstaking',
  type: 'openTest',
}, {
  text: 'Choose the antonym',
  words: 'amiable attire bungle commend contemporary dilegent dumbfounded epic flammable glum inept irk mediocre ovation relinquish reverie squalor strident underscore vagabond',
  answers: {
    answer1: ['hard-working', 'persistent', 'busy'],
    answer2: ['average', 'ordinary', 'inferior'],
    answer3: ['abandon', 'forgo', 'surrener'],
    answer4: ['approve', 'praise', 'entrust'],
    answer5: ['legendary', 'heroic', 'larger-than-life'],
    answer6: ['modern', 'simultaneos', 'current'],
    answer7: ['burnable', 'combustible', 'ignitable'],
    answer8: ['irritate', 'annoy', 'botner'],
    answer9: ['applause', 'acclaim', 'praise'],
    answer10: ['filth', 'wretchedness', 'dirtiness'],
    answer11: ['astonished', 'amazed', 'confused'],
    answer12: ['harsh', 'shrill', 'noisy'],
    answer13: ['daydream', 'contemplation', 'fantasy'],
    answer14: ['pleasant', 'friendly', 'agreeable'],
    answer15: ['botch', 'mismanage', 'ruin'],
    answer16: ['clothes', 'apparel', 'dress'],
    answer17: ['underline', 'emphasize', 'highlight'],
    answer18: ['gloomy', 'sad', 'melancholy'],
    answer19: ['nomad', 'vagant', 'wanderer'],
    answer20: ['clumsy', 'unskilled', 'incompetent'],
  },
  rightAnswers: {
    answer1: 'diligent',
    answer2: 'mediocre',
    answer3: 'relinquish',
    answer4: 'commend',
    answer5: 'epic',
    answer6: 'contemporary',
    answer7: 'flammable',
    answer8: 'irk',
    answer9: 'ovation',
    answer10: 'squalor',
    answer11: 'dumbfounded',
    answer12: 'strident',
    answer13: 'reverie',
    answer14: 'amiable',
    answer15: 'inept',
    answer16: 'attire',
    answer17: 'underscore',
    answer18: 'glum',
    answer19: 'vagabond',
    answer20: 'bungle',
  },
  type: 'choiceTest',
}, {
  text: 'Choose the antonym',
  words: 'amiable attire bungle commend contemporary dilegent dumbfounded epic flammable glum inept irk mediocre ovation relinquish reverie squalor strident underscore vagabond',
  answers: {
    answer1: ['smallness', 'tiny space', 'absence'],
    answer2: ['sad', 'unhappy', 'depressive', 'gloomy by nature'],
    answer3: ['destroy', 'ruin', 'deconstruct'],
    answer4: ['biased', 'involved', 'passionate', 'prejudiced'],
    answer5: ['to separate', 'depart from one another'],
    answer6: ['individual', 'pair', 'small group'],
    answer7: ['go back for', 'return', 'remember'],
    answer8: ['hobby', 'drudge', 'accidental career'],
    answer9: ['big', 'giant', 'gigantic', 'huge', 'large'],
    answer10: ['blocked view', 'obscured view', 'limited view'],
    answer11: ['sad', 'sorrowful', 'in temporary poor spirits'],
    answer12: ['law', 'police', 'bystander'],
    answer13: ['seriousness', 'inactivity'],
    answer14: ['out in the open', 'public'],
    answer15: ['avoidable', 'likely', 'preventable', 'certain to happen'],
    answer16: ['greedy', 'mean', 'evil', 'unkind', 'selfish'],
    answer17: ['urban', 'suburban', 'metropolitain'],
    answer18: ['earthly', 'mortal', 'terrestrial'],
    answer19: ['invisible', 'obscured', 'hidden', 'not well known'],
    answer20: ['called-for', 'justifed', 'proven', 'reasonable'],
  },
  rightAnswers: {
    answer1: 'diligent',
    answer2: 'mediocre',
    answer3: 'relinquish',
    answer4: 'commend',
    answer5: 'epic',
    answer6: 'contemporary',
    answer7: 'flammable',
    answer8: 'irk',
    answer9: 'ovation',
    answer10: 'squalor',
    answer11: 'dumbfounded',
    answer12: 'strident',
    answer13: 'reverie',
    answer14: 'amiable',
    answer15: 'inept',
    answer16: 'attire',
    answer17: 'underscore',
    answer18: 'glum',
    answer19: 'vagabond',
    answer20: 'bungle',
  },
  type: 'choiceTest',
}, {
  text: 'Sentence Completions',
  words: 'adequate astute bystander concur despot docile era gala hovel infamous lavish medley naive parch ponder radiant revere sovereign throng vindictive',
  answers: {
    answer1: ["During the Queen's Jubilee a", "of people gathered in front of Buckingham Palace for a glimpse of the royal family"],
    answer2: ["In honor of her Jubilee, the Queen threw a", "party at the palace for 3,000 of her closest friends"],
    answer3: ["The Queen's", "featured a formal dinner and performance by many famous musicians"],
    answer4: ["All the Queen's admirers greatly respect her role as a", ""],
    answer5: ["Country Z is run by a terrible", "who rules with an iron fist"],
    answer6: ["The", "puppy didn't mind when people tried to pick him up"],
    answer7: ["I am not so", "as to think that everything I read on the interent is true"],
    answer8: ["The band covered a", "of songs that included many all-time greatest hits"],
    answer9: ["The hits spanned every important contemporary musical", ", from 1920s jazz to 1970s glam rock"],
    answer10: ["The", "understudy tried to ruin the show because he resented not being cast in the play"],
    answer11: ["Many Americans", "Paul Revere for the important role he played in the Revolutionary War"],
    answer12: ["The", "child learned to read when she was just a toddler"],
    answer13: ["Nancy's defense team proved that she was just an innocent", "watching the crime take place"],
    answer14: ["I have a fine house, but it looks like a", "next to Bill Gates's elaborate mansion"],
    answer15: ["The small kitchen is", "for my needs, but it certainly wouldn't satisfy a gourmet chef"],
    answer16: ["Some celebrities are", "for their irresponsible decisions and wasteful spending"],
    answer17: ["Rick made sure to drink enough water in the desert so that the hot climate would not", "his throat"],
    answer18: ["Whether the chicken or the egg came first is an important question to", ""],
    answer19: ["I", "with Dr.Simpson's assessment: you definitely have the measles"],
    answer20: ["The movie star looked", "as she stepped onto the red carpet for her film's premiere"],
  },
  rightAnswers: {
    answer1: 'throng',
    answer2: 'lavish',
    answer3: 'gala',
    answer4: 'sovereign',
    answer5: 'despot',
    answer6: 'docile',
    answer7: 'naive',
    answer8: 'medley',
    answer9: 'era',
    answer10: 'vindictive',
    answer11: 'revere',
    answer12: 'astute',
    answer13: 'bystander',
    answer14: 'hovel',
    answer15: 'adequate',
    answer16: 'infamous',
    answer17: 'parch',
    answer18: 'ponder',
    answer19: 'concur',
    answer20: 'radiant',
  },
  type: 'closeTest',
}];
export default {
  data() {
    return {
      step: 0,
      questionStep: null,
      allQuestions: questions,
      userAnswers: [],
      totalGrade: 0
    }
  },
  components: {
    Question,
    ProgressbarVue
  },
  methods: {
    startTest: function() {
      this.step = 1;
      this.questionStep = 0;
    },

    nextQuestion: function(answer) {
      this.userAnswers.push(answer.isGrade);

      if (this.questionStep === this.allQuestions.length - 1) {
        this.finishTest();
        this.step = 2;
      }

      this.questionStep++;
    },

    finishTest: function() {
      const ALL_QEUSTION = 68;
      let correctAnswers = 0;

      for (let i = 0; i < this.userAnswers.length; i++) {
        correctAnswers = correctAnswers + this.userAnswers[i];
      }
      let totalGrade = 100 / (ALL_QEUSTION / correctAnswers) / 5 / 4;
      this.totalGrade = totalGrade.toFixed(1);
    },

    resetTest: function() {
      if (this.questionStep != null) {
        if (confirm('Canceling the test resets the current result')) {
          this.step = 0;
          this.questionStep = null;
          this.userAnswers = [];
          this.totalGrade = null;
        }
      }
    },
    doneTest: function() {
      this.step = 0;
      this.questionStep = null;
      this.userAnswers = [];
      this.totalGrade = null;
    }
  },
  computed: {
    currentAnswer: function() {
      return this.allQuestions[this.questionStep];
    },
  }
}

</script>
<style lang="scss">
@import "../scss/form.scss"

</style>

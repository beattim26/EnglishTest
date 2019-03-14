<template>
  <div
 class="container mt-2">
    <div class="row justify-content-center">
      <div class="progress-block col-2 col-md-1 p-0 mb-2" v-for="(item, index) in data" :key="index">
        <h3 class="progress-block__title text-center">{{index + 1}}</h3>
        <div class="progress-block__square m-auto d-flex justify-content-center align-items-center" v-bind:class="{'progress-block__square-active' : questionNow == index, 'progress-block__square-done' : questionNow > index}">
        <p class="progress-block__square-paragpaph">?</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: this.questions,
      activeQuestion: false,
      lastQuestion: false,
    }
  },
  computed: {
    questionNow: function () {
      return this.questionIndex;
    }
  },
  props: {
    questions: {

    },
    questionIndex: {
      type: Number,
      default: 0
    }
  },
}

</script>
<style lang="scss">
@import "../scss/form.scss"

</style>

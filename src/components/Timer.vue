<template>
  <div class="col-2 col-lg-1 d-flex justify-content-start align-items-center">
    <div class="timer">{{timerStr}}</div>
    <svg class="timer-svg">
      <circle r="23" cx="30" cy="30" class="timer-svg__circle"></circle>
    </svg>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timeToTest: this.minute * 60,
      timerId: '',
    }
  },
  computed: {
    timerStr() {
      let minutes = parseInt(this.timeToTest / 60, 10)
      let seconds = parseInt(this.timeToTest % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      let result = minutes + ":" + seconds;

      return result;
    }
  },
  props: {
    minute: {
      type: Number,
      default: 1
    },
    autoStart: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    startTimer() {
      var self = this;
      this.timeToTest = this.minute * 60;
      var display = document.querySelector('.timer');
      var timer =  document.querySelector('.timer-svg__circle');

      this.timerId = setInterval(function() {
        self.timeToTest--;

        if (self.timeToTest < 11) {
          display.style.color = '#dc3545';
          timer.style.stroke = '#dc3545';
        }

        if (self.timeToTest === 0) {
          clearInterval(self.timerId);
          setTimeout(function(){
            self.nextStep();
          }, 1000)
        }
      }, 1000);
    },

    stopTimer() {
      clearInterval(this.timerId);
    },

    nextStep() {
        this.$emit('next-step');
    }
  },
  mounted() {
    if (this.autoStart) {
      this.startTimer();
      document.querySelector('.timer-svg__circle').style.animation = 'countdown ' + this.timeToTest + 's linear forwards';
    }
  }
}

</script>
<style lang="scss">
@import "../scss/form.scss"

</style>

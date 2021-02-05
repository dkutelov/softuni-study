<template>
  <div id="app">
    <h2 @mouseover="toggleShowDate">Time is ... ?</h2>
    <p v-show="showDate">Current time: {{ currentTime }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isVisible: true,
      selectedNumber: 0,
      showDate: false,
      currentTime: null,
    };
  },
  methods: {
    toggleShowDate() {
      let setTime;
      if (!this.showDate) {
        this.showDate = true;
        const options = {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        };
        setTime = setInterval(() => {
          let date = new Date();
          this.currentTime = new Intl.DateTimeFormat("bg-BG", options).format(
            date,
          );
          console.log(this.currentTime);
        }, 1000);
      } else {
        this.showDate = false;
        clearInterval(setTime);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

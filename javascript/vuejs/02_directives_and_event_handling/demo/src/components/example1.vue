<template>
  <div id="app">
    <h1>Conditional Rendering</h1>


    <p @mouseover="toggleShowDate">Time is ...</p>
    <p v-show="showDate">{{getDate()}}</p>

    <!-- --- -->
    <p v-if="isVisible">This text is visible</p>
    <p v-show="isVisible">This text has been shown.</p>
    <template v-if="isVisible">
      <p>p1</p>
      <p>p2</p>
    </template>
    <p v-else>Text was hidden</p>
    <h2>Number</h2>
    <p v-if="selectedNumber > 0">Number is positive</p>
    <p v-else-if="selectedNumber === 0">Number is zero</p>
    <p v-else>Number is negative</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isVisible: true,
      selectedNumber: 0,
      showDate: false
    }
  },
  methods: {
    getDate() {
      let date = new Date(Date.now())
      const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
      date = date.toLocaleDateString('bg-BG', options);
      return date
    },
    toggleShowDate() {
      this.showDate = !this.showDate
    }
  }
}
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

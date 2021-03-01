<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{ msg }}</p>
    <p>{{ msg | reverse }}</p>
    <!-- <p v-highlight="red">Red color</p> -->
    <!-- <input v-event:input="inputHandler" type="text" /> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      msg: "Hi hi",
    };
  },
  filters: {
    reverse(value) {
      return value
        .split("")
        .reverse()
        .join("");
    },
  },
  methods: {
    inputHandler(e) {
      console.log(e);
    },
  },
};
</script>

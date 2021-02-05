<template>
  <div id="app">
    <h1>Enter text</h1>
    <input type="text" @input="handleEvent" />
  </div>
</template>

// :class="{ // fruit: item.type === 'fruit', // veggie: item.type === 'veggie',
// }

<script>
export default {
  name: "App",
  data() {
    return {
      username: null,
    };
  },
  methods: {
    handleEvent(event) {
      this.username = event.target.value;
      console.log(this.username);
    },
  },
};
</script>

<style>
.list {
  list-style: none;
  background-color: cadetblue;
  padding: 3em;
}

.item {
  border: 2px solid gray;
}

.fruit {
  background-color: indigo;
}

.veggie {
  background-color: blue;
}
</style>

<template>
  <div id="app">
    <ul class="list">
      <li class="item" v-for="(item, i) in listOfItems" :class="item.type">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

// :class="{ // fruit: item.type === 'fruit', // veggie: item.type === 'veggie',
// }

<script>
export default {
  name: "App",
  data() {
    return {
      listOfItems: [
        {
          type: "veggie",
          name: "carrots",
        },
        {
          type: "fruit",
          name: "apple",
        },
      ],
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

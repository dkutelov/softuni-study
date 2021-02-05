<template>
  <div id="app">
    <h1>Full Demo</h1>
    <div>Fav images: {{ favCount }} {{ hasTooMany ? "too many" : "" }}</div>
    <div class="controls">
      <span>Filter by</span>
      <button @click="onFilter('nature')">Nature</button>
      <button @click="onFilter('sea')">Sea</button>
      <button @click="onFilter('reset')">Reset</button>
    </div>
    <ul class="imageList">
      <li class="item" v-for="(item, i) in filteredItems" :key="i">
        <img
          @click="addToFavs(i)"
          class="image"
          :class="{ saved: item.saved }"
          :src="item.url"
          :alt="`${item.type} - ${i}`"
        />
      </li>
    </ul>
    <h3>Random Number</h3>
    <p>The number {{ number }} is {{ type }}</p>
    <button @click="generateNumber">New</button>
  </div>
</template>

<script>
const data = [
  {
    saved: false,
    type: "sea",
    url:
      "https://images.unsplash.com/photo-1439405326854-014607f694d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
  },
  {
    saved: false,
    type: "sea",
    url:
      "https://images.unsplash.com/photo-1524275804141-5e9f2bc5a71d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
  },
  {
    saved: false,
    type: "sea",
    url:
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2252&q=80",
  },
  {
    saved: false,
    type: "sea",
    url:
      "https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
  },
  {
    saved: false,
    type: "sea",
    url:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
  },
  {
    saved: false,
    type: "nature",
    url:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2253&q=80",
  },
  {
    saved: false,
    type: "nature",
    url:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80",
  },
  {
    saved: false,
    type: "nature",
    url:
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
  },
  {
    saved: false,
    type: "nature",
    url:
      "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
  },
  {
    saved: false,
    type: "nature",
    url:
      "https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
  },
];
export default {
  name: "App",
  data() {
    return {
      filteredItems: [...data],
      favourits: [],
      hasClicked: false,
      number: 0,
      type: "",
    };
  },
  computed: {
    favCount() {
      return this.filteredItems.filter((i) => i.saved).length;
    },
    hasTooMany() {
      return this.favCount > 2;
    },
  },
  watch: {
    hasClicked: function(nV, oV) {
      console.log("the watcher listens");
    },
    number: function(nV, Ov) {
      if (nV % 2 === 0) {
        this.type = "even";
      } else {
        this.type = "odd";
      }
    },
  },
  methods: {
    onFilter(type) {
      if (type === "reset") {
        this.filteredItems = [...data];
      } else {
        this.filteredItems = data.filter((item) => item.type === type);
      }
      this.favCount += 1;
    },
    addToFavs(i) {
      const selectedItem = this.filteredItems[i];
      selectedItem.saved = !selectedItem.saved;
      this.hasClicked = !this.hasClicked;
    },
    generateNumber() {
      this.number = Math.floor(Math.random() * 20) + 1;
    },
  },
};
</script>

<style>
body {
  box-sizing: border-box;
}

.imageList {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 6px;
  row-gap: 6px;
  padding: 0;
  margin: 0;
}

.item {
  list-style: none;
}

.image {
  max-width: 100%;
  border-radius: 12px;
  border: 1px solid transparent;
}

.controls {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.controls button {
  padding: 8px 16px;
  margin: 0 5px;
}

.saved {
  border: 1px solid red;
  border-radius: 12px;
}
</style>

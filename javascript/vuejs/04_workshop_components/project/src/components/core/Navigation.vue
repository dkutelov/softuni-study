<template>
  <div class="navigation">
    <ul>
      <li v-for="nav in navigationItems" :key="nav.id">
        <a
          :class="{ active: isMenuActive(nav.id) }"
          href="#"
          @click.prevent="onMenuItemClick(nav.id)"
          >{{ nav.name }}</a
        >
      </li>
    </ul>

    <ul>
      <li>
        <a href="#" @click="onNewSubject">SUBJECT [+]</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    navigationItems: {
      type: Array,
      required: true,
    },
    activeItem: {
      type: String,
      required: true,
    },
  },
  methods: {
    onMenuItemClick(id) {
      this.$emit("nav-click", id);
    },
    onNewSubject() {
      this.$emit("on-create-subject");
    },
    isMenuActive(id) {
      return this.activeItem === id;
    },
  },
};
</script>

<style scoped>
main div.navigation {
  background: #44a9f8;
  font-size: 20px;
  text-align: left;
  display: flex;
}

main div.navigation ul {
  display: inline-block;
  text-align: left;
}

main div.navigation ul:nth-child(1) {
  width: 75%;
}

main div.navigation ul:nth-child(2) {
  width: 20%;
  text-align: right;
}

main div.navigation li {
  list-style: none;
  display: inline-block;
  margin-right: 3%;
}

main div.navigation ul:nth-child(2) li {
  width: 100%;
}

main div.navigation li a {
  padding: 1%;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.active {
  font-style: italic;
}

main div.navigation li a:hover {
  text-decoration: underline;
}
</style>

<template>
  <li
    class="memory-card"
    :class="{ flip: card.visible, 'disable-card': card.matched }"
    :data-framework="card.name"
    @click="onCardClick(card, index)"
  >
    <img class="front-face" svg-inline :src="card.image" :alt="card.name" />
    <img class="back-face" src="../assets/img/js-badge.svg" alt="JS Badge" />
  </li>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      requird: true,
    },
    index: {
      type: Number,
      requird: true,
    },
  },
  methods: {
    onCardClick(card, index) {
      this.$emit("onCardClick", card, index);
    },
  },
};
</script>

<style lang="scss" scoped></style>

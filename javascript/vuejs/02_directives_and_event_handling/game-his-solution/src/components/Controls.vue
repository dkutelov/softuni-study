<template>
  <div class="controls">
    <button class="btn" @click="onGameStart" :disabled="isGameStarted">
      Start new game
    </button>
    <button class="btn" @click="handleGameReset" :disabled="!isGameStarted">
      Reset game
    </button>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    isGameStarted: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    onGameStart() {
      this.$emit("onGameStart");
    },
    handleGameReset() {
      this.$emit("handleGameReset");
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="form-group">
    <label for="second-email">Email</label>
    <input
      type="text"
      id="second-email"
      class="form-control"
      :value="value"
      @input="inputHandler"
    />
  </div>
</template>

<script>
export default {
  props: { value: String },
  methods: {
    inputHandler(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style scoped></style>

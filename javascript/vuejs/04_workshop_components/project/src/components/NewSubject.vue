<template>
  <div>
    <div class="form-group">
      <input
        placeholder="Technology subject..."
        type="text"
        id="subject"
        v-model="title"
      />
    </div>
    <vue-editor v-model="content" />
    <select name="technologies" id="technologies" v-model="technology">
      <option value="default" selected>Select a technology...</option>
      <option v-for="tech in technologies" :key="tech.id" :value="tech.id">{{
        tech.name
      }}</option>
    </select>
    <button class="btn" @click="onSave">Create</button>
    <h3>Content preview</h3>
    <div class="content-preview" v-html="content" />
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  components: {
    VueEditor,
  },
  props: {
    technologies: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      content: "",
      title: "",
      technology: "default",
    };
  },
  methods: {
    onSave() {
      if (!this.technology || this.technology === "default") return;
      const newData = {
        name: this.title,
        content: this.content,
      };
      this.$emit("on-save", this.technology, newData);
    },
  },
};
</script>

<style scoped>
div.form-group {
  margin-top: 1%;
  margin-bottom: 1%;
}

div.form-group input,
option,
select {
  font-size: 18px;
  padding: 1%;
  width: 25%;
  border: none;
  border-bottom: 1px solid black;
  font-size: 16px;
  font-family: inherit;
  text-align: center;
  text-align-last: center;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}

.content-preview {
  text-align: left;
  word-wrap: break-word;
  display: block;
  width: 100%;
}

.btn {
  padding: 1%;
  background: #44a9f8;
  color: white;
  border: none;
  width: 10%;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid white;
  display: block;
  margin: 0 auto;
  margin-top: 1%;
  margin-bottom: 1%;
}

.btn:hover {
  color: #44a9f8;
  background: white;
  border: 1px solid #44a9f8;
  text-decoration: underline;
}
</style>

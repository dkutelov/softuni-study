<template>
  <aside class="content-navigation">
    <ul>
      <li
        v-for="(subject, i) in subjects"
        :key="i"
        :class="{ active: isActive(subject.name) }"
      >
        <a @click="onSubjectClick(subject.name)" href="#">{{ subject.name }}</a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "Subjects",
  data() {
    return {
      activeName: null,
    };
  },
  props: {
    technologies: {
      type: Array,
      required: true,
    },
    selectedMenuId: {
      type: String,
      required: true,
    },
  },
  computed: {
    subjects() {
      const { subjects } = this.technologies.find(
        (t) => t.id === this.selectedMenuId,
      );
      return subjects;
    },
  },
  methods: {
    onSubjectClick(subjectName) {
      this.activeName = subjectName;
      this.$emit("subject-click", subjectName);
    },
    isActive(subjectName) {
      return this.activeName === subjectName;
    },
  },
};
</script>

<style scoped></style>

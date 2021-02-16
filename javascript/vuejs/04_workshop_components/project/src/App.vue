<template>
  <div id="app">
    <Header />
    <main>
      <Navigation
        :navigationItems="tehnologyNames"
        :activeItem="selectedMenuId"
        @nav-click="onMenuClick"
        @on-create-subject="showCreateSubject"
      />
      <div class="main-content">
        <Subjects
          :technologies="tutorials.technologies"
          :selectedMenuId="selectedMenuId"
          @subject-click="onSubjectClick"
        />
        <Content>
          <NewSubject
            v-if="isCreateSubject"
            :technologies="tehnologyNames"
            @on-save="onSubjectSave"
          />
          <div v-else v-html="selectedContent" />
        </Content>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/core/Footer";
import Header from "@/components/core/Header";
import Navigation from "@/components/core/Navigation";
import Subjects from "@/components/core/Subjects";
import Content from "@/components/core/Content";
import NewSubject from "@/components/NewSubject";

import jsonData from "./assets/tutorials.json";

const defaultMenuId = jsonData.technologies[0].id;

export default {
  components: { Header, Footer, Subjects, Navigation, Content, NewSubject },
  data() {
    return {
      tutorials: { ...jsonData },
      selectedMenuId: defaultMenuId,
      selectedSubject: "",
      isCreateSubject: false,
    };
  },
  computed: {
    tehnologyNames() {
      return this.tutorials.technologies.map((tech) => ({
        id: tech.id,
        name: tech.name,
      }));
    },
    selectedContent() {
      const { subjects } = this.tutorials.technologies.find(
        (t) => t.id === this.selectedMenuId,
      );
      const subject = subjects.find((s) => s.name === this.selectedSubject);
      return subject ? subject.content : "";
    },
  },
  methods: {
    onMenuClick(id) {
      this.selectedMenuId = id;
      this.selectedSubject = "";
      isCreateSubject = false;
    },
    onSubjectClick(name) {
      this.selectedSubject = name;
      this.isCreateSubject = false;
    },
    showCreateSubject() {
      this.isCreateSubject = true;
      // this.selectedMenuId = defaultMenuId;
      this.selectedSubject = "";
    },
    onSubjectSave(technology, newData) {
      const { technologies } = this.tutorials;
      const selectedTechnology = technologies.find((t) => t.id === technology);
      selectedTechnology.subjects.push(newData);
      this.isCreateSubject = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

main div.main-content {
  display: flex;
}

main div.main-content .content-navigation {
  width: 20%;
  border-right: 3px solid whitesmoke;
  border-left: 3px solid whitesmoke;
}

main div.main-content .subject-info {
  padding: 1%;
}

main div.main-content .subject-info p {
  font-size: 18px;
}

main .main-content .content-navigation ul {
  margin: 0;
  padding: 0;
}

main div.main-content .content-navigation ul li {
  list-style-type: none;
  padding: 0;
  font-size: 23px;
  cursor: pointer;
  text-align: left;
}

main div.main-content .content-navigation ul li:hover {
  background: whitesmoke;
}

main div.main-content .content-navigation ul li:active,
main div.main-content .content-navigation ul li:nth-child(3) {
  border-right: 5px solid #44a9f8;
}

main div.main-content .content-navigation ul li.active {
  background-color: #44a9f8;
  color: white;
}

main div.main-content .content-navigation ul li a {
  color: inherit;
  text-decoration: none;
  display: block;
  padding: 2em;
}
</style>
